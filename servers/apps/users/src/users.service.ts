import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import { ActivationDTO, LoginDTO, RegisterDTO } from './dto/user.dto';
import { PrismaService } from '../../../prisma/Prisma.service';
import { Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { EmailService } from './email/email.service';
import { TokeSender } from './utils/sendToken';

interface IUserData {
  name: string;
  email: string;
  password: string;
  phone_number: number;
}

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
  ) {}

  // register user service
  async register(registerDto: RegisterDTO, response: Response) {
    const { name, email, password, phone_number } = registerDto;

    const isEmailExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExists) {
      throw new BadRequestException('User Already Exists With This Email.');
    }

    const isNumberExists = await this.prismaService.user.findUnique({
      where: {
        phone_number,
      },
    });

    if (isNumberExists) {
      throw new BadRequestException(
        'User Already Exists With This Phone Number.',
      );
    }

    const user = {
      name,
      email,
      password,
      phone_number,
    };

    const activation_token = await this.createActivationToken(user);
    const activationCode = activation_token.activationCode;

    await this.emailService.sendMail({
      email,
      subject: 'Active Your Account!.',
      name,
      template: './email',
      activationCode,
    });

    return { activation_token, response };
  }

  // login user service
  async login(loginDto: LoginDTO) {
    const { email, password } = loginDto;

    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (user && (await this.comparePassword(password, user.password))) {
      const tokeSender = new TokeSender(this.configService, this.jwtService);
      return tokeSender.sendToken(user);
    } else {
      return {
        user: null,
        refreshToken: null,
        accessToken: null,
        error: {
          message: 'Invalid email or password.',
        },
      };
    }
  }

  // compare password
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // create activation token
  async createActivationToken(user: IUserData) {
    const activationCode = Math.floor(1000 + Math.random() * 9999).toString();

    const token = this.jwtService.sign(
      {
        user,
        activationCode,
      },
      {
        secret: this.configService.get<string>('ACTIVATION_CODE'),
        expiresIn: '5m',
      },
    );

    return { token, activationCode };
  }

  // activation user
  async activateUser(activationDto: ActivationDTO, response: Response) {
    const { activationCode, activationToken } = activationDto;

    const newUser: { user: IUserData; activationCode: string } =
      this.jwtService.verify(activationToken, {
        secret: this.configService.get<string>('ACTIVATION_CODE'),
      } as JwtVerifyOptions) as { user: IUserData; activationCode: string };

    if (newUser.activationCode !== activationCode) {
      throw new BadRequestException('Invalid activation code!');
    }

    const { name, email, password, phone_number } = newUser.user;

    const exitsUser = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (exitsUser) {
      throw new BadRequestException('Email already exits!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone_number,
      },
    });

    return { user, response };
  }

  // get logged in user
  async getLoggedInUser(req: any) {
    const user = req.user;
    const accessToken = req.accesstoken;
    const refreshToken = req.refreshtoken;

    // console.log(user, accessToken, refreshToken, req);
    return { user, accessToken, refreshToken };
  }

  async logout(req: any) {
    req.user = null;
    req.accesstoken = null;
    req.refreshtoken = null;

    // console.log(user, accessToken, refreshToken, req);
    return { 
      message : "Logout successfully "
     };
  }

  // get all users service
  async getUsers() {
    return this.prismaService.user.findMany({});
  }
}
