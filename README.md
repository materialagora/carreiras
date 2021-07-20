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