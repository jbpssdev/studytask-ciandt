const tarefas = [
  {
    id: 1,
    titulo: "Estudar TypeScript",
    concluida: true,
    prioridade: 1
  },
  {
    id: 2,
    titulo: "Estudar NestJS",
    concluida: false,
    prioridade: 2
  },
  {
    id: 3,
    titulo: "Estudar Angular",
    concluida: false,
    prioridade: 3
  },
  {
    id: 4,
    titulo: "Estudar JWT",
    concluida: false,
    prioridade: 2
  }
];

console.log("STATUS DAS TAREFAS");

for (const tarefa of tarefas) {

  if (tarefa.concluida) {
    console.log(`${tarefa.titulo} está concluída.`);
  } else {
    console.log(`${tarefa.titulo} está pendente.`);
  }

}

console.log("\nPRIORIDADES");

for (const tarefa of tarefas) {

  if (tarefa.prioridade === 1) {
    console.log(`${tarefa.titulo}: alta`);
  } else if (tarefa.prioridade === 2) {
    console.log(`${tarefa.titulo}: média`);
  } else {
    console.log(`${tarefa.titulo}: baixa`);
  }

}

let quantidadePendentes: number = 0;

for (const tarefa of tarefas) {

  if (!tarefa.concluida) {
    quantidadePendentes = quantidadePendentes + 1;
  }

}

console.log(`\nTotal de tarefas pendentes: ${quantidadePendentes}`);