# API Rest de Transferências

Esta API permite login, registro de usuários, consulta de usuários, adição de favorecidos e transferência de valores, com regras de negócio para aprendizado de testes e automação de API.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)
- Banco de dados em memória (variáveis)

## Instalação

1. Clone o repositório ou baixe os arquivos.
2. Instale as dependências:
   ```bash
   npm install
   ```

## Como rodar

```bash
npm start
```
A API estará disponível em http://localhost:3000

## Documentação Swagger
Acesse a documentação interativa em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints principais

- `POST /login` — Login de usuário
- `POST /register` — Registro de usuário
- `GET /users` — Lista todos os usuários
- `POST /users/favorecido` — Adiciona favorecido ao usuário
- `POST /transfer` — Realiza transferência

## Regras de negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.

## Estrutura do projeto
- `controllers/` — Lógica dos endpoints
- `services/` — Regras de negócio
- `models/` — Dados em memória
- `app.js` — Configuração do app Express
- `server.js` — Inicialização do servidor
- `swagger.json` — Documentação da API

## Testes
Para testar a API, utilize ferramentas como Postman, Insomnia ou scripts automatizados (ex: Supertest).

---

> Desenvolvido para fins de aprendizado de testes e automação de APIs.
