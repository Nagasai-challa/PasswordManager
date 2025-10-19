import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('add')
  async adduser(@Body() body: any) {
    const createdUser = await this.userService.createUser(body);
    return {
      success: true,
      message: 'User Created Successfully',
      data: createdUser,
    };
  }

  @Post('getUser')
  async getUser(@Body() body: any) {
    return this.userService.getSingleUser(body);
  }
}
