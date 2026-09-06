import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class User {
    @Prop()
    FirstName!: string;

    @Prop()
    LastName!: string;

    @Prop()
    Email!: string;

    @Prop()
    Age!: number;

    @Prop()
    Address!: string;
}

export const userSchema = SchemaFactory.createForClass(User);
