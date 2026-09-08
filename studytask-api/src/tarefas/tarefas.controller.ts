import { Body, Controller, Delete, Get, Patch, Post, Param, UseGuards} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { AtualizarTarefaDto } from './dto/atualizar-tarefa-dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)

@Controller('tarefas')
export class TarefasController {
   constructor(private readonly tarefasService: TarefasService) {}

   @Get()
   listar() {
      return this.tarefasService.listar();
   }

   @Get(':id')
   buscarPorId(@Param('id') id: number) {
      console.log('Tipo do id recebido:', typeof id, '| Valor:', id);
      return this.tarefasService.buscarPorId(id);
   }

   @Delete(':id')
   remover(@Param('id') id: number) {
      return this.tarefasService.remover(id);
   }

   @Post()
   criar(@Body() dados: CriarTarefaDto) {
      console.log('Instância real da classe?', dados instanceof CriarTarefaDto);
      return this.tarefasService.criar(dados);
   }

   @Patch(':id')
   atualizar(@Param('id') id: number, @Body() dados: AtualizarTarefaDto,) {
      return this.tarefasService.atualizar(id, dados);
   }
}