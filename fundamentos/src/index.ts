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
   },
   {
      id: 4,
      titulo: "Estudar JWT",
      concluido: false,
      prioridade: 2
   }
];

for (const tarefa of tarefas){
   if (tarefa.concludo){
      console.log(`${tarefa.titulo} está concluída.`);
   } else {
      console.log(`${tarefa.titulo} está pendente!`)
   }
}

//apenas um teste para acessar as propriedades
//npx tsc --noEmit não mostrou erros!