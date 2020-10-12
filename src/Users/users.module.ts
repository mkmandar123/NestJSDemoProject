import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";

@Module({
    imports:[],
    providers:[UserService],
    controllers:[UserController]
})
export class UserModule{}