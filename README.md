# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
# PROS AND CONS

## PROS
 - uma estrutura de arquivos simples assim impressiona um pouco (apesar de não ser garantia de quase nada)

 - Comunidades bastante ativas, tipo, tem bastante coisa até em PT-BR o que reduz curva de aprendizado

 - a primeira referencia que peguei é de dois anos atrás, o framework tem 5 anos, não é ótimo, mas não é péssimo (nest tem referencias de dezembro de 2019 como mais primeiro lugar no google, mau sinal já que o SEO prefere links antigos e com muito acesso)

 - tdd first

 - ele cria models junto com migrations, logo para diferenciar create table e change table é mais fácil, além de pegar o nome da migration para a tabela

## CONS

 - escrever schema na mão
 
 - orm não corrigi snake_case para lowerCammelCase

 - migrations não são automaticamente geradas

 - tem uma dependencia com fragilidade e breaking changes ativa, mesmo a galera dizendo que essa dependencia é muito no fundo do framework e 100% inacessível as coisas sempre pode escalar (thread sobre o assunto)[https://twitter.com/dan_abramov/status/1149795048722067456?s=21]

  - não sei se é uma questão do exemplo que usei, mas todas as mutations no mesmo arquivo é uma péssima ideia muito rápido, mesmo que a galera use ` o que torna mais fácil interpolar
