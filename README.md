<h1 align="center">
    Nasa API
</h1>

<p align="center">
    <a href="https://github.com/Goytai/NasaAPI/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/Goytai/NasaAPI?style=for-the-badge" alt="License MIT" />
    </a>
</p>

------------
<h2>📖 Sobre</h2>

Projeto proposto pela <a href="https://voltbras.com.br/">Voltbras</a> ⚡ para processo de seleção de desenvolvedores.

------------
<h2>🧪 Tecnologias</h2>

O projeto foi desenvolvido utilizando:

&rarr; <a href="https://nodejs.org/en/">NodeJS</a> <br>
&rarr; <a href="https://www.typescriptlang.org/">TypeScript</a> <br>
&rarr; <a href="https://www.apollographql.com/">Apollo Graphql</a> <br>
&rarr; <a href="https://typegraphql.com/">TypeGraphql</a> <br>
&rarr; <a href="https://typeorm.io/#/">TypeORM</a> <br>
&rarr; <a href="https://docs.typestack.community/typedi/v/develop/01-getting-started">TypeDI</a> <br>
&rarr; <a href="https://www.mongodb.com/">MongoDB</a> <br>
&rarr; <a href="https://www.docker.com/">Docker</a> <br>

------------
<h2>🔌 Getting started</h2>

Faça o clone do projeto:

```bash
$ git clone https://github.com/Goytai/NasaAPI.git
```

Acesse a pasta do projeto:

```bash
$ cd NasaAPI
```

Instale as dependências:
```bash
$ yarn
```

Inicie o docker composer:
```bash
$ yarn db:up
```

>⚠️ Você precisa ter o docker composer em sua máquina.

Crie o arquivo ``.env`` na raiz do projeto e defina as seguintes variáveis de ambiente.
```env
PORT=3333

DB_TYPE=mongodb

DB_URL=mongodb://root:root@localhost:27017/voltbras?authSource=admin&readPreference=primary&ssl=false
```

>⚠️ Essa configuração é fundamental para o funcionamento da aplicação.

Inicie o projeto:
```bash
# Inicie como desenvolvimento
$ yarn dev

# Inicie como produção local
$ yarn build
$ yarn start
```

------------
<h2>📝 Licença</h2>

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo de <a href="https://github.com/Goytai/NasaAPI/blob/master/LICENSE">LICENSE</a> para obter mais detalhes.

------------
<p align="center">
    <a href="https://github.com/Goytai">
        <img src="https://raw.githubusercontent.com/Goytai/goytai/master/github.svg" width="100px" alt="GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/goytai/">
        <img src="https://raw.githubusercontent.com/Goytai/goytai/master/linkedin.svg" width="100px" alt="Linkedin"/>
    </a>
    <a href="mailto:dev.goytai@gmail.com">
        <img src="https://raw.githubusercontent.com/Goytai/goytai/master/gmail.svg" width="100px" alt="Email"/>
    </a>
</p>
<p align="center">Feito com 💜 por Goytai</p><br>
