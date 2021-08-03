# GEEKLOUCO.COM
#### Esse site, tem como objetivo apresentar os seus heróis favoritos no formato de um marketplace.
live preview: https://geeklouco.vercel.app

## CORS POLICY

Para utilizar a aplicação é necessario que tenha o extensor de cors chamado "Moesif CORS" ou similar:
https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc
[![Moesif CORS](https://user-images.githubusercontent.com/62522817/89653164-867dd200-d8be-11ea-8c30-8188ea6513f9.png)](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)

## O SITE

![geek louco front page](https://uploaddeimagens.com.br/images/003/364/274/full/_-_1.png?1627958181)

#### A aplicação foi feita usando ReactJs, com auxilio do axios para realizar as requisições para a api de heróis https://www.superheroapi.com/api

### OS CARDS 

![Cards de heróis](https://uploaddeimagens.com.br/images/003/364/290/full/_-_3.png?1627961149)

Os cards ficaram organizados em carrosel horizontal, para scrollar é só usar o atalho de scroll horizontal do mouse (shift+scroll)

### Popup com com mais informações

![Popup com mais informações do herói](https://uploaddeimagens.com.br/images/003/364/288/full/_-_4.png?1627960268)

Ao clicar no card qualquer herói, irá ser exibido na tela um popup na tela com as respectivas informações do herói. para sair basta clicar fora do popup, ou no botão X no canto superior direito do popup.

### Futuras features

#### Barra de pesquisa:
A barra de pesquisa irá servir para pesquisar algum herói especifico, que não conste na tela principal do site.

#### Login:
Ainda não existe uma pagina para ser feito o login, logo o botão redireciona para uma pagina empty surpresa.

## O codigo

Para rodar a aplicação na sua maquina local, basta realizar um clone deste repositório. e com o npm instalado, rodar o comando "rpm install".



==================================================================================================================================================================


# A empresa

A Material Agora nasceu para descomplicar o dia a dia de todos que estão realizando obras através de uma forma simples de comprar sem ter que gastar tempo com deslocamento e transporte.

# carreiras
Nossa equipe de engenharia é 100% remoto e usamos as seguintes tecnologias:
- Golang, PostgreSQL, MongoDB, RabbitAMQP
- Containers, Continuous Delivery, TDD


# Como faço para trabalhar como desenvolvedor?

1. Envie um email para o recrutador contendo:
    - Assunto: developer
    - Corpo: Github / LinkedIn / Curriculo / breve texto sobre sua experiência profissional
2. Faça um fork (ou clone) esse repositório
3. Complete o desafio abaixo no seu tempo, mas **idealmente deve levar uma semana**.
4. Nos envie o desafio da forma que lhe for conveniente - email ou pull request.

# Desafio
## Developer
Para o desafio gostaríamos que você crie uma API e um frontend basico inspirado em super heróis e vilões para servir **utilizando** a SuperHeroAPI (https://superheroapi.com/) como fonte de dados. O frontend deverá conter 

## Requisitos

A API deve ser escrita em **Golang** e utilizar **PostgreSQL** como armazenamento de dados (somente para vaga backend). O **frontend** deve ser feito com **React** ou VueJS e deve mostrar os heróis cadastrados **no formato de loja** (ex: americanas.com).

### Requisitos gerais
- Consumir os dados dos heróis da https://superheroapi.com

(backend somente) Através da API deve ser possível:
- Cadastrar um Super/Vilão
- Listar todos os Super's cadastrados
- Listar apenas os Super Heróis
- Listar apenas os Super Vilões
- Buscar por nome
- Buscar por 'uuid'
- Remover o Super

(frontend) Através do frontend deve ser possível:
- Visualizar todos os heróis disponíveis
- Visualizar cada herói individualmente e suas respectivas características
- Criar e visualizar grupos de heróis

### Específicos
- API deve seguir a arquitetura [REST](https://restfulapi.net/)
- API deve seguir os principios do [12 factor app](https://12factor.net/pt_br/)
- Cada super deve ser cadastrado somente a partir do seu `name`.
- A pesquisa por um super deve conter os seguintes campos:
    - uuid
    - name
    - full name
    - intelligence
    - power
    - occupation
    - image
- A pesquisa por um super também precisa conter:
    - lista de grupos em que tal super está associado
    - número de parentes

## Como será a avaliação

A ideia aqui é entender como você toma suas decisões frente a certas adversidades e como você desenvolve através de multiplas funcionalidades.

Pontos que vamos avaliar:
- Commits
    - como você evoluiu seu pensamento durante o projeto, pontualidade e clareza.
- Complexidade
    - Código bom é código legivel e simples (https://medium.com/trainingcenter/golang-d94e16d4b383).
- Dependências
    - O ecosistema (https://github.com/avelino/awesome-go) da linguagem possui diversas ferramentas para serem usadas, use-as bem!
- Documentação
    - Qual versão de Go você usou?
    - Quais bibliotecas e ferramentas usou?
    - Como se utiliza a sua aplicação?
    - Como executamos os testes?
- Considerações
    - as regras de negócio não foram definidas intencionalmente
    - cabe a você decidir como vai manter os cadastros no banco da aplicação
    - cabe a você decidir como vai tratar cadastros repetidos
