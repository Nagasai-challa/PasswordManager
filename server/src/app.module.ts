import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { PasswordModule } from './passwords/password.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI!), UserModule, AuthModule, PasswordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
