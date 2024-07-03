import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RefreshTokenGuard } from './auth/refresh-token.guard';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(RefreshTokenGuard)
    @Post('refresh')
    async refresh(@Request() req) {
        const user = req.user;
        return this.authService.refreshToken(user.refresh_token);
    }
}
