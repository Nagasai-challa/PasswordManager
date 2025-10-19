import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI!), UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
