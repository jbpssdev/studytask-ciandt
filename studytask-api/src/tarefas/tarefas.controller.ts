import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';

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

   @Post()
   criar(@Body() dados: CriarTarefaDto) {
      console.log('Instância real da classe?', dados instanceof CriarTarefaDto);
      return this.tarefasService.criar(dados);
   }
}

//Anotações importantes:

//@Get(':id') é o NestJS definindo que essa rota recebe um parâmetro dinâmico na URL. Os dois pontos indicam que id é uma variável.

//@Param('id') é o BestJS extraindo o valor do :id da URL e entregando para a variável.

//Typeof id: é o JavaScript verificando o tipo real da variável no momento da execução.