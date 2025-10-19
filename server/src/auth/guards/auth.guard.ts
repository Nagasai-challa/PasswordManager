import {
  Injectable,
  ExecutionContext,
  CanActivate,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Observable } from 'rxjs';
dotenv.config();

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('No Token Provided');
    }
    const token = authHeader.split(' ')[1];

    try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      request.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or Token Expired');
    }
  }
}
