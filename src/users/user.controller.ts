import { Body, Controller, Get, NotAcceptableException, NotFoundException, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { NotFoundError } from "rxjs";
@ApiTags("Users")
@Controller('user')
export class UserController{
  constructor(private usersService: UserService){};

  @ApiOkResponse({type:User,isArray:true,description:"This is to get the total number of users",status:"default"})
  @ApiQuery({name:'name', required:false})
  @ApiNotFoundResponse()
  @Get()
  getUsers(@Query('name') name?:string):User[]{
    const users= this.usersService.findUsers(name);
    if(!users)
    throw new NotFoundException();
    return users;
  }

  @ApiOkResponse({type:User})
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id',ParseIntPipe) id:Number):User{
    const user=this.usersService.findById(id);
    if(!user)
    throw new NotFoundException();
    return user;
  }

  @ApiCreatedResponse({type:User})
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body:CreateUserDto):User{
     return  this.usersService.createUser(body)
  }
  

};