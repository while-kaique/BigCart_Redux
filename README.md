# Aprendendo_Redux
 Mais uma saga de aprendizado, dessa vez estudando sobre Redux e suas aplicações.

 # Big Cart
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE) 

# Deploy do Projeto

[https://wmazoni-sds1.netlify.app](https://bigcartredux-git-main-while-kaiques-projects.vercel.app)

Big Cart é um E-commerce full stack web e mobile construída para reforçar as habilidades em Redux e React de forma totalmente responsiva e dinâmica.

## Layout Home
Logo na página Home podemos acessar a lista dos produtos (com requisição via API) e adicioná-los ao carrinho usando Redux para que as mudanças no Carrinho, na quantidade de produtos totais, individuais, e no preço total sejam alterados instantaneamente.

![Home Page](https://github.com/while-kaique/BigCart_Redux/assets/123902283/8b2f0b3e-6228-4893-8310-9addba9e6939)


## Layout Login
Já página Login, podemos acessar a conta previamente cadastrada do usuário (API Node.js com MongoDB) e retornar à página Home com o botão "Login" subsituído pelo nome da conta cadastrada.

![Login Page](https://github.com/while-kaique/BigCart_Redux/assets/123902283/c01de920-eb58-4479-ba89-ae4e57fb0d42)

## Layout Cadastro
Na página Cadastro podemos criar/cadastrar um novo usuário no Banco de Dados MongoDB via backend em Node.js, o cadastro é apenas provisório e não possui métodos eficazes/seguros de cadastro ou um sistema complexo e sólido de validação, é importante ressaltar que estou em constante aprendizado e esse projeto serviu para exercitar o Redux (Front End). Em breve farei um verdadeiro sistema de cadastro!

![Register Page](https://github.com/while-kaique/BigCart_Redux/assets/123902283/12c416bc-3a91-4dc3-9b89-6efa5d82ae55)

# Tecnologias utilizadas
## Back end
- Node.js
- Express
- Multer
- MongoDB
## Front end
- HTML / CSS / JavaScript
- ReactJS
- Redux
## Implantação em produção
- Back end: Render
- Front end: Vercel
- Banco de dados: MongoDB

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Wellington Mazoni de Andrade

https://www.linkedin.com/in/wmazoni
