import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Password{
    @Prop({required: true, unique: true})
    website: string
    
    @Prop({required: true})
    userName: string

    @Prop({required: true})
    password: string
}

export const PasswordSchema = SchemaFactory.createForClass(Password)