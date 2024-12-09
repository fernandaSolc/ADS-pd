import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CargoModule } from './cargo/cargo.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { MedalhaModule } from './medalha/medalha.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from "./auth/auth.module";
import { GoogleAuthMiddleware } from "./middleware/google-auth.middleware";
import { configValidationSchema } from "./config.validation";
// import { RelatoriosModule } from './relatorios/relatorios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // Selecionar o arquivo .env baseado no NODE_ENV
      isGlobal: true, // Configuração global para acesso às variáveis em toda a aplicação
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'backend_db',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', // Sincronizar apenas em desenvolvimento
    }),
    CargoModule,
    FuncionarioModule,
    TarefaModule,
    MedalhaModule,
    FeedbackModule,
    ProdutoModule,
    AuthModule,
   // RelatoriosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GoogleAuthMiddleware) // Aplica o middleware globalmente
      .forRoutes('*'); // Aplica a todas as rotas ou específicas
  }
}