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
      console.log('Instância real da classe?', dados instanceof CriarTarefaDto);
      return this.tarefasService.criar(dados);
   }
}

