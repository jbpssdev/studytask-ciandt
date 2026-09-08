import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
   constructor(private readonly jwtService: JwtService) {}

   async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      console.log('Cabeçalhos que chegaram no servidor: ', request.headers);
      const token = this.extrairTokenDoCabecalho(request);

      if(!token) {
         throw new UnauthorizedException('Token não fornecido!');
      }

      try {
         const payload = await this.jwtService.verifyAsync(token);
         request['usuario'] = payload;
      }catch {
         throw new UnauthorizedException('Token inválido ou expirado!');
      }

      return true;
   }

   private extrairTokenDoCabecalho(request: any): string | undefined {
      const [tipo, token] = request.headers.authorization?.split(/\s+/) ?? [];
      return tipo?.toLowerCase() === 'bearer' ? token : undefined;
   }
}