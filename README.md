## Resolução

- Tudo começa sempre em um bom ambiente, para a identação do meu código fonte, utilizei o eslint e prettier, para ajudarem nas identações automáticas e detenção de erros de formatação.
- Para o desenvolvimento desta aplicação, utilizei o Vite já que ele torna todo o processo de execução bem mais rápido.
  Para a estilização, utilizei o famoso styled-components, que é uma maneira de escrever componente de estilização, e com
  uma enorme vantagem em não reescrever repetidos CSS.
- Utilizei o @redux-toolkit para o gerenciamento de minhas variáveis globais, já que o @redux-toolkit, é uma nova implementação do redux, com menos burocracia, menos código, e mais fácil de aplicar.
- Para o consumo da API do superheroAPI, utilizei como base, o axios, que é uma biblioteca que nos permite fazer fetch em APIs.
- Para o armazenamento local do grupo de heróis, utilizei o localStorage, para persistir os meus dados em cache.

## Tecnologias e Ferramentas

- React
- Typescript
- Vite
- React Router
- Styled-components
- Axios
- @Redux-toolkit
- Local Storage
- Docker
- Eslint e Prettier

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
