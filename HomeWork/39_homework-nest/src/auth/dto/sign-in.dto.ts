import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SingInDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  Email!: string;

  @IsString()
  @Length(8, 20)
  @IsNotEmpty()
  Password!: string;
}
