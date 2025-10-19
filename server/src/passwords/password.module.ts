import { MongooseModule } from '@nestjs/mongoose';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';
import { Module } from '@nestjs/common';
import { Password, PasswordSchema } from './password.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Password.name, schema: PasswordSchema },
    ]),
  ],
  controllers: [PasswordController],
  providers: [PasswordService],
})
export class PasswordModule {}
