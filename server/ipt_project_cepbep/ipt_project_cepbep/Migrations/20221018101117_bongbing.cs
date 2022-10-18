using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace iptprojectcepbep.Migrations
{
    /// <inheritdoc />
    public partial class bongbing : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "user",
                type: "timestamp with time zone",
                nullable: false,
                defaultValueSql: "NOW()");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "user");
        }
    }
}
