import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CriarTarefaDto {
   @IsBoolean()
   @IsNotEmpty()
   titulo: string;

   @IsString()
   concluida: boolean;
}

//Os decoratos de validação. Novidade pra mim!