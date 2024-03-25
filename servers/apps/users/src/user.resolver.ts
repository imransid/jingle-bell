import { BadRequestException, UseFilters, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  ActivationResponse,
  ForgetResponse,
  LogOutResponse,
  LoginResponse,
  RegisterResponse,
} from './types/user.types';
import { ActivationDTO, RegisterDTO, ForgetPasswordDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';
import { AuthGuard } from './guards/auth.guards';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDTO,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please Fill in the fields.');
    }
    const { activation_token } = await this.userService.register(
      registerDto,
      context.res,
    );

    const activationTokenString = activation_token.token; // Extract token string
    return { activation_token: activationTokenString };
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<LoginResponse> {
    return await this.userService.login({
      email,
      password,
    });
  }

  // forget password
  @Mutation(() => ForgetResponse)
  async ForgetPassword(
    @Args('forgetPasswordDto') forgetPasswordDto: ForgetPasswordDto,
  ): Promise<ForgetResponse> {
    return await this.userService.forgetPassword(forgetPasswordDto);
  }

  @Mutation(() => ActivationResponse)
  async activateUser(
    @Args('activationInput') activationDTO: ActivationDTO,
    @Context() context: { res: Response },
  ) {
    return await this.userService.activateUser(activationDTO, context.res);
  }

  @Query(() => LoginResponse)
  @UseGuards(AuthGuard)
  async getLoggedInUser(@Context() context: { req: Request }) {
    return await this.userService.getLoggedInUser(context.req);
  }

  @Query(() => LogOutResponse)
  @UseGuards(AuthGuard)
  async logOutUser(@Context() context: { req: Request }) {
    return await this.userService.logout(context.req);
  }

  // @Query(() => [User])
  async getUsers() {
    return await this.userService.getUsers();
  }
}
