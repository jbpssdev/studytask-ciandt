import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { AtualizarTarefaDto } from './dto/atualizar-tarefa-dto';

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

   buscarPorId(id: number): Tarefa {
      const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);

      if(!tarefa) {
         throw new NotFoundException(`Tarefa com ID ${id} não encontrado`);
      }

      return tarefa;
   }

   remover(id: number){
      const indice = this.tarefas.findIndex((tarefa) => tarefa.id === id);

      if(indice === -1){
         throw new NotFoundException(`Tarefa com ID ${id} não encontrada!`);
      }

      this.tarefas.splice(indice, 1);

      return { mensagem: `Tarefa ${id} removida com sucesso!`}
   }

   atualizar(id: number, dados: AtualizarTarefaDto): Tarefa {
      const tarefa = this.buscarPorId(id); // aqui já busca a tarefa e lança o NotFoundException (404)

      if(dados.titulo !== undefined) { //só altera o título se o cliente realmente enviou esse campo no JSON.
         tarefa.titulo = dados.titulo;
      }

      if(dados.concluida !== undefined) {
         tarefa.concluida = dados.concluida;
      }

      return tarefa;
   }

}

//Anotações:

//void: é o TypeScript avisando que este método não retorna nenhum dado (apenas executa a ação).

//.findIndex(...) é o JavaScript percorrendo o array para achar a posição. Se não encontrar, ele devolte -1.

//this.tarefas.splice(indice, 1) é o JavaScript removendo exatamente 1 item a partir daquela posição (indice).