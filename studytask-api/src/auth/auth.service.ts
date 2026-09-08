import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
   constructor(private readonly jwtService: JwtService) {}

   gerarToken(): string {
      const payload = {
         sub: 1,
         nome: 'usuario-teste',
      };

      return this.jwtService.sign(payload);
   }

   login(dados: LoginDto) {
      const usuarioCorreto = dados.usuario === 'jackson';
      const senhaCorreta = dados.senha === '1234';

      if(!usuarioCorreto || !senhaCorreta){
         throw new UnauthorizedException('Usuário ou senha inválida!');
      }

      const payload = {
         sub: 1,
         nome: dados.usuario,
      };

      return {
         access_token: this.jwtService.sign(payload),
      }
   }
}
