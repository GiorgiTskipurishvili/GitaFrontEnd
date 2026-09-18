import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator"

export class SignInDto{
    @IsString()
    @Length(2,50)
    @IsEmail()
    @IsNotEmpty()
    Email!: string
    
    @IsString()
    @Length(8,20)
    @IsNotEmpty()
    Password!: string
}