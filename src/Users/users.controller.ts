import { Body, Controller, Get, Post } from "@nestjs/common";
import { types } from "util";
import { User } from "src/DTO/User.model";
import { UserService } from "./users.service";

@Controller('/users')
export class UserController{
    constructor(private readonly userService:UserService){}
    
    @Get()
    getAllUsers():Array<User>{
        return this.userService.getAllUsers();
    }

    @Post()
    addUser(@Body('user')user:User):User{
        return this.userService.addUser(user);
    }
}