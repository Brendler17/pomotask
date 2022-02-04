<p align="center">
  <a href="https://pomotask-hazel.vercel.app">
    <img title="Visualizar aplicação" width="25%" src="https://i.ibb.co/44Mny5D/Pomo-Task-1-removebg-preview.png">
  </a>
</p>

<h4 align="center">
  
[Descrição](#desc)  |  [Tecnologias](#tec) | [Funcionalidades](#func) | [Projeto](#Projeto) | [Rodando localmente](#local) | [Licença](#lic)

<br>

<img alt="GitHub repo size" title="GitHub repo size" src="https://img.shields.io/github/languages/code-size/Brendler17/pomotask?label=Repo%20Size&logo=github&logoColor=white&style=flat-square" />

<img src="https://img.shields.io/github/deployments/Brendler17/pomotask/Production?color=50fa7b&label=Vercel%20Deploy&labelColor=282a36&logo=Vercel" />

<a href="https://github.com/Brendler17/pomotask/blob/master/LICENSE">
 <img src="https://img.shields.io/github/license/Brendler17/pomotask?style=flat-square" alt="license"/>
</a>

<img alt="GitHub last commit" title="GitHub last commit" src="https://img.shields.io/github/commit-activity/m/Brendler17/pomotask?style=flat-square" />

<img alt="GitHub language coun" title="GitHub language coun" src="https://img.shields.io/github/languages/count/Brendler17/pomotask?style=flat-square" />

<br>

</h4>

<br>

<h2 id="desc">
💻 Sobre o projeto
</h2>

<p align="justify">
O <b>Pomo Task</b> é uma aplicação desenvolvida com o intuito de unir a técnica de pomodoro com a realização de exercícios em forma de desafios, destinada a ajudar quem passa bastante tempo á frente do computador, que é o caso de nós <i>devs</i>.
<br/>
Com o uso excessivo do computador alguns problemas podem ser gerados futuramente, sejam eles nas articulações ou até mesmo nos olhos, gerando problemas de visão.
Aí que entra o <b>Pomo Task</b>, a cada pomodoro um novo exercício/alongamento é disponibilizado, fazendo com que a cada período de estudo nosso corpo também descanse, a fim de evitar os problemas citados acima.
</p>

<h2 id="tec">
🛸 Tecnologias
</h2>

<a href="https://reactjs.org">
 <img alt="reactjs" title="reactjs" src="https://img.shields.io/static/v1?label=React&message=Javascript%20Library&style=social&logo=React&logoColor=0088CC" />
</a>

<br/>

<p align="left">
<a href="https://nextjs.org">
 <img alt="nextjs" title="nextjs" src="https://img.shields.io/static/v1?label=Next.js&message=Framework%20React&style=social&logo=Next.js&logoColor=black" />
</a>

<br/>

<a href="https://www.typescriptlang.org/download">
 <img alt="typescript" title="typescript" src="https://img.shields.io/static/v1?label=TypeScript&message=Typed%20JavaScript&style=social&logo=typescript&logoColor=27609E" />
</a>

<br/>

<a href="https://vercel.com">
 <img alt="vercel" title="vercel" src="https://img.shields.io/static/v1?label=vercel&message=Deploy&&style=social&logo=Vercel" />
</a>
  
 <br/>

<a href="https://www.figma.com/file/cniET9Xo3ZIwoqJ4PWcovu/Move.it-1.0?node-id=160%3A2761">
 <img alt="figma" title="figma" src="https://img.shields.io/static/v1?label=Figma&message=Project%20Prototyping&style=social&logo=Figma&logoColor=F24E1E" />
</a>

<br>

<h2 id="func">⚔ Funcionalidades</h2>

- [X] Opção de selecionar o `tempo de pomodoro`.
- [X] Opção de selecionar o `tempo de descanso` entre cada pomodoro.
- [x] Opção de `iniciar um ciclo` para receber um desafio.
- [x] Opção de `abandonar um ciclo` ativo.
- [x] `Liberar um desafio` quando  o tempo de pomodoro selecionado chegar ao fim.
- [x] `Tempo de descanso` automático.
- [x] `Controle de descanso` não permitindo o usuário interagir com o app até o descanso ser finalizado.
- [x] Opções de `realizar desafio` ou `falhar desafio` quando o tempo de descanso for finalizado.
- [x] `Notificação` quando liberar um novo desafio e quando o ciclo de descanso chegar ao fim.
- [x] Disponibilidade para `iniciar um novo clico` ao preencher as opções do desafio.
- [x] `Menu de estatísticas` do usuário.
- [x] `Número de desafios concluídos`.
- [x] `Horas totais` de todos pomodoros do usuário.
- [x] `Horas diárias` de pomodoros do usuário.
- [x] `Número de pomodoros totais`.
- [x] `Número de pomodoros diários`.
- [x] Opção de `resetar os valores diários` para um melhor controle.
- [x] `Receber experiência` ao concluir desafios.
- [x] `Barra de progresso` (xp) do usuário.
- [x] `Subir de level` ao obter a experiência necessária para o próximo nível.
- [x] `Mensagem ao subir de level`.


<br>

<h2 id="Projeto">
👔 Projeto
</h2>

<a href="https://pomotask-hazel.vercel.app">
<img title="PomoTask" src="https://i.ibb.co/wyxvYVD/Design-sem-nome-1.jpg">
</a>
<span align="center"><h6>Clique na imagem para visualizar a aplicação</h6></span>

<br>

<h2 id="local">
⚛ Rodando aplicação localmente
</h2>

> **⚠ Atenção !** <br> Antes de prosseguir com o passo a passo abaixo você precisa ter instalado em sua máquina o gerenciador de pacote [Yarn](https://classic.yarnpkg.com/en/docs/install) e o [Git](https://git-scm.com).

<br>

> 📝 Clonando o repositório e entrando no diretório criado.

```shell
git clone git@github.com:brendler17/pomotask.git && cd move-it
```

> 📝 Baixando / Instalando dependências.

```shell
yarn setup
```

> 📝 Rodando Aplicação

```shell
yarn dev
```

> Pronto 🎉 se tudo ocorreu conforme o esperado 😁 a aplicação estará
> rodando na porta 3000. Basta acessar o endereço no navegador
> http://localhost:3000 e você verá a aplicação funcionando.

<br>

<h2 id="lic">
📃 Licença
</h2>

Este projeto esta sobe a licença [MIT](./LICENSE).

created by [Gustavo Brendler](https://github.com/Brendler17) & [Rocketseat](https://github.com/Rocketseat)
