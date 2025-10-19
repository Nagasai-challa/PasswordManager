import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Password } from "./password.entity";
import { Model } from "mongoose";

@Injectable()
export class PasswordService{
    constructor(@InjectModel(Password.name) private passwordModel:Model<Password>){}

    async createPassword(body: any){
        const createdPassword = new this.passwordModel(body);
        await createdPassword.save();
        return createdPassword
    }

    async getAllPasswords(){
        const allPasswords = await this.passwordModel.find();
        return allPasswords;
    }

    async getSinglePassword(data: any){
        const password = await this.passwordModel.findOne({website : data.website})
        return password;
    }

    async deletePassword(data: any){
        const password = await this.passwordModel.findOne({website: data.website})
        if(!password) return "Invalid website Name"
        await this.passwordModel.findByIdAndDelete({_id : password._id})
        return "Password Deleted Successfully"
    }

    async editPassword(data: any){
        const password = await this.passwordModel.findOne({website: data.website})
        if(!password) return "Invalid website Name"
        await this.passwordModel.findByIdAndUpdate({_id: password._id},{
            website : data.website,
            userName: data.userName,
            password: data.password
        })
        return "Password Updated Successfully"
    }
}