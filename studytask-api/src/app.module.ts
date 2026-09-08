import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TarefasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
