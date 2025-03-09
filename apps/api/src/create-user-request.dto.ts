import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}