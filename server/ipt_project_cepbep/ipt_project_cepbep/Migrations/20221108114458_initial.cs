using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace iptprojectcepbep.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uuid", nullable: false, defaultValueSql: "gen_random_uuid()"),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Username = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Role = table.Column<int>(type: "integer", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, defaultValueSql: "now()"),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.UserId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_user_Email",
                table: "user",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_user_Username",
                table: "user",
                column: "Username",
                unique: true);
            
            migrationBuilder.CreateTable(
                name: "canvas",
                columns: table => new
                {
                    Canvasid = table.Column<string>(name: "CanvasId", type: "text", nullable: false),
                    Userid = table.Column<Guid>(name: "UserId", type: "uuid", nullable: false),
                    Colors = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_canvas", x => x.Canvasid);
                    table.ForeignKey(
                        name: "FK_canvas_user_UserId",
                        column: x => x.Userid,
                        principalTable: "user",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });
            
            migrationBuilder.CreateTable(
                name: "friend",
                columns: table => new
                {
                    UserId1 = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId2 = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, defaultValueSql: "now()"),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_friend", x => new { x.UserId1, x.UserId2 });
                    table.ForeignKey(
                        name: "FK_friend_user_UserId1",
                        column: x => x.UserId1,
                        principalTable: "user",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_friend_user_UserId2",
                        column: x => x.UserId2,
                        principalTable: "user",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "friend_request",
                columns: table => new
                {
                    SenderId = table.Column<Guid>(type: "uuid", nullable: false),
                    ReceiverId = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, defaultValueSql: "now()"),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_friend_request", x => new { x.ReceiverId, x.SenderId });
                    table.ForeignKey(
                        name: "FK_friend_request_user_ReceiverId",
                        column: x => x.ReceiverId,
                        principalTable: "user",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_friend_request_user_SenderId",
                        column: x => x.SenderId,
                        principalTable: "user",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });            migrationBuilder.CreateIndex(
                name: "IX_canvas_UserId",
                table: "canvas",
                column: "UserId");
            
            migrationBuilder.Sql(
                @"
                CREATE FUNCTION ""User_Update_Timestamp_Function1""() RETURNS TRIGGER LANGUAGE PLPGSQL AS $$
                BEGIN
                    NEW.""UpdatedAt"" := now();
                    RETURN NEW;
                END;
                $$;

                CREATE TRIGGER ""UpdateTimestamp""
                    BEFORE INSERT OR UPDATE
                    ON ""user""
                    FOR EACH ROW
                    EXECUTE PROCEDURE ""User_Update_Timestamp_Function1""();
                "
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "user");
        }
    }
}
