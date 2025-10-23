# NexusAPI

Uma API de CRUD (Create, Read, Update, Delete) simples e robusta, construída com Node.js, Express e MongoDB. Este projeto serve como um boilerplate para iniciar rapidamente o desenvolvimento de APIs RESTful.

---

### ✨ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no servidor.
* **[Express](https://expressjs.com/)**: Framework para construção de APIs web.
* **[MongoDB](https://www.mongodb.com/)**: Banco de dados NoSQL orientado a documentos.
* **[Mongoose](https://mongoosejs.com/)**: ODM (Object Data Modeling) para modelar os dados da aplicação com MongoDB.
* **[Dotenv](https://github.com/motdotla/dotenv)**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.

---

### 🚀 Passos para Rodar o Projeto

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

**1. Clone o repositório:**
```bash
git clone [https://github.com/seu-usuario/NexusAPI.git](https://github.com/seu-usuario/NexusAPI.git)
cd NexusAPI
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure as variáveis de ambiente:**
Crie um arquivo chamado `.env` na raiz do projeto, copiando o conteúdo do `.env.example`. Substitua os valores pelas suas credenciais.
```
# Porta em que o servidor irá rodar
PORT=3000

# Sua string de conexão com o MongoDB
DB_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>
```

**4. Inicie o servidor:**
```bash
npm start
```
O servidor estará rodando em `http://localhost:3000`.

---

### 📂 Estrutura do Projeto

A estrutura de pastas foi organizada para manter o código limpo, escalável e de fácil manutenção, seguindo o princípio de Separação de Responsabilidades (SoC).

```
NexusAPI/
├── .env                  # Variáveis de ambiente (não versionado)
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Dependências do projeto
├── server.js             # Ponto de entrada da aplicação
│
└── src/
    ├── config/           # Configuração de conexão com o banco de dados
    ├── controllers/      # Camada que lida com requisições e respostas HTTP
    ├── models/           # Definição dos schemas do banco de dados (Mongoose)
    ├── routes/           # Definição das rotas e endpoints da API
    └── services/         # Camada de lógica de negócio
```