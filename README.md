## Projeto Teste FullStack com Laravel, React e Sqlite

## Requisitos:

Certifique-se de que os seguintes requisitos estejam instalados no ambiente antes de iniciar o projeto:


PHP: v8.4.1

SQLite: v3.43.2

Composer: v2.8.3

Node.js: v18.18.0


## Rodando o Projeto:

Clone o repositório:

git clone https://github.com/Gvurdel/testeDevFullStack.git 

## Configurando o Sqlite:

Crie arquivo .env na raiz do projeto e configure o caminho para o banco de dados SQLite.

```
cp .env.example .env
````

DB_DATABASE=/seu/repositorio/testeDevFullStack/database/database.sqlite

APP_KEY=base64

## Composer

Execute o comando abaixo para instalar as dependências do Composer:

```
composer install
````

### Executar as migrations:

```
php artisan migrate
````

## Gerar chave:

```
php artisan key:generate
````

## Popular o banco (seeders):

Preencha o banco de dados com registros iniciais:

```
php artisan db:seed
```

```
php artisan db:seed --class=UserSeeder
````

## Usuários Criados (Seed):

Administrador:
E-mail: vurdel@icloud.com
Senha: 123456A#

Moderador:
E-mail: joao@icloud.com
Senha: 123456A#

Leitor:
Qualquer cadastro realizado entra automaticamente como Leitor.

## Iniciar o servidor Laravel em um terminal:
```
php artisan serve
```
## Instalar e executar o servidor Node.js em outro terminal:

````
npm install
````

```
npm run dev
```
## Questão 1 - Quais as principais vantagens de se trabalhar utilizando ambientes de containers?

Containers oferecem portabilidade entre ambientes, garantem consistência no desenvolvimento e produção, proporcionam isolamento de aplicações, são mais leves e rápidos que máquinas virtuais, facilitam a escalabilidade e a automação com CI/CD, além de reduzir custos operacionais e suportar arquiteturas modernas como microsserviços.

## Questão 2 - Explique a diferença entre Git e GitHub:

A diferença entre Git e GitHub está no fato de que o Git é uma ferramenta de controle de versão, enquanto o GitHub é uma plataforma que utiliza o Git como base para colaboração em projetos.

## Questão 3 - Explique a arquitetura MVC:

A arquitetura MVC (Model-View-Controller) é um padrão de design de software amplamente utilizado no desenvolvimento de aplicações web e desktop. Ela separa a aplicação em três camadas principais — Model, View e Controller — para organizar o código de forma eficiente, modular e reutilizável.

