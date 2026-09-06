import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CriarTarefaDto {
   @IsString()
   @IsNotEmpty()
   titulo: string;

   @IsBoolean()
   concluida: boolean;
}

//Os decoratos de validação. Novidade pra mim!
//Eu tinha invertido: coloquei IsBoolean em cima da string e IsString em cima do boolean. Já corrigi!