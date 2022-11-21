using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace iptprojectcepbep.Migrations
{
    /// <inheritdoc />
    public partial class addusers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "UserId", "Email", "Password", "Role", "UpdatedAt", "Username" },
                values: new object[,]
                {
                    { new Guid("033faa2c-9e2c-405c-9890-81e96bb18f09"), "Derick58@gmail.com", "EbbUSs38zv", 1, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(8326), "Dorothy_Hills96" },
                    { new Guid("0a82ec1c-7603-48da-bc6b-b1be8c03b051"), "Gwen75@yahoo.com", "wuemtCZXB6", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(5617), "Ettie_Bogisich" },
                    { new Guid("0d395174-1d0a-45b9-b907-a969a176c59c"), "Emiliano75@hotmail.com", "dB9lycF6EV", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(9367), "Marjolaine.Cruickshank2" },
                    { new Guid("120a6e58-3b90-4337-9269-035107d261f6"), "Conor.Crooks19@gmail.com", "yhZ_ZhXJdC", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(5865), "Thalia.Trantow98" },
                    { new Guid("13fc9d80-1d1b-4c7a-bd55-d99563a560c1"), "Lera_Hayes25@yahoo.com", "EK3iVRXr0u", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(9164), "Everette.Ryan" },
                    { new Guid("163b83a0-31aa-48d3-9df5-0b4c5ab651de"), "Trey.Walsh86@gmail.com", "SXJA8C6HCC", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(4537), "Cathrine.Casper18" },
                    { new Guid("1935832b-4fe3-4505-918f-1f9dc584bcf8"), "Orpha79@hotmail.com", "dU3FzXJqUL", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(6322), "Rebekah_Hermann" },
                    { new Guid("1d673fa1-8fce-422a-913a-069dcc2254da"), "Ramona77@yahoo.com", "CUKabHwfhf", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(8497), "Elyse88" },
                    { new Guid("1df7853e-1bb1-4c06-8d66-a5b1da0b92b8"), "Wendell_Wolf@gmail.com", "WUJii6TODG", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(5430), "Novella.Goyette80" },
                    { new Guid("21921a63-8e79-4dcf-8eca-e806c11aa9a1"), "Thomas.Kunde@yahoo.com", "CZMmyDxY2W", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(5243), "Dominic.Ledner" },
                    { new Guid("29f0b770-71ff-49cd-a6c5-477b90b80b60"), "Lottie.Gerlach@hotmail.com", "7hlnmuUlJO", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(1712), "Shaun74" },
                    { new Guid("2be4bf4f-5b1f-42a9-8ea0-c4f2cf7184f9"), "Josiane47@yahoo.com", "4EUaBQR5Z3", 1, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(2547), "Rahul_Towne" },
                    { new Guid("2c3e6c2d-2675-46c8-9985-a6ada51af66d"), "Nora12@yahoo.com", "KD4bXgtviD", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(2406), "Karen_Mante" },
                    { new Guid("303cfa50-b87e-41e9-b15c-633a801b2679"), "Violette.Conn@yahoo.com", "rNlmyVwf1O", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(7456), "Jasmin.Nitzsche" },
                    { new Guid("332e05c4-657a-4ac8-ad34-5f5efb5d13e2"), "Calista.Schroeder@hotmail.com", "dtMb7bMPep", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(74), "Corene.Padberg4" },
                    { new Guid("3390f409-fb49-4176-ab81-7eaed2dbaa5e"), "Reggie.Olson2@gmail.com", "zmqFxgrPp9", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(4261), "Jovanny_Murray" },
                    { new Guid("34ec56c9-e261-4ef2-a1c6-b97da67ee41c"), "Arianna_Beier@gmail.com", "eTrVSM_DN_", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(9572), "Luz85" },
                    { new Guid("368c9011-dafc-4fc5-a09a-8404a73e65f5"), "Mitchell_Mayert@gmail.com", "brZnxpr8Vh", 1, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(472), "Palma.Cruickshank42" },
                    { new Guid("395dbe24-ef20-4f49-9256-809add0edff3"), "Diana40@hotmail.com", "7TfDtb4br_", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(1998), "Name_Kassulke58" },
                    { new Guid("39ef9485-f103-475b-9aa3-a5d42a4b3c18"), "Edwin.Reinger@yahoo.com", "fHaJs2_PjU", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(3539), "Lorenza.Leannon" },
                    { new Guid("3d37f44e-25d7-40a4-ba41-2950bf6a0a9f"), "Alfonso.Gutmann@yahoo.com", "y6MK48UBdz", 2, new DateTime(2022, 11, 8, 11, 49, 43, 123, DateTimeKind.Utc).AddTicks(400), "Deshaun.Hessel" },
                    { new Guid("3d625867-66c1-483a-9f29-ffd6ad87c1b2"), "Delbert2@hotmail.com", "xtuxm068SY", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(8026), "Amara42" },
                    { new Guid("3f52c848-460c-4623-8a65-b8427d8dcde2"), "Werner_Treutel@yahoo.com", "Z7YT8AetYE", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(7035), "Allan25" },
                    { new Guid("3fa1ff7e-611c-4e17-bac1-eaba1c969562"), "Ressie57@hotmail.com", "6p44mW9bge", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(9623), "Tito_Moen" },
                    { new Guid("3fe6575e-dba0-499d-8ef2-289c44057472"), "Kiera_Kuhlman19@hotmail.com", "CHD_rzQ5np", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(5226), "Valerie_Mueller" },
                    { new Guid("4422352c-dd99-4c1e-9bd1-4dc31d0f9a7b"), "Melisa.Strosin93@hotmail.com", "EnsVngp6Fw", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(2912), "Nova_Steuber" },
                    { new Guid("445ee21c-3d7f-43d7-abc4-3c4a892e0637"), "Laisha_Vandervort@yahoo.com", "4uUnmQv7Dg", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(4031), "Trisha.Okuneva31" },
                    { new Guid("46bbd1a4-e52b-4f98-a5a4-e77d71be72b7"), "Isabella_Kuhic@gmail.com", "CqL_E9YxSz", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(802), "Yolanda.Wunsch" },
                    { new Guid("48c74d5a-f71f-4648-bb52-2688b9456ac7"), "Markus9@hotmail.com", "xMmmEMTSEv", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(366), "Maya_Gaylord" },
                    { new Guid("4c18b3f3-e8c2-456e-aec5-1b5f3959c2ab"), "Florian.Lemke@gmail.com", "AeNKRvgsli", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(5991), "Margret_Koch88" },
                    { new Guid("4e249934-92ea-4f86-9a03-7ab5a7b44273"), "Mireille27@gmail.com", "nwA5ptGl1j", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(5753), "Leonardo_Klocko" },
                    { new Guid("4f51c82b-3d10-425f-83a7-372ca7e78c4a"), "Jadyn.Ratke0@gmail.com", "5ywNKo71uw", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(4597), "Mabelle6" },
                    { new Guid("52d51ce6-b663-4b77-b4d3-d0b51d15fb53"), "Octavia13@gmail.com", "r3Bn7aFbnn", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(8235), "Fern_Kreiger27" },
                    { new Guid("532dcb92-aa0d-4559-88c3-907ae3283639"), "Joseph75@gmail.com", "2KD0hTPgB_", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(9615), "Emory.Stark" },
                    { new Guid("57a013ee-3140-41dd-9ec0-32fdfd0f3cc7"), "Micaela24@gmail.com", "Lqt54cNyJv", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(8868), "Casimer_Schmeler" },
                    { new Guid("5a23605c-7103-4c33-a995-43a5de429889"), "Carley.Emmerich95@gmail.com", "akCnJ2727e", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(7927), "Randi_Champlin" },
                    { new Guid("6089c57d-f9fe-461b-aca1-2cd6e373b39f"), "Mohamed.Pacocha76@hotmail.com", "9UY9xGo9zs", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(3770), "Brycen_Konopelski74" },
                    { new Guid("69379d81-d86d-4cdc-8c63-377b2eaf7fdc"), "Edwina30@gmail.com", "hhtvvH8LK4", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(8955), "Anita58" },
                    { new Guid("694005fc-e69d-4985-84f9-04d8c4a12dbf"), "Phyllis42@yahoo.com", "PrnOFmcoGA", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(1224), "Nona_Koelpin" },
                    { new Guid("697be740-eb9b-45e3-90a4-5f3f9f5607b9"), "Ramona_Rosenbaum51@hotmail.com", "19rd8TzDRy", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(8609), "Andres64" },
                    { new Guid("6a391a8a-0e51-4769-86f1-0de2021ce188"), "Rocky_Wuckert59@hotmail.com", "8jc3xi9dHU", 1, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(7575), "Ebony_Gutmann58" },
                    { new Guid("6d80333a-21e7-4b08-a279-a24409056d80"), "Jeanette.Abernathy43@yahoo.com", "0P0_JJ15l6", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(1503), "Kurtis0" },
                    { new Guid("70baa0a0-0989-420e-9673-5210922244bb"), "Joanny47@hotmail.com", "qhiqZYexcj", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(7915), "Reta.Olson22" },
                    { new Guid("774ee7ad-d6af-4042-a37f-78fb85869b0b"), "Lance.Schaefer59@hotmail.com", "pAzAwi03NE", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(7239), "Diego_Moen81" },
                    { new Guid("7d73c446-3578-477a-a0a5-fc67dea0d0a8"), "Pietro_Flatley@yahoo.com", "BZNSHvwFtS", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(7175), "Jeremy20" },
                    { new Guid("81bf6dff-2a29-4546-9579-fe40b3192235"), "Leonora89@gmail.com", "tle0jByNto", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(6098), "Alfred40" },
                    { new Guid("85e9bd3d-d193-4a20-af79-8ba555c9b3ed"), "Margarita.Dibbert48@hotmail.com", "36WBwHCjwe", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(7740), "Benedict3" },
                    { new Guid("85efc1f6-cab7-462c-9f84-7ade52f3a275"), "Larue_Wehner@yahoo.com", "gzjGaQMva1", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(4846), "Monique.Haag" },
                    { new Guid("8e24743a-5a16-430a-b7e0-5769f8777572"), "Saul_Pfeffer@yahoo.com", "UzmMwEeHLf", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(7496), "Ashleigh.Lang" },
                    { new Guid("8ef15684-c0c2-4366-af69-caf46faccce3"), "Jairo_Treutel@hotmail.com", "9tXToEtG3b", 1, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(8803), "Tyree_Jacobs23" },
                    { new Guid("91de404c-0460-4b3d-855e-bb68208f9669"), "Alek97@yahoo.com", "JlzsQPCKfd", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(5389), "Henriette_Mraz" },
                    { new Guid("92710910-61a5-420d-93de-66f83e6bf65e"), "Derrick31@yahoo.com", "s3Twg9_XZI", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(6108), "Kristy.Denesik40" },
                    { new Guid("937cf337-42e0-4ea2-9fa3-8ce0439d454e"), "Arlene6@yahoo.com", "evByafUR9S", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(917), "Emily84" },
                    { new Guid("952bad3c-99b5-443d-b7e8-79d2cd235bfe"), "Destin.Ernser64@gmail.com", "m7P6zxVXs6", 1, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(5883), "Alexandrea81" },
                    { new Guid("9724c144-0d3c-40f5-92cf-640a0a311b27"), "Toby33@yahoo.com", "dx_KL4D_Lm", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(9849), "Payton_Goldner" },
                    { new Guid("97970d82-a59e-48cf-98f3-bab9fdd9a003"), "Tristian.Thiel87@yahoo.com", "NqTvSgkgvM", 1, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(1702), "Hilbert76" },
                    { new Guid("9953c2cd-7a9f-44b9-9c7e-a9d2bdf8c7cd"), "Jamison.Thiel@hotmail.com", "sFnhmWZqkR", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(8143), "Mikayla_Kunde" },
                    { new Guid("99bbec75-2161-44ec-88ed-c7822750917c"), "Yasmin.Kerluke@gmail.com", "t5R5jmX421", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(3962), "Vicky.Kuvalis61" },
                    { new Guid("9ad25683-ba1e-4e43-99b7-3f9949c6d5b1"), "Bart33@hotmail.com", "6Yzh_n7mbj", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(8703), "Juvenal.Balistreri9" },
                    { new Guid("a3daaebb-2fc7-4616-822f-7d7eac2ecaad"), "Francisco87@gmail.com", "GdHINQEKa8", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(9888), "Bryce32" },
                    { new Guid("a3f1e9eb-de73-4a1b-bf26-068f85d16715"), "Verlie82@yahoo.com", "RrvDMPIREr", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(3200), "Joel17" },
                    { new Guid("a50434ac-4b74-4349-8428-0ea80b1d53d4"), "Nick93@yahoo.com", "2ply5zh185", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(1912), "Susana_McCullough46" },
                    { new Guid("aab4d5da-5c6f-4ada-86c6-2c5d06afa408"), "Maybelle_Rogahn93@yahoo.com", "6jdvJCA3Nk", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(6685), "Antwon.Bergnaum98" },
                    { new Guid("ad2be316-9198-416e-9850-e94145ec0a44"), "Aiden.Vandervort@hotmail.com", "HPo2jQ7oZn", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(4949), "Carli_Nikolaus95" },
                    { new Guid("ad7d9728-c9cf-4413-a408-fa9fe018600e"), "Bud.Feil@gmail.com", "RvMZkMI8ip", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(4738), "Jamar24" },
                    { new Guid("ad9b95ad-fd0a-4820-85a0-8ff43cf7d8be"), "Mia70@yahoo.com", "VbXqUr5iMd", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(7666), "Shanie.Fisher" },
                    { new Guid("b0c2de93-e8ea-4bf1-aceb-7013b48263c8"), "Roy36@gmail.com", "qxakdsg9ca", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(464), "Chadrick.Gottlieb53" },
                    { new Guid("b3d3f31f-f123-45e4-9086-32da16fee8fd"), "Lewis_Cole28@gmail.com", "KZ2MTM9VFH", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(90), "Helene20" },
                    { new Guid("b5870cee-0c32-46b7-b08d-fac2dd432610"), "Jakob_Boyer64@yahoo.com", "aYeqLmpTx9", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(1700), "Ryann63" },
                    { new Guid("b5cb2117-8065-4c06-be66-b79f699c164e"), "Lucie.Swaniawski@yahoo.com", "cA9daz6uO3", 2, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(2084), "Abdullah.Klocko" },
                    { new Guid("b9af0bd8-2c67-4200-8012-ecbd293fd094"), "Jalyn_McCullough@yahoo.com", "PxsNUl92kw", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(4361), "Era_Gislason" },
                    { new Guid("c03aa894-ff21-45ed-878d-11d35416de35"), "Mya_Reichel45@hotmail.com", "v6AS9RKVEn", 2, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(2289), "Jackie65" },
                    { new Guid("c1e8194a-f2d3-46da-bc6c-99bff44e59d8"), "Eulah_Murphy@yahoo.com", "StCMIeOHHz", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(2191), "Princess.Johnson" },
                    { new Guid("c2871310-163b-441e-b679-8b62270d3966"), "Margarett.Hagenes79@gmail.com", "gzRF3uR_jt", 1, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(1275), "Una74" },
                    { new Guid("c640bb7e-5545-43d4-b66c-76ba417b8cb9"), "Clementine.Hickle79@gmail.com", "1CdUp1NZLO", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(3402), "Krystel37" },
                    { new Guid("c80c9f27-964c-42b7-95df-4775631429d8"), "Carmine.Lesch@yahoo.com", "U16qWtIL3G", 1, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(9222), "Billie.Windler41" },
                    { new Guid("ce1cf96a-a7d3-49a1-808a-c4b212c86da2"), "Ernestina47@hotmail.com", "FvuFIgHMc2", 1, new DateTime(2022, 11, 8, 11, 49, 43, 123, DateTimeKind.Utc).AddTicks(118), "Keenan.Zieme89" },
                    { new Guid("ce5a388c-3162-4935-8782-d098d62fada0"), "Erin.Nitzsche@yahoo.com", "6Yjl6F6zT3", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(7218), "Kylee75" },
                    { new Guid("d094ab21-1d73-4c9e-9682-c340f8f456bd"), "Fae67@hotmail.com", "kOoQfh5Fra", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(3163), "Maximus_Crist" },
                    { new Guid("d5e321fd-5747-448a-aa8c-7599ddc416fd"), "Ephraim_Ernser74@hotmail.com", "xRKbUhwmX2", 1, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(52), "Dayton_Metz" },
                    { new Guid("d9275464-1712-424a-a3d1-4856fa5e58d2"), "Vernon.Beatty11@hotmail.com", "rqcVODpHPq", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(2705), "Torrey33" },
                    { new Guid("dc0f65dc-3c06-46d2-b9b0-c4712bafcb93"), "Tre88@hotmail.com", "pbAuWjVv1f", 1, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(729), "Efrain56" },
                    { new Guid("e06155c0-2186-4612-bd55-19468238a091"), "Donavon.Block72@gmail.com", "qpUEx4eh8d", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(6776), "Linnie.Johnston" },
                    { new Guid("e1057784-e5cb-4810-bcba-6f50a25103cc"), "Dominique.Bechtelar14@gmail.com", "nJ6WiOYHMV", 1, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(6465), "Reggie91" },
                    { new Guid("e133ac99-5081-430f-9355-731ad14c3652"), "Clotilde.Huels@gmail.com", "txD4zcAZHU", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(9098), "Murphy42" },
                    { new Guid("e612f89c-1ddb-4da2-a7a8-2fc4f4b9c099"), "Lon25@yahoo.com", "4xVeqmcbXI", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(2390), "Brock97" },
                    { new Guid("e9b72981-3976-4cf4-8e95-3eb8e3763840"), "Fredy.Grady@hotmail.com", "wPqTPIyyYF", 2, new DateTime(2022, 11, 8, 11, 49, 43, 116, DateTimeKind.Utc).AddTicks(2753), "Rupert58" },
                    { new Guid("ea48c879-37b2-4840-89ef-a9771bafc904"), "Jamey38@gmail.com", "TSfdkteR86", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(6679), "Marvin.Dickinson8" },
                    { new Guid("ed2842b2-adef-43f4-8051-f892f3856668"), "Keara73@hotmail.com", "uGr1pU9qg1", 2, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(6990), "Meagan51" },
                    { new Guid("efffd255-b983-43fd-90ed-edaeee0933c1"), "Alysha55@gmail.com", "cgs3DR0LVZ", 2, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(6428), "Camylle.Bosco" },
                    { new Guid("f0612c96-eec0-48c6-b5a3-9727894ad03d"), "Joanny.OKeefe@gmail.com", "Ga4jl_eAUQ", 2, new DateTime(2022, 11, 8, 11, 49, 43, 120, DateTimeKind.Utc).AddTicks(9655), "Nicklaus.Gerlach" },
                    { new Guid("f23d71d7-720d-43dc-b45d-521df91357d7"), "Andreane40@gmail.com", "BPKkSXzGgl", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(6565), "Brook24" },
                    { new Guid("f2ad530d-7363-4c04-a617-6ce7393c2077"), "Wilhelmine_Wilderman21@yahoo.com", "LjbrMObVgL", 1, new DateTime(2022, 11, 8, 11, 49, 43, 115, DateTimeKind.Utc).AddTicks(5021), "Ellis.Erdman" },
                    { new Guid("f2b19a1e-0e4c-409a-8a73-697fd9088e1d"), "Estell87@yahoo.com", "GVVzdWwAiC", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(5669), "Kale.Wuckert" },
                    { new Guid("f31821f7-29ad-4976-82ef-b0081baa216e"), "River_Huels@hotmail.com", "RzPdrYUgAz", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(1136), "Francesca_Wilderman" },
                    { new Guid("f51b8c76-8c77-4fba-bad7-59a5d4894857"), "Coby.Little@yahoo.com", "OqZcMBKsnP", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(9428), "Norene36" },
                    { new Guid("f628bdb7-7d33-4228-902f-d70d72c00835"), "Idella.Gutmann68@gmail.com", "32DNrWIwnC", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(6941), "Stephon.Jacobi74" },
                    { new Guid("f6e6a7a6-f7ec-4f0d-aca5-baf47a8a1f38"), "Judson.Yost19@hotmail.com", "iQYK2ywCht", 1, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(679), "Veda23" },
                    { new Guid("f7ffa913-bd35-40cb-8fb1-a52adab2df11"), "Ward.Johns42@hotmail.com", "gfblgAAWWX", 2, new DateTime(2022, 11, 8, 11, 49, 43, 122, DateTimeKind.Utc).AddTicks(2711), "Kyleigh.Kautzer" },
                    { new Guid("fe537b31-39d5-4fcf-8703-c2248a2ecae9"), "Josefa99@gmail.com", "R3jPXIUAvH", 1, new DateTime(2022, 11, 8, 11, 49, 43, 121, DateTimeKind.Utc).AddTicks(8386), "Jakayla_Renner49" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("033faa2c-9e2c-405c-9890-81e96bb18f09"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("0a82ec1c-7603-48da-bc6b-b1be8c03b051"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("0d395174-1d0a-45b9-b907-a969a176c59c"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("120a6e58-3b90-4337-9269-035107d261f6"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("13fc9d80-1d1b-4c7a-bd55-d99563a560c1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("163b83a0-31aa-48d3-9df5-0b4c5ab651de"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("1935832b-4fe3-4505-918f-1f9dc584bcf8"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("1d673fa1-8fce-422a-913a-069dcc2254da"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("1df7853e-1bb1-4c06-8d66-a5b1da0b92b8"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("21921a63-8e79-4dcf-8eca-e806c11aa9a1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("29f0b770-71ff-49cd-a6c5-477b90b80b60"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("2be4bf4f-5b1f-42a9-8ea0-c4f2cf7184f9"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("2c3e6c2d-2675-46c8-9985-a6ada51af66d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("303cfa50-b87e-41e9-b15c-633a801b2679"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("332e05c4-657a-4ac8-ad34-5f5efb5d13e2"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("3390f409-fb49-4176-ab81-7eaed2dbaa5e"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("34ec56c9-e261-4ef2-a1c6-b97da67ee41c"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("368c9011-dafc-4fc5-a09a-8404a73e65f5"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("395dbe24-ef20-4f49-9256-809add0edff3"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("39ef9485-f103-475b-9aa3-a5d42a4b3c18"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("3d37f44e-25d7-40a4-ba41-2950bf6a0a9f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("3d625867-66c1-483a-9f29-ffd6ad87c1b2"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("3f52c848-460c-4623-8a65-b8427d8dcde2"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("3fa1ff7e-611c-4e17-bac1-eaba1c969562"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("3fe6575e-dba0-499d-8ef2-289c44057472"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("4422352c-dd99-4c1e-9bd1-4dc31d0f9a7b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("445ee21c-3d7f-43d7-abc4-3c4a892e0637"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("46bbd1a4-e52b-4f98-a5a4-e77d71be72b7"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("48c74d5a-f71f-4648-bb52-2688b9456ac7"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("4c18b3f3-e8c2-456e-aec5-1b5f3959c2ab"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("4e249934-92ea-4f86-9a03-7ab5a7b44273"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("4f51c82b-3d10-425f-83a7-372ca7e78c4a"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("52d51ce6-b663-4b77-b4d3-d0b51d15fb53"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("532dcb92-aa0d-4559-88c3-907ae3283639"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("57a013ee-3140-41dd-9ec0-32fdfd0f3cc7"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("5a23605c-7103-4c33-a995-43a5de429889"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("6089c57d-f9fe-461b-aca1-2cd6e373b39f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("69379d81-d86d-4cdc-8c63-377b2eaf7fdc"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("694005fc-e69d-4985-84f9-04d8c4a12dbf"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("697be740-eb9b-45e3-90a4-5f3f9f5607b9"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("6a391a8a-0e51-4769-86f1-0de2021ce188"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("6d80333a-21e7-4b08-a279-a24409056d80"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("70baa0a0-0989-420e-9673-5210922244bb"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("774ee7ad-d6af-4042-a37f-78fb85869b0b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("7d73c446-3578-477a-a0a5-fc67dea0d0a8"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("81bf6dff-2a29-4546-9579-fe40b3192235"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("85e9bd3d-d193-4a20-af79-8ba555c9b3ed"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("85efc1f6-cab7-462c-9f84-7ade52f3a275"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("8e24743a-5a16-430a-b7e0-5769f8777572"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("8ef15684-c0c2-4366-af69-caf46faccce3"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("91de404c-0460-4b3d-855e-bb68208f9669"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("92710910-61a5-420d-93de-66f83e6bf65e"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("937cf337-42e0-4ea2-9fa3-8ce0439d454e"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("952bad3c-99b5-443d-b7e8-79d2cd235bfe"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("9724c144-0d3c-40f5-92cf-640a0a311b27"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("97970d82-a59e-48cf-98f3-bab9fdd9a003"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("9953c2cd-7a9f-44b9-9c7e-a9d2bdf8c7cd"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("99bbec75-2161-44ec-88ed-c7822750917c"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("9ad25683-ba1e-4e43-99b7-3f9949c6d5b1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("a3daaebb-2fc7-4616-822f-7d7eac2ecaad"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("a3f1e9eb-de73-4a1b-bf26-068f85d16715"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("a50434ac-4b74-4349-8428-0ea80b1d53d4"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("aab4d5da-5c6f-4ada-86c6-2c5d06afa408"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ad2be316-9198-416e-9850-e94145ec0a44"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ad7d9728-c9cf-4413-a408-fa9fe018600e"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ad9b95ad-fd0a-4820-85a0-8ff43cf7d8be"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b0c2de93-e8ea-4bf1-aceb-7013b48263c8"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b3d3f31f-f123-45e4-9086-32da16fee8fd"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b5870cee-0c32-46b7-b08d-fac2dd432610"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b5cb2117-8065-4c06-be66-b79f699c164e"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b9af0bd8-2c67-4200-8012-ecbd293fd094"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("c03aa894-ff21-45ed-878d-11d35416de35"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("c1e8194a-f2d3-46da-bc6c-99bff44e59d8"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("c2871310-163b-441e-b679-8b62270d3966"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("c640bb7e-5545-43d4-b66c-76ba417b8cb9"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("c80c9f27-964c-42b7-95df-4775631429d8"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ce1cf96a-a7d3-49a1-808a-c4b212c86da2"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ce5a388c-3162-4935-8782-d098d62fada0"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("d094ab21-1d73-4c9e-9682-c340f8f456bd"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("d5e321fd-5747-448a-aa8c-7599ddc416fd"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("d9275464-1712-424a-a3d1-4856fa5e58d2"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("dc0f65dc-3c06-46d2-b9b0-c4712bafcb93"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e06155c0-2186-4612-bd55-19468238a091"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e1057784-e5cb-4810-bcba-6f50a25103cc"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e133ac99-5081-430f-9355-731ad14c3652"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e612f89c-1ddb-4da2-a7a8-2fc4f4b9c099"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e9b72981-3976-4cf4-8e95-3eb8e3763840"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ea48c879-37b2-4840-89ef-a9771bafc904"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ed2842b2-adef-43f4-8051-f892f3856668"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("efffd255-b983-43fd-90ed-edaeee0933c1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f0612c96-eec0-48c6-b5a3-9727894ad03d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f23d71d7-720d-43dc-b45d-521df91357d7"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f2ad530d-7363-4c04-a617-6ce7393c2077"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f2b19a1e-0e4c-409a-8a73-697fd9088e1d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f31821f7-29ad-4976-82ef-b0081baa216e"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f51b8c76-8c77-4fba-bad7-59a5d4894857"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f628bdb7-7d33-4228-902f-d70d72c00835"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f6e6a7a6-f7ec-4f0d-aca5-baf47a8a1f38"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f7ffa913-bd35-40cb-8fb1-a52adab2df11"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("fe537b31-39d5-4fcf-8703-c2248a2ecae9"));
        }
    }
}
