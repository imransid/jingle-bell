import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class RegisterDTO {
  @Field()
  @IsNotEmpty({ message: 'Name is Required' })
  @IsString({ message: 'Name Must need to string' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Password is Required' })
  @MinLength(4, { message: 'Password must be at least 4 character ' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Email is Required' })
  @IsEmail({}, { message: 'Email is Invalid' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Phone Number is Required' })
  phone_number: number;
}

@InputType()
export class LoginDTO {
  @Field()
  @IsNotEmpty({ message: 'Email is Required' })
  @IsEmail({}, { message: 'Email is Invalid' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is Required' })
  @MinLength(4, { message: 'Password must be at least 4 character ' })
  password: string;
}

@InputType()
export class ActivationDTO {
  @Field()
  @IsNotEmpty({ message: 'Activation Token is Required' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: 'Activation Code is Required' })
  activationCode: string;
}


