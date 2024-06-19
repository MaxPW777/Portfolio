import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/user/user.service';
import { IUserDocument } from '@/user/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByName(username);
        if (user && user.password === pass) {  // Directly access the properties
            const { password, ...result } = user.toObject();  // Convert to plain object and exclude password
            return result;
        }
        return null;
    }

    async login(user: IUserDocument) {
        const payload = { username: user.name, sub: user._id }; // Directly use user properties
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
