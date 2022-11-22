# A empresa

A Material Agora nasceu para descomplicar o dia a dia de todos que estão realizando obras através de uma forma simples de comprar sem ter que gastar tempo com pesquisa, deslocamento e transporte.

# carreiras

Nossa equipe de engenharia é 100% remoto e usamos as seguintes tecnologias:

- Frontend: ReactJS, Tailwind, NuxtJS, Docker;
- Backend: Golang, PostgreSQL, MongoDB, RabbitAMQP, Docker.

# Como faço para trabalhar como desenvolvedor?

1. Envie um email para `arthursilva@materialagora.com.br` contendo:
   - Assunto: desenvolvedor <frontend/backend>
   - Corpo: Github / LinkedIn / Curriculo / breve texto sobre sua experiência profissional
2. Faça um fork (ou clone) esse repositório
3. Complete o desafio abaixo de acordo com a vaga.
4. Nos envie o desafio da forma que lhe for conveniente - email ou pull request.

# Desafio

## Desenvolvedor Frontend

Para o desafio você precisa criar um app basico inspirado em super heróis e vilões **utilizando** a [SuperHeroAPI](https://www.superheroapi.com/) como fonte de dados. A app deverá conter um CRUD básico dos heróis e o gerenciamento de listas, como descrito abaixo nos requisitos.

## Requisitos

A app deve ser escrita usando o framework **React**, atendendo aos requisitos abaixo.

### Requisitos

O app deve:

- Consumir os dados dos heróis diretamente da [https://superheroapi.com](https://www.superheroapi.com/);
- Ser possível visualizar todos os heróis disponíveis;
- Ser possível pesquisar um herói/vilao pelo nome;
- Ser possível visualizar cada herói individualmente e suas respectivas características;
- Ser possível criar, editar e visualizar grupos de heróis (listas) com nome customizado;
- Ser possível adicionar ou remover um herói/vilao de uma lista;

### Observacoes gerais

Pensar no app como um pequeno e-commerce onde os heróis/viloes sao os produtos pode ajudar.

## Como será a avaliação

A ideia aqui é entender como você toma suas decisões frente a certas adversidades e como você desenvolve através de multiplas funcionalidades.

Pontos que vamos avaliar:

- **Complexidade**
  - Código bom é código [legivel e simples](https://medium.com/trainingcenter/golang-d94e16d4b383).
- **Documentação**
  - Quais bibliotecas e ferramentas usou?
  - Como se utiliza a sua aplicação?
  - Como executamos os testes?
- Containers
  - Possui dockerfile ?
  - É possível subir a aplicação através de um ´docker-compose.yml´?
- Commits
  - como você evoluiu seu pensamento durante o projeto, pontualidade e clareza.
- Testes
  - Que tipos de testes existem na app?
  - Como melhoraria os testes?

## Considerações

- as regras de negócio não foram definidas intencionalmente
- para reduzir a complexidade armazene os dados em memória

## Resolução

- Tudo começa sempre em um bom ambiente, para a identação do meu código fonte, utilizei o eslint e prettier, para ajudarem nas identações automáticas e detenção de erros de formatação.
- Para o desenvolvimento desta aplicação, utilizei o Vite já que ele torna todo o processo de execução bem mais rápido.
  Para a estilização, utilizei o famoso styled-components, que é uma maneira de escrever componente de estilização, e com
  uma enorme vantagem em não reescrever repetidos CSS.
- Utilizei o @redux-toolkit para o gerenciamento de minhas variáveis globais, já que o @redux-toolkit, é uma nova implementação do redux, com menos burocracia, menos código, e mais fácil de aplicar.
- Para o consumo da API do superheroAPI, utilizei como base, o axios, que é uma biblioteca que nos permite fazer fetch em APIs.
- Para o armazenamento local do grupo de heróis, utilizei o localStorage, para persistir os meus dados em cache.

## Como executar a aplicação

- Depois de já clonado na máquina, é só executar os seguintes comandos:
- `yarn install`
- `yarn dev` ou `docker-compose up`
- Quando estes comandos forem executados, a aplicação estará disponível em `http://localhost:3000`

## Como se utiliza a aplicação

- A primeira página, é a home, onde podemos ver a lista de todos heróis e/ou vilões.
- Ainda na home, temos também um input de pesquisa de herói, que quando pesquisamos, ele abre um card com os resultados da pesquisa, e quando clicamos no herói que desejamos visualizar, ele nos redireciona em uma página específica, com todas as informações sobre o herói selecionado.
- Na home, temos 2 botões, um para criar o grupo de heróis, e o outro para listar a lista de grupo de heróis.
- Quando clicamos em `Create hero gorup`, ele nos redireciona em uma página, com um input de pesquisa, para podermos adicionar na nossa nova lista ou grupo de heróis, todos os heróis que quisermos.
- Quando selecionar todos os heróis, basta dar um nome ao grupo de heróis, e posteriormente clicar em adicionar. Até aqui um grupo de heróis foi criado.
- Quando clicamos em `View hero gorups`, o app nos redireciona para uma página de listagem dos grupos de heróis, com os nomes e total de elementos que existem no grupo.
- Tem um botão para remover grupo de heróis. Mas se clicarmos no card de listagem do grupo, ele nos redireciona para a página de edição, onde podemos mudar o nome do grupo, remover/adicionar heróis.
- Basicamente, estas são as funcionalidades da aplicação, mas, bora testar o app kkk.
