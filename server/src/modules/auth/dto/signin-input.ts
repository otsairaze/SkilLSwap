import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignInInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  login: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;
}
