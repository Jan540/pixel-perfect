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
                columns: new[] { "UserId", "Email", "Password", "UpdatedAt", "Username" },
                values: new object[,]
                {
                    { new Guid("0c2c768d-ee78-4fc6-819e-dd3134de72c5"), "Austen.Kerluke62@hotmail.com", "N3AkyaxhBJ", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(6640), "Guy.OConner" },
                    { new Guid("0d9c3dbc-3c47-4038-b73a-7bc727a09f6d"), "Alek.Kreiger42@yahoo.com", "8Qbq8TRaIq", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(5129), "Marina_Ruecker" },
                    { new Guid("0da4c0f8-4b42-45d0-bfbf-c6643118b88f"), "Conor_Kulas32@yahoo.com", "yWWNM6SvKx", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(9661), "Emile.Gaylord" },
                    { new Guid("1475fc1b-04f5-4017-a831-5fbe5b22aa21"), "Onie.Koss@hotmail.com", "BUnP1Nusw4", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(3361), "Raul49" },
                    { new Guid("14971bef-8d3a-44ac-9cf9-fc7372f25305"), "Amira_Ferry84@gmail.com", "HEd6XATHtH", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(8945), "Aisha_Brekke" },
                    { new Guid("19620c07-486e-47e6-b5d6-c17507f07cb4"), "Zelma86@yahoo.com", "5VithF2fcp", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(4469), "Robin.Beatty" },
                    { new Guid("1a2aaac9-18e0-4a95-8bc1-da3c27351eb8"), "Willie.Kshlerin@gmail.com", "liR6oR5eAK", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(8441), "Gene_Rosenbaum38" },
                    { new Guid("1b839987-e1a4-49a3-8c4b-36c7c755b059"), "Estrella.Beatty@hotmail.com", "Xg4TAHacvT", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(5382), "Audie_Carroll" },
                    { new Guid("1f3c8b4f-3cfa-455c-8aa0-95a29421ce7a"), "Zander15@gmail.com", "1J1LTtskgK", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(21), "Elena41" },
                    { new Guid("237446d4-1872-4da6-9658-88edf486b46b"), "Kennedi.Durgan@hotmail.com", "CMemh6jm9H", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(680), "Junius.DuBuque" },
                    { new Guid("23f96ad8-d381-47f1-bf7d-b15d58bd7a51"), "Karina_Pouros@gmail.com", "eJIGatKfCp", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(9789), "Blaze.Ledner" },
                    { new Guid("24503180-98e7-4e3c-8504-c26b55bfc81c"), "Jamaal.Yundt42@yahoo.com", "otOjGwIFrZ", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(784), "Irwin_Reinger" },
                    { new Guid("2749480d-306d-4e17-ad80-8ff54531ab6a"), "Marcelle_Koss@gmail.com", "fo9wMhtfQK", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(3182), "Marc_Wiegand1" },
                    { new Guid("28768a84-0b70-4af9-87c3-2f3aec23d3f9"), "Orval_Douglas@hotmail.com", "4DzGOIvFWK", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(2363), "Everette_Kutch21" },
                    { new Guid("29fe2d5d-478c-412a-a40e-5b2f0278d350"), "Melyssa_Jakubowski45@gmail.com", "S5GxnkEus3", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(8614), "Gina22" },
                    { new Guid("2a4e1a72-9d2e-4690-86ce-6b221959ba53"), "Jayson_OKeefe@gmail.com", "KvRUDPRhxu", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(7138), "Ashley_DAmore89" },
                    { new Guid("2bd1c08a-4fc1-4972-862d-ecfaa6d32170"), "Kristopher_Tremblay@yahoo.com", "zHeAnyKycR", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(3440), "Jaime_Smitham" },
                    { new Guid("2efcdc6d-fb44-4090-b935-92b2df74ed34"), "Janis15@yahoo.com", "LW_wCceY7O", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(4980), "Bridgette.Strosin" },
                    { new Guid("30c8d9f4-5c19-48bc-9c8c-88f7d8a5e1af"), "Nedra_McGlynn@yahoo.com", "GU1zJ72vjx", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(2726), "Candelario.Brakus" },
                    { new Guid("35e9fbe6-d789-4bdb-ba79-a77638046cd1"), "Janis56@gmail.com", "GunWbpTQAw", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(4062), "Mable49" },
                    { new Guid("360c8bca-70f3-43da-b60a-aa7bf13fe450"), "Dakota.Kuhlman44@yahoo.com", "W6IQp7SUyp", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(5545), "Roberta_Howe" },
                    { new Guid("367a8065-a638-4002-a6fe-a03c52b8917d"), "Amely_Bartoletti44@yahoo.com", "D2H88Qq35n", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(6168), "Eldred_Wisoky" },
                    { new Guid("3d95cca7-9b31-40a6-a17d-7ba19180ece5"), "Tierra44@gmail.com", "Spm22galYp", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(4706), "Arthur24" },
                    { new Guid("411ac347-be5e-4281-9270-2bcb76372f6d"), "Jewel.Koss@hotmail.com", "VxdhIgA5SQ", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(7532), "Reid.Rohan66" },
                    { new Guid("4266f7a3-bac7-4991-85da-c0471dc6b6bd"), "Roosevelt71@gmail.com", "OOEI7j7ko3", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(2232), "Lexus.OConner6" },
                    { new Guid("454af8c2-830e-4d78-96b0-a7f2fb85280b"), "Wendy_Barrows95@gmail.com", "h_EVUEByNv", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(7087), "Tressie_Harber41" },
                    { new Guid("4862ae57-af4e-4a7a-81ae-1bf7358ad5ee"), "Adolf.Romaguera@yahoo.com", "Le07RaXso_", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(509), "Annalise.Jaskolski11" },
                    { new Guid("4dbcedd8-d53c-45ff-976e-b504e1ce88ed"), "Reva40@gmail.com", "KRf7U49BgR", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(5857), "Jana86" },
                    { new Guid("502e184b-f407-4684-b51c-8bea1b4c8db0"), "Rod.Veum@gmail.com", "Tl23wepE73", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(5223), "Colton8" },
                    { new Guid("531a314b-6c06-4884-9c7f-cecc942070ab"), "Kassandra36@yahoo.com", "F8APGfZ4y9", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(2604), "Willie.Bernier23" },
                    { new Guid("555d1360-1dd0-438a-807f-30b4a7d32486"), "Lysanne.Green@yahoo.com", "wbyxKZPEo7", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(493), "Royal.Dibbert8" },
                    { new Guid("59861d43-b9b5-424e-a296-6fae7a9df105"), "Braulio_Kuhic64@yahoo.com", "Q7zVoF6iKb", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(7465), "Maverick88" },
                    { new Guid("5bf211eb-a8b5-4d61-ae8e-a3d2dfcd06c1"), "Addie26@hotmail.com", "Pz_5DMgQDB", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(8575), "Blaise_Mertz" },
                    { new Guid("5c4db947-9b8e-4a0c-89f8-69828612106a"), "Shanny75@yahoo.com", "za0k8b5Tvn", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(6847), "Antonette_Senger" },
                    { new Guid("5f20aec6-4013-4978-8f95-808cab3b2707"), "Liana23@gmail.com", "dnSsZKawPp", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(3126), "Lina.Roob" },
                    { new Guid("5f555561-6f2d-49f0-b811-43525dbb6c89"), "Chanelle21@hotmail.com", "hrL4cFoLwa", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(8185), "Freddy.Hamill" },
                    { new Guid("6394538b-583c-410a-adca-ef2734333a33"), "Thurman0@hotmail.com", "b9JkvZgqjs", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(7714), "Aidan.Davis69" },
                    { new Guid("66301e80-000b-48a0-a1b1-147b5d9694cc"), "Allison39@hotmail.com", "O1Ge_zynPy", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(9615), "Benton_Farrell" },
                    { new Guid("682a5533-55d5-4eaa-b8cb-7f7b0aea941f"), "Augustus_Boehm98@hotmail.com", "Op4sVBnNhF", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(875), "Danial_McClure" },
                    { new Guid("70102603-bf4b-4f4e-a131-9c9650cd372f"), "Jayde_Buckridge@hotmail.com", "Tg8xa8zIfW", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(1050), "Christine_Bechtelar57" },
                    { new Guid("70fc1756-0b0b-406b-9198-ca4338fb8390"), "Nigel.Daugherty@yahoo.com", "0Gd7FrZL0d", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(4468), "Reva.Mueller" },
                    { new Guid("75f0e4e1-8765-49ac-ba46-5491a6e8377d"), "Isadore.Baumbach31@yahoo.com", "0HOUe1m0BH", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(3281), "Patrick66" },
                    { new Guid("771af60b-2adc-470e-afd0-07d22f6b71ed"), "Nathen44@hotmail.com", "8qWEtNWDfT", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(6688), "Willis_West18" },
                    { new Guid("788cfca0-500c-4503-b083-41dd9e94ade1"), "Coleman_Murazik@gmail.com", "GFgOJP28Au", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(2913), "Ottis_Hyatt35" },
                    { new Guid("7999060d-1759-416f-921a-5676b813ed71"), "Alysa_Gibson8@gmail.com", "1Drm1vbPff", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(8013), "Brandi_OKeefe" },
                    { new Guid("7a94f611-07be-4f1c-8c24-8c84371b15d5"), "Nia91@yahoo.com", "xU4SrwhKYX", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(4711), "Florence_Wiza52" },
                    { new Guid("7ae5e501-3e93-4403-bcad-83147da52cf0"), "Aurelio5@hotmail.com", "siKf6oEbuO", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(1808), "Theodora73" },
                    { new Guid("7b01c795-f227-4ddb-b684-b5bbbbe4fc35"), "Marilyne_Jacobi2@yahoo.com", "53rRHq29xI", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(7374), "Abigail_Jakubowski56" },
                    { new Guid("8037190c-9bba-49ef-838c-666efb337a75"), "Ashleigh32@yahoo.com", "QIPZvRxsDl", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(9523), "Arno77" },
                    { new Guid("812a81bc-aaa2-4a3a-bb0d-274dbd5d7318"), "Newell56@yahoo.com", "A5U20C673N", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(7711), "Niko.Botsford" },
                    { new Guid("83951d9d-9f95-4050-90f8-7e2e35f1c7c5"), "Brennan_Stoltenberg37@hotmail.com", "45sgA3iKli", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(7142), "Aurelia_Ward" },
                    { new Guid("8421d449-2d4b-4715-842f-a7e66017e72c"), "Ernestine_Dare@gmail.com", "J6FKTXh1ha", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(1344), "Yolanda18" },
                    { new Guid("8476fcd6-ac3c-42e5-bf13-9c3f60059053"), "Emile_Rosenbaum@hotmail.com", "f7FeWvpQw9", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(5706), "Isabell35" },
                    { new Guid("87ae7314-cf4d-4fe0-8025-89e9c3fedf1b"), "Eliane_Schiller63@hotmail.com", "km4yjntQOT", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(456), "Myrtis.Cronin34" },
                    { new Guid("8d6d3375-491a-4ea3-bbc9-5ccb15af390b"), "Celestine.Gleichner@gmail.com", "yJQOwAUvD_", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(3906), "Abby.Cormier6" },
                    { new Guid("923a9e26-bc8c-4e1b-bd0f-3afb4619d18d"), "Lori_Pouros@yahoo.com", "3ZbyFFMVgZ", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(1195), "Katherine.Koch" },
                    { new Guid("923eb8bf-ac86-4cc8-9086-4353079804a2"), "Vivian28@gmail.com", "BycKvAZngM", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(1478), "Vergie.Johnson" },
                    { new Guid("9268ec87-7f52-4a7a-9c75-60fb9fd7d90a"), "Kennedi.Erdman@yahoo.com", "wpuyRj8qY8", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(8087), "Shirley63" },
                    { new Guid("92a26097-8efc-4465-b669-1f96065ec6ec"), "Gaylord_McCullough1@gmail.com", "1mRCanjfF5", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(5312), "Merl_Lockman" },
                    { new Guid("97fe4930-4e5a-48b3-b2f8-2d29e8b2271a"), "Nina.Witting21@hotmail.com", "NJmSQ6wE8k", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(1581), "Arvilla58" },
                    { new Guid("9b8b85ac-46c3-4c3b-8b9c-c8e54de40f51"), "Luis.Keebler@yahoo.com", "XIBn42igPv", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(3922), "Lawrence.Olson" },
                    { new Guid("9bc45693-d417-4bfd-94ff-aa2fc816cf5b"), "Kayden8@gmail.com", "j9c8Nyy68x", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(2881), "Alysson.Herman24" },
                    { new Guid("9c1ab1b1-abde-4239-a4ec-b0f606d4cdbd"), "Kayla55@hotmail.com", "bSbNKwSv1U", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(4231), "Erna79" },
                    { new Guid("a0d9023a-7654-42a2-b312-d40863b8bf6f"), "Shana87@yahoo.com", "0m2ZkfSCae", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(4157), "Kyla.Pouros" },
                    { new Guid("a302ef9e-2306-46cd-977b-987e15846a4f"), "Winona_Hauck@gmail.com", "tYmEhY43Em", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(6230), "Elise.Lockman47" },
                    { new Guid("a30e57c6-7bb6-432d-80b0-0229c6d3d685"), "Alphonso_Becker@yahoo.com", "QhDZSzUpMa", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(5614), "Emelie.Lubowitz88" },
                    { new Guid("a9e32d6b-250b-4357-afea-c578f0d134e9"), "Rhea4@gmail.com", "bMvX24lknf", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(4439), "Arely_Rowe" },
                    { new Guid("acfd98f5-dd9b-4b66-8fe2-8976cf97d703"), "Beatrice40@gmail.com", "0bj1EYU1tk", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(8380), "Serena.Larson" },
                    { new Guid("af6d9826-d7e2-40d0-85e1-9c26c62cc8af"), "Gayle48@yahoo.com", "CW0WipXJwB", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(9904), "German42" },
                    { new Guid("b07576a5-38dd-414b-a4ca-c7c7bfd22402"), "Luz26@yahoo.com", "FvX5OE5kTE", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(3819), "Pierre_Herman" },
                    { new Guid("b2f63347-9d63-4148-aee0-11190be64d14"), "Laurel_Bahringer@gmail.com", "VC3ZP873B_", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(2113), "Keira_Hahn" },
                    { new Guid("b424d9ce-ba57-4d07-a3e5-542c68dd85ef"), "Dedric.Deckow@hotmail.com", "avPJ9XRCT_", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(3538), "Helene85" },
                    { new Guid("b551b2b4-2043-42f8-8f78-8d31201b167b"), "Xavier50@yahoo.com", "Lir1f5OsN3", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(6719), "Ervin.Hagenes" },
                    { new Guid("b901bbc8-e6eb-4a2d-9c45-a25b22499fbd"), "Michaela_Heathcote93@gmail.com", "eF9DqwNSZ0", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(7345), "Maiya88" },
                    { new Guid("b9144eb1-4c48-4aaf-ab7c-1953647868de"), "Greg.Weissnat@yahoo.com", "B4wz7yXCXf", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(2661), "Lonnie43" },
                    { new Guid("bc4f1c58-47a1-4dd7-b2fb-f81039ec161f"), "Neha_Abernathy@hotmail.com", "1NXIl19TjP", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(8981), "Aimee_Fadel" },
                    { new Guid("bd97640f-e0c5-4474-a800-29f0a7b085bc"), "Mitchell_Herzog20@hotmail.com", "RvzX5_akAq", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(9210), "Jovan71" },
                    { new Guid("be40ee8b-8a42-4acd-9dfa-cd0852d4eadc"), "Myrtie_Kshlerin@yahoo.com", "_f0b46m_KQ", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(1509), "Herta_Gaylord" },
                    { new Guid("bef17b6f-2c3a-4373-a65a-67971da05869"), "Immanuel54@hotmail.com", "dgNNDkA5Pk", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(6537), "Nelle.Feeney" },
                    { new Guid("c5334d30-e3d9-481e-a76f-7aedf2a77c42"), "Meredith39@hotmail.com", "NlfUm4wdqC", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(245), "Carmelo_Monahan18" },
                    { new Guid("c8f3bc78-08b5-4488-8c48-cbeb45e59719"), "Wilfredo11@gmail.com", "TIgUF4i69l", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(9878), "Kaley_Kilback70" },
                    { new Guid("caa1cc22-4ced-44c3-99cb-eedfc2d4571b"), "Willa.Kovacek@gmail.com", "N9yus9teB7", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(6476), "Christine_Simonis54" },
                    { new Guid("cca79718-e6df-42db-8f65-482860dffb6b"), "Laurine_Roberts83@yahoo.com", "cxRo23REBl", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(7974), "Quincy79" },
                    { new Guid("d42f5d03-8a0a-449e-9cc1-87fd76055e2f"), "Callie.Hartmann@gmail.com", "2ocHD3csHh", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(9220), "Frederik65" },
                    { new Guid("d4d4e369-2d8f-44da-8848-4657f50a5862"), "Trisha_Ebert85@hotmail.com", "osyyXZVF74", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(5916), "Abe_Zieme" },
                    { new Guid("d7ec4e80-2681-40f2-be04-353cb635ae06"), "Winifred84@gmail.com", "bgXbUfxVl9", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(7741), "Haley_Ankunding37" },
                    { new Guid("ddaa7556-03b5-4e7f-b5c2-fa7fb8ff6f7b"), "Marisol.Klein@hotmail.com", "1N1X6mCXqH", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(7790), "Leif_Hansen76" },
                    { new Guid("def161b2-48bb-4bcd-9dbd-a3415b111bf5"), "Bradford82@yahoo.com", "0KsAkz4mB8", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(2341), "Rasheed.Koss" },
                    { new Guid("e0c31c40-63f9-4043-a3d8-4e35dae24bd3"), "Anderson_Metz@yahoo.com", "PcRlNn8aeE", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(6307), "Jaiden_Moen" },
                    { new Guid("e18630de-d710-45db-86c4-fa63c6dee51c"), "Santa.Aufderhar89@gmail.com", "u369GgCBTb", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(248), "Lonie44" },
                    { new Guid("e1e62811-af4b-4ffd-8dc2-0a8625e635b1"), "Dolores66@gmail.com", "FjN4Sd6m4t", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(966), "Freddie.Brakus" },
                    { new Guid("e280f5d0-b000-4dd1-b886-642c267861ec"), "Viviane_Hettinger@hotmail.com", "LuGyBoSDLt", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(7008), "Josiane_Collier" },
                    { new Guid("e3d90ba6-249a-49ba-aca2-22f6e7438358"), "Geoffrey60@hotmail.com", "o8lgaRaHKE", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(8345), "Vada.Bechtelar" },
                    { new Guid("e3e5461a-d8de-4a12-8080-27aaf3728f0f"), "Jamel.Gibson@gmail.com", "U37Ljn4PuX", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(9098), "Eloisa.Torp" },
                    { new Guid("e4bc15ca-f24b-4f59-9a24-9d6a5a50ce57"), "Rachael_Bergnaum65@gmail.com", "f2Voy_nPs6", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(1981), "Agnes.Stroman42" },
                    { new Guid("e5aab1ab-1932-40fe-82d4-404f87056eba"), "Frederique.Carter15@hotmail.com", "RmcGpNUrz1", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(1772), "Jocelyn30" },
                    { new Guid("f0b0e7e8-0f7c-42f8-98d5-4681b9ba4190"), "Alivia.Moore@hotmail.com", "ChgLAXmv79", new DateTime(2022, 11, 4, 9, 1, 25, 631, DateTimeKind.Utc).AddTicks(9355), "Adaline_Boyle17" },
                    { new Guid("fb9a1c91-21e8-4e84-9cf3-17d34d1960d5"), "Mack_Rohan@gmail.com", "UFKEX585Yz", new DateTime(2022, 11, 4, 9, 1, 25, 632, DateTimeKind.Utc).AddTicks(4939), "Harrison.Johnston" },
                    { new Guid("fc7c2096-6971-4458-bbb3-046db64fa738"), "Darron4@hotmail.com", "QngI1tq5NJ", new DateTime(2022, 11, 4, 9, 1, 25, 634, DateTimeKind.Utc).AddTicks(5940), "Queenie24" },
                    { new Guid("fe1702a9-c5d9-469f-b33d-5e0e6ecd141e"), "Raoul_Oberbrunner@hotmail.com", "1GdxwRtZCY", new DateTime(2022, 11, 4, 9, 1, 25, 633, DateTimeKind.Utc).AddTicks(3690), "Constance60" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("0c2c768d-ee78-4fc6-819e-dd3134de72c5"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("0d9c3dbc-3c47-4038-b73a-7bc727a09f6d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("0da4c0f8-4b42-45d0-bfbf-c6643118b88f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("1475fc1b-04f5-4017-a831-5fbe5b22aa21"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("14971bef-8d3a-44ac-9cf9-fc7372f25305"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("19620c07-486e-47e6-b5d6-c17507f07cb4"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("1a2aaac9-18e0-4a95-8bc1-da3c27351eb8"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("1b839987-e1a4-49a3-8c4b-36c7c755b059"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("1f3c8b4f-3cfa-455c-8aa0-95a29421ce7a"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("237446d4-1872-4da6-9658-88edf486b46b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("23f96ad8-d381-47f1-bf7d-b15d58bd7a51"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("24503180-98e7-4e3c-8504-c26b55bfc81c"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("2749480d-306d-4e17-ad80-8ff54531ab6a"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("28768a84-0b70-4af9-87c3-2f3aec23d3f9"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("29fe2d5d-478c-412a-a40e-5b2f0278d350"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("2a4e1a72-9d2e-4690-86ce-6b221959ba53"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("2bd1c08a-4fc1-4972-862d-ecfaa6d32170"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("2efcdc6d-fb44-4090-b935-92b2df74ed34"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("30c8d9f4-5c19-48bc-9c8c-88f7d8a5e1af"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("35e9fbe6-d789-4bdb-ba79-a77638046cd1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("360c8bca-70f3-43da-b60a-aa7bf13fe450"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("367a8065-a638-4002-a6fe-a03c52b8917d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("3d95cca7-9b31-40a6-a17d-7ba19180ece5"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("411ac347-be5e-4281-9270-2bcb76372f6d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("4266f7a3-bac7-4991-85da-c0471dc6b6bd"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("454af8c2-830e-4d78-96b0-a7f2fb85280b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("4862ae57-af4e-4a7a-81ae-1bf7358ad5ee"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("4dbcedd8-d53c-45ff-976e-b504e1ce88ed"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("502e184b-f407-4684-b51c-8bea1b4c8db0"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("531a314b-6c06-4884-9c7f-cecc942070ab"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("555d1360-1dd0-438a-807f-30b4a7d32486"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("59861d43-b9b5-424e-a296-6fae7a9df105"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("5bf211eb-a8b5-4d61-ae8e-a3d2dfcd06c1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("5c4db947-9b8e-4a0c-89f8-69828612106a"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("5f20aec6-4013-4978-8f95-808cab3b2707"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("5f555561-6f2d-49f0-b811-43525dbb6c89"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("6394538b-583c-410a-adca-ef2734333a33"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("66301e80-000b-48a0-a1b1-147b5d9694cc"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("682a5533-55d5-4eaa-b8cb-7f7b0aea941f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("70102603-bf4b-4f4e-a131-9c9650cd372f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("70fc1756-0b0b-406b-9198-ca4338fb8390"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("75f0e4e1-8765-49ac-ba46-5491a6e8377d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("771af60b-2adc-470e-afd0-07d22f6b71ed"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("788cfca0-500c-4503-b083-41dd9e94ade1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("7999060d-1759-416f-921a-5676b813ed71"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("7a94f611-07be-4f1c-8c24-8c84371b15d5"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("7ae5e501-3e93-4403-bcad-83147da52cf0"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("7b01c795-f227-4ddb-b684-b5bbbbe4fc35"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("8037190c-9bba-49ef-838c-666efb337a75"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("812a81bc-aaa2-4a3a-bb0d-274dbd5d7318"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("83951d9d-9f95-4050-90f8-7e2e35f1c7c5"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("8421d449-2d4b-4715-842f-a7e66017e72c"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("8476fcd6-ac3c-42e5-bf13-9c3f60059053"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("87ae7314-cf4d-4fe0-8025-89e9c3fedf1b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("8d6d3375-491a-4ea3-bbc9-5ccb15af390b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("923a9e26-bc8c-4e1b-bd0f-3afb4619d18d"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("923eb8bf-ac86-4cc8-9086-4353079804a2"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("9268ec87-7f52-4a7a-9c75-60fb9fd7d90a"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("92a26097-8efc-4465-b669-1f96065ec6ec"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("97fe4930-4e5a-48b3-b2f8-2d29e8b2271a"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("9b8b85ac-46c3-4c3b-8b9c-c8e54de40f51"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("9bc45693-d417-4bfd-94ff-aa2fc816cf5b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("9c1ab1b1-abde-4239-a4ec-b0f606d4cdbd"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("a0d9023a-7654-42a2-b312-d40863b8bf6f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("a302ef9e-2306-46cd-977b-987e15846a4f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("a30e57c6-7bb6-432d-80b0-0229c6d3d685"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("a9e32d6b-250b-4357-afea-c578f0d134e9"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("acfd98f5-dd9b-4b66-8fe2-8976cf97d703"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("af6d9826-d7e2-40d0-85e1-9c26c62cc8af"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b07576a5-38dd-414b-a4ca-c7c7bfd22402"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b2f63347-9d63-4148-aee0-11190be64d14"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b424d9ce-ba57-4d07-a3e5-542c68dd85ef"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b551b2b4-2043-42f8-8f78-8d31201b167b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b901bbc8-e6eb-4a2d-9c45-a25b22499fbd"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("b9144eb1-4c48-4aaf-ab7c-1953647868de"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("bc4f1c58-47a1-4dd7-b2fb-f81039ec161f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("bd97640f-e0c5-4474-a800-29f0a7b085bc"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("be40ee8b-8a42-4acd-9dfa-cd0852d4eadc"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("bef17b6f-2c3a-4373-a65a-67971da05869"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("c5334d30-e3d9-481e-a76f-7aedf2a77c42"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("c8f3bc78-08b5-4488-8c48-cbeb45e59719"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("caa1cc22-4ced-44c3-99cb-eedfc2d4571b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("cca79718-e6df-42db-8f65-482860dffb6b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("d42f5d03-8a0a-449e-9cc1-87fd76055e2f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("d4d4e369-2d8f-44da-8848-4657f50a5862"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("d7ec4e80-2681-40f2-be04-353cb635ae06"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("ddaa7556-03b5-4e7f-b5c2-fa7fb8ff6f7b"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("def161b2-48bb-4bcd-9dbd-a3415b111bf5"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e0c31c40-63f9-4043-a3d8-4e35dae24bd3"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e18630de-d710-45db-86c4-fa63c6dee51c"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e1e62811-af4b-4ffd-8dc2-0a8625e635b1"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e280f5d0-b000-4dd1-b886-642c267861ec"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e3d90ba6-249a-49ba-aca2-22f6e7438358"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e3e5461a-d8de-4a12-8080-27aaf3728f0f"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e4bc15ca-f24b-4f59-9a24-9d6a5a50ce57"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("e5aab1ab-1932-40fe-82d4-404f87056eba"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("f0b0e7e8-0f7c-42f8-98d5-4681b9ba4190"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("fb9a1c91-21e8-4e84-9cf3-17d34d1960d5"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("fc7c2096-6971-4458-bbb3-046db64fa738"));

            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "UserId",
                keyValue: new Guid("fe1702a9-c5d9-469f-b33d-5e0e6ecd141e"));
        }
    }
}
