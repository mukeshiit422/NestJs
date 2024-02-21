import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService{
  private users :User[] =[
    {id:0,name:"Gudu"},
    {id:1,name:"RajaBabu"},
    {id:2,name:"Raja"},
  ];

  findUsers(name?:string):User[]{
    
    if(name){
      console.log("name>>",name)
      return this.users.filter((user)=>user.name===name)
    }
    return this.users;
  }
  findById(userId:Number):User{
      return this.users.find((user)=>user.id==userId)
  }
  createUser(body:CreateUserDto) : User{
    //const lastUser=this.users.back();
    //console.log("lastuser>>",lastUser);
    const newUser={id:1,...body};
    this.users.push(newUser);
    return newUser;
  }
};