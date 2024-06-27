<h1>
    Football League Tables
</h1>

## 📚 Index

- [:pushpin: Introduction](#pushpin-introduction)
- [:warning: Prerequisites](#warning-prerequisites)
  - [:arrow\_forward: How to run local](#arrow_forward-how-to-run-local)
  - [:rocket: Build and Environments](#rocket-build-and-environments)
  - [:open\_file\_folder: Languages and dependencies](#open_file_folder-languages-and-dependencies)

# :pushpin: Introduction

Pagina desenvolvida em NextJs 14 utilizando o tailwindcss para estilização e a api do [football data.org](https://www.football-data.org/) para buscar os dados dos campeonatos.

![alt text](https://i.ibb.co/5sTZghs/Captura-de-tela-de-2024-06-27-16-00-55.png)

# :warning: Prerequisites

- [x] [Git](https://git-scm.com)
- [x] [pnpm](https://pnpm.io/pt/)

## :arrow_forward: How to run local

```bash
# Clone o repositório
$ git@github.com:Coldiblaster/football-league-tables.git
# Entre na pasta
$ cd football-league-tables
# Instale as dependências
$ pnpm i
# Registe no football data.org para obter um token
$ https://www.football-data.org/client/register
# Insira o token recebido via email no .env da aplicação
$ NEXT_PUBLIC_API_TOKEN="token"
# Inicie a aplicação
$ pnpm dev
# Para acessar a aplicação acesse
$ http://localhost:3000/
```

## :rocket: Build and Environments

```bash
# Clone o repositório
$ git@github.com:Coldiblaster/football-league-tables.git
# Entre na pasta
$ cd football-league-tables
# Registe no football data.org para obter um token
$ https://www.football-data.org/client/register
# Insira o token recebido via email no .env da aplicação
$ NEXT_PUBLIC_API_TOKEN="token"
# Instale as dependências
$ pnpm i
# Rode o Build
$ pnpm build
# Inicializa o projeto
$ pnpm start
# Para acessar a aplicação acesse
$ http://localhost:3000/
```

## :open_file_folder: Languages and dependencies

> [![React](https://img.shields.io/badge/React-000?style=for-the-badge&logo=react)](https://pt-br.reactjs.org/docs/getting-started.html)
>
> [![NextJs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
>
> [![Tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
>
> [TANSTACK](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery)
