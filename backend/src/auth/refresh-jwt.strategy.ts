import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { jwtConstants } from '@/auth/constants';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
  public constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.refreshSecret,
      passReqToCallback: true,
    });
  }

  public async validate(req: any, payload: any) {
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    const user = await this.authService.validateRefreshToken(payload.sub, refreshToken);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
