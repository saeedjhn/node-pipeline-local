import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const envFilePathMap = {
  development: 'deploy/dev/.env',
  production: 'deploy/prod/.env',
  staging: 'deploy/staging/.env',
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFilePathMap[process.env.NODE_ENV] ?? 'deploy/dev/.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
