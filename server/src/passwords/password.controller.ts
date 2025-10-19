import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { PasswordService } from "./password.service";

@Controller("password")
export class PasswordController{
    constructor(private passwordService:PasswordService){}

    @Post("add")
    async addPassword(@Body() body:any){
        await this.passwordService.createPassword(body);
        return{
            success: true,
            message: "Password Created Successfully"
        }
    }

    @Get("getAllPasswords")
    async getAllPasswords(){
        return await this.passwordService.getAllPasswords()
    }

    @Post("getPassword")
    async getPassword(@Body() body: any){
        const password = await this.passwordService.getSinglePassword(body);
        if(!password){
            return "Invalid Website name"
        }
        return password
    }

    @Delete()
    async deletePassword(@Body() body:any){
        return await this.passwordService.deletePassword(body)
    }

    @Patch()
    async editPassword(@Body() body:any){
        return await this.passwordService.editPassword(body)
    }
}