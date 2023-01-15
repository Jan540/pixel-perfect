FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source
RUN dotnet tool install --global dotnet-ef
ENV PATH="${PATH}:/root/.dotnet/tools"

# copy csproj and restore as distinct layers
COPY *.sln .
COPY ipt_project_cepbep/*.csproj ./ipt_project_cepbep/
RUN dotnet restore -v n

# copy everything else and update db
COPY ipt_project_cepbep/. ./ipt_project_cepbep/
WORKDIR /source/ipt_project_cepbep
# RUN dotnet ef database update

# build app
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "ipt_project_cepbep.dll"]