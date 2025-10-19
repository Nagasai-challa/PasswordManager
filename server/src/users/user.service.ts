import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(data: any) {
    
    const createdUser = new this.userModel(data);
    await createdUser.save();
    return createdUser;
  }

  async getSingleUser(data: any) {
    return await this.userModel.findOne({ email: data.email });
  }
}
