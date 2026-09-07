import { PartialType } from "@nestjs/mapped-types";
import { CriarTarefaDto } from "./criar-tarefa.dto";

export class AtualizarTarefaDto extends PartialType(CriarTarefaDto){}

// anotações

// PartialType(CriaarTarefaDto) copia titulo e concluido, mas torna ambos opcionais

// Se o cliente enviar titulo, ele ainda precisara ser uma string não vazia (@IsString(), @IsNotEmpty()). Se não enviar, o ValidationPipe não reclama.

//extends é o recurso do TypeScript/JavaScript de herança de classes.