import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UsersModule} from '../users/users.module';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {PrismaModule} from '../prisma/prisma.module';
import {JwtStrategy} from './strategies/jwt.strategy';
import {JwtRefreshStrategy} from './strategies/jwt-refresh.strategy';
import {jwtConfig, jwtRefreshConfig} from '../config/jwt.config';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register(jwtConfig),
    JwtModule.register({
      ...jwtRefreshConfig,
      global: false,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService],
})

export class AuthModule {
}
