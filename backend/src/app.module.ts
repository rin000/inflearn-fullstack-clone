import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
=======

@Module({
  imports: [],
>>>>>>> 1ba154e786fd56397c565bf27e6e97caeeff4dbd
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
