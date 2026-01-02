import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { AuthResponse } from './models/auth-response';
import { SignInInput, SignupInput } from './dto';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async signUp(@Args('signUpInput') input: SignupInput) {
    return this.authService.signup(input);
  }

  @Mutation(() => AuthResponse)
  async signIn(@Args('signInInput') input: SignInInput) {
    return this.authService.signin(input);
  }

  @Query(() => String)
  hello() {
    return 'Hello World';
  }
}
