const nomeProjeto: string = "StudyTask";
const versao: number = 1;
const emDesenvolvimento: boolean = true;

const tecnologias: string[] = [
   "TypeScript",
   "Node.JS",
   "NestJS",
   "Angular"
];

const tarefas = [
   {
      id: 1,
      titulo: "Estudar TypeScript",
      concluido: true,
      prioridade: 1
   },
   {
      id: 2,
      titulo: "Estudar NestJS",
      concluido: false,
      prioridade: 2
   },
   {
      id: 3,
      titulo: "Estudar Angular",
      concludo: false,
      prioridade: 3
   }
];

console.log("Projeto:", nomeProjeto);
console.log("Versão:", versao);
console.log("Em desenvolvimento:", emDesenvolvimento)

//apenas um teste para acessar as propriedades