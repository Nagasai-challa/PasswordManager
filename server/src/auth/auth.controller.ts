import { Controller } from "@nestjs/common";
import { Body,Post } from "@nestjs/common";
import { UserService } from "src/users/user.service";
import * as dotenv from "dotenv"
import * as jwt from "jsonwebtoken"

dotenv.config();

@Controller("auth")
export class AuthController{
    constructor(private userService: UserService){}

    @Post("register")
    async register(@Body() body:any){
        await this.userService.createUser(body);
        return {
            success: true,
            message: "Registration Successfull"
        }
    }

    @Post("login")
    async login(@Body() body:any){
        const user=await this.userService.getSingleUser(body)
        if(!user){
            return{
                success: false,
                message: "Invalid Credentials"
            }
        }
        const payload = {id: user._id, username: user.userName, email: user.email}
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" })
        return{
            success: true,
            token
        }
    }
}