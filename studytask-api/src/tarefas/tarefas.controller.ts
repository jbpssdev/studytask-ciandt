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

//Invoke-RestMethod `
//  >    -Method Post `
//  >    -Uri http://localhost:3000/tarefas `
//  >    -ContentType "application/json" `
//  >    -Body '{"titulo":123,"concluida":"não"}'

//Uma pegadinha! Nesse objeto json, na string eu coloquei number. Aceitou! Não deveria, mas acredito que o TypeScript sozinho não está conseguindo validar tudo. 