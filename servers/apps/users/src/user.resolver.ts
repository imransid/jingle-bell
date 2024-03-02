import { BadRequestException, UseFilters } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  ActivationResponse,
  LoginResponse,
  RegisterResponse,
} from './types/user.types';
import { ActivationDTO, RegisterDTO } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';

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

  @Mutation(() => ActivationResponse)
  async activateUser(
    @Args('activationInput') activationDTO: ActivationDTO,
    @Context() context: { res: Response },
  ) {
    return await this.userService.activateUser(activationDTO, context.res);
  }

  // @Query(() => [User])
  async getUsers() {
    return await this.userService.getUsers();
  }
}
