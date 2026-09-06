import { Injectable } from '@nestjs/common';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';

type Tarefa = {
   id: number;
   titulo: string;
   concluida: boolean;
};

@Injectable()
export class TarefasService {
   private readonly tarefas: Tarefa[] = [
      {
         id: 1,
         titulo: 'Estudar NestJS',
         concluida: false,
      },
      {
         id: 2,
         titulo: 'Estudar Angular',
         concluida: false,
      },
      {
         id: 3,
         titulo: 'Revisar TypeScript',
         concluida: true,
      },
   ];

   listar(): Tarefa[]{
      return this.tarefas;
   }

   criar(dados: CriarTarefaDto): Tarefa{
      const novaTarefa: Tarefa = {
         id: this.tarefas.length + 1,
         titulo: dados.titulo,
         concluida: dados.concluida,
      };

      this.tarefas.push(novaTarefa);

      return novaTarefa;
   }

}
