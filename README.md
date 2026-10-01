# aos-curriculo-backend

API REST desenvolvida em Node.js com arquitetura MVC, utilizando Sequelize ORM e PostgreSQL (hospedado no NeonDB). Este projeto faz parte do desenvolvimento acadêmico e de portfólio para gerenciamento de currículos e usuários.

## Tecnologias Utilizadas

* **Node.js** (com ES Modules)
* **Express.js** (Gerenciamento de rotas e requisições)
* **Sequelize ORM** (Mapeamento objeto-relacional)
* **PostgreSQL / NeonDB** (Banco de dados relacional na nuvem)
* **Dotenv** (Gerenciamento de variáveis de ambiente)

## Arquitetura do Projeto

O projeto segue o padrão **MVC (Model-View-Controller)** com separação clara de responsabilidades:
```text
src/
├── configs/       # Configuração de conexões (Banco de dados)
├── controllers/   # Lógica de negócio e esteiras de verificação
├── models/        # Definição e validação das tabelas (Sequelize)
├── routes/        # Mapeamento de endpoints da API
└── index.js       # Ponto de entrada do servidor
