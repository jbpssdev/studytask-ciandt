import { Body, Controller, Get, Post } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';

@Controller('tarefas')
export class TarefasController {
   constructor(private readonly tarefasService: TarefasService) {}

   @Get()
   listar() {
      return this.tarefasService.listar();
   }

   @Post()
   criar(@Body() dados: CriarTarefaDto) {
      return this.tarefasService.criar(dados);
   }
}

// encontrei o erro! No import está chamando Controller. Está faltando o Get dentro.

//Mentalmente, o fluxo seria a requisição HTTP>body> (objeto)>@body>dados>CriarTarefaDto!