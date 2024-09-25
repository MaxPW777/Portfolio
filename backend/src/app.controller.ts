import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RefreshTokenGuard } from './auth/refresh-token.guard';
import { AppService } from '@/app.service';

@Controller()
export class AppController {
  public constructor(
    private authService: AuthService,
    private appService: AppService,
  ) {}

  @Get('home')
  public getPostsProjects() {
    return this.appService.getPostsProjects();
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  public async refresh(@Request() req) {
    const user = req.user;
    return this.authService.refreshToken(user.refresh_token);
  }
}
