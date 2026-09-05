const nomeProjeto: string = "StudyTask";
const versao: number = 1;
const emDesenvolvimento: boolean = true;
let quantidadePendentes: number = 0;

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

// for (const tarefa of tarefas){
//    if (tarefa.concludo){
//       console.log(`${tarefa.titulo} está concluída.`);
//    } else {
//       console.log(`${tarefa.titulo} está pendente!`)
//    }
// }

// Agora é trabalhar na prioridade 1, alta, 2, media, 3 baixa

// for (const tarefa of tarefas){
//    if (tarefa.prioridade === 1){
//       console.log(`${tarefa.titulo}: prioridade alta!`);
//    }else if (tarefa.prioridade === 2) {
//       console.log(`${tarefa.titulo}: prioridade média!`)
//    }else {
//       console.log(`${tarefa.titulo}: prioridade baixa!`)
//    }
// }

for (const tarefa of tarefas){
   if(tarefa.concluido === false){
      quantidadePendentes = quantidadePendentes + 1;
   }
}

console.log("Pendentes:", quantidadePendentes);

//apenas um teste para acessar as propriedades
//npx tsc --noEmit não mostrou erros!