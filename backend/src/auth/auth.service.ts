import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/user/user.service';
import { IUserDocument } from '@/user/interfaces/user.interface';
import { jwtConstants } from '@/auth/constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByName(username);
        if (user && user.password === pass) {
            const { password, ...result } = user.toObject();  // Convert to plain object and exclude password
            return result;
        }
        return null;
    }

    async login(user: IUserDocument) {
        const payload = { username: user.name, sub: user._id };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
        const refreshToken = this.jwtService.sign(payload, {
            secret: jwtConstants.refreshSecret, // Use a different secret for refresh tokens
            expiresIn: '7d'
        });

        // Store the refresh token in the database for invalidation
        await this.usersService.updateRefreshToken(user._id as string, refreshToken);

        return {
            access_token: accessToken,
            refresh_token: refreshToken
        };
    }

    async refreshToken(refreshToken: string) {
        try {
            const payload = this.jwtService.verify(refreshToken, { secret: jwtConstants.refreshSecret });
            const user = await this.usersService.findById(payload.sub);
            if (!user) {
                throw new UnauthorizedException();
            }

            const newPayload = { username: user.name, sub: user._id };
            const accessToken = this.jwtService.sign(newPayload, { expiresIn: '15m' });
            return { access_token: accessToken };
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

    async validateRefreshToken(userId: string, refreshToken: string) {
        const user = await this.usersService.findById(userId);
        if (!user || user.refresh_token !== refreshToken) {
            return null;
        }
        return user;
    }
}
