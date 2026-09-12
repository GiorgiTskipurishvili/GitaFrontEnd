import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class User {
    @Prop({type:String})
    FirstName!: string;

    @Prop({type:String})
    LastName!: string;

    @Prop({type:Number})
    Age!: number;

    @Prop({type:String})
    Address!: string;

    @Prop({type:String})
    Email!: string;

    @Prop({type:String})
    Password: string;
}
export const userSchema = SchemaFactory.createForClass(User);   