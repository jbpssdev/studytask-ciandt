import { Module } from '@nestjs/common';
import { JwtModule }from '@nestjs/jwt';

@Module({
   imports: [JwtModule],
})
export class AuthModule {}

//Erro e atenção: eu escrevi JwModule, e passei mais de 10 minutos tentanto ver que o era Jwt. Acho que estou estudando mais do que deveria. Hora de descansar! KKKK

