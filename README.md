# StudyTask

Projeto de estudo criado para consolidar fundamentos de desenvolvimento de software por meio de prática contínua, com foco em TypeScript, Node.js, NestJS e Angular.

O objetivo do projeto é construir uma aplicação simples de gerenciamento de tarefas de estudo enquanto reviso, na prática, conceitos importantes de backend, frontend, APIs, autenticação, testes e organização de código.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![LocalStack](https://img.shields.io/badge/LocalStack-1C1C1C?style=for-the-badge&logo=localstack&logoColor=white)

## Sobre o projeto

O **StudyTask** é um projeto pessoal de estudos desenvolvido com uma proposta simples: aprender construindo.

Em vez de estudar cada assunto de forma isolada, a ideia é usar uma única aplicação para aplicar os conceitos aos poucos. O projeto começa com TypeScript puro e evolui gradualmente para uma aplicação com backend em NestJS e frontend em Angular.

A aplicação será um gerenciador de tarefas de estudo, permitindo trabalhar com dados como:

```ts
{
  id: 1,
  titulo: "Estudar TypeScript",
  concluida: false,
  prioridade: 2
}
```

Ao longo do desenvolvimento, novas funcionalidades serão adicionadas conforme os assuntos forem estudados.

## Objetivo de estudo

Este repositório tem como principal objetivo documentar minha evolução nos estudos de desenvolvimento de software.

Os conteúdos trabalhados incluem:

- fundamentos de Node.js e TypeScript;
- tipos primitivos, arrays e objetos;
- interfaces e types;
- funções, classes e herança;
- generics e decorators;
- Promises, async/await e processamento assíncrono;
- APIs REST e verbos HTTP;
- arquitetura básica com NestJS;
- Modules, Controllers, Services e Providers;
- injeção de dependência;
- DTOs, Pipes e validação com class-validator;
- autenticação com JWT;
- Guards e proteção de rotas;
- Angular, Components e Services;
- integração entre frontend e backend;
- testes com Jest;
- conceitos de armazenamento com AWS S3 e LocalStack.

## Estrutura planejada

```text
StudyTask/
│
├── fundamentos/
│   └── Estudos e exercícios em TypeScript
│
├── studytask-api/
│   └── Backend com Node.js, TypeScript e NestJS
│
└── studytask-web/
    └── Frontend com Angular
```

## Funcionalidades planejadas

A aplicação será desenvolvida por etapas.

- listar tarefas;
- criar novas tarefas;
- buscar uma tarefa;
- atualizar tarefas;
- marcar tarefas como concluídas;
- excluir tarefas;
- validar dados recebidos pela API;
- implementar autenticação;
- proteger rotas com JWT;
- consumir a API pelo Angular;
- criar testes automatizados;
- experimentar armazenamento de arquivos com S3/LocalStack.

## Arquitetura de estudo

A ideia é compreender o fluxo completo de uma aplicação:

```text
Usuário
   |
   v
Angular
Component
   |
   v
Angular Service
   |
   | HTTP / JSON
   v
NestJS Controller
   |
   v
NestJS Service
   |
   v
Regras e dados
```

O foco não é apenas fazer o código funcionar, mas entender o papel de cada parte.

## Método de aprendizado

Para cada assunto, procuro seguir este processo:

1. estudar o conceito;
2. escrever uma explicação com minhas próprias palavras;
3. criar um exemplo simples;
4. aplicar o conceito no projeto;
5. executar e testar;
6. provocar erros para entender o comportamento;
7. corrigir os problemas encontrados;
8. revisar o código;
9. explicar em voz alta o que foi feito;
10. registrar a evolução com commits.

## Status

Projeto em desenvolvimento.

Neste momento, o foco está nos fundamentos de TypeScript e na construção da base que será utilizada nas próximas etapas do projeto.

## Motivação

Estou em processo de formação em **Análise e Desenvolvimento de Sistemas** e quero fortalecer minha base técnica antes de avançar para projetos maiores.

O StudyTask também serve como registro da minha evolução: desde os conceitos mais simples até a integração entre frontend, backend, autenticação, testes e serviços externos.

A proposta é não apenas memorizar termos, mas compreender como eles se conectam dentro de uma aplicação real.

## Observação

Este é um projeto de estudos. Algumas implementações podem ser simples de propósito, pois o objetivo é aprender os conceitos passo a passo e melhorar o código conforme o conhecimento evolui.
