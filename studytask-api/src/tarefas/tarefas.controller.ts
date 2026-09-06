import { Controller, Get } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
   constructor(private readonly tarefasService: TarefasService) {}

   @Get()
   listar() {
      return this.tarefasService.listar();
   }
}

// encontrei o erro! No import está chamando Controller. Está faltando o Get dentro.