import { Injectable } from "@nestjs/common";
import { User } from "src/DTO/User.model";

@Injectable()
export class UserService{
    private usersArray:Array<User>;

    getAllUsers() {
        return this.usersArray;
    }

    addUser(user:User):User{
        this.usersArray.push(user);
        return user;
    }

}