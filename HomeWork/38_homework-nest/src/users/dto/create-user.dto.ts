import {IsEmail, IsInt, IsNotEmpty, IsString, Length, Max, Min} from "class-validator"

export class CreateUserDto {
    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    FirstName!: string
    
    @IsString()
    @Length(2,30)
    @IsNotEmpty()
    LastName!: string

    @IsInt()
    @Min(18)
    @Max(120)
    @IsNotEmpty()
    Age!: number
    
    @IsString()
    @Length(2,30)
    @IsNotEmpty()
    Address!: string
    
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
