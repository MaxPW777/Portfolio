import {Module} from "@nestjs/common";
import {UserController} from "@/user/user.controller";
import {UserService} from "@/user/user.service";
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "@/user/schemas/user.schema";

@Module({
    imports : [MongooseModule.forFeature([{name : 'Users', schema : UserSchema}])],
    controllers : [UserController],
    providers : [UserService],
    exports : [UserService]
})
export class UserModule {}
