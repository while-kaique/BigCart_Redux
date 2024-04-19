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
Já página Login, podemos acessar a conta previamente cadastrada do usuário (API Nodejs com MongoDB) e retornar à página Home com o botão "Login" subsituído pelo nome da conta cadastrada.
![Login Page](https://github.com/while-kaique/BigCart_Redux/assets/123902283/c01de920-eb58-4479-ba89-ae4e57fb0d42)

## Modelo conceitual
![Modelo Conceitual](https://github.com/acenelio/assets/raw/main/sds1/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

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
