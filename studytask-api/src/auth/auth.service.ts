import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

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
}
