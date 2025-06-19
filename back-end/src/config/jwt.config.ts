import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET || 'jwt-secret',
  signOptions: {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || '60m',
  },
};

export const jwtRefreshConfig: JwtModuleOptions = {
  secret: process.env.JWT_REFRESH_SECRET || 'secret-refresh-key',
  signOptions: {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN || '7d',
  },
}; 