import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '@/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { RefreshJwtStrategy } from './refresh-jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '15m' }, // Adjust the expiration time as needed
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RefreshJwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
