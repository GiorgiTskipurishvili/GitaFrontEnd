import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { User } from './schema/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({summary:"ყველა მომხმარებელი"})
  @ApiOkResponse({type:[User]})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({summary:"მომხმარებელი ID-ს მიხედვით"})
  @ApiParam({name:"id",description:"MongoDB ObjectId"})
  @ApiOkResponse({type:User})
  @ApiBadRequestResponse({description:"არასწორი ID ან მომხმარებელი არ მოიძებნა"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({summary:"მომხმარებლის განახლება"})
  @ApiParam({name:"id",description:"MongoDB ObjectId"})
  @ApiOkResponse({type:User})
  @ApiBadRequestResponse({description:"არასწორი ID ან მომხმარებელი არ მოიძებნა"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({summary:"მომხმარებლის წაშლა"})
  @ApiParam({name:"id",description:"MongoDB ObjectId"})
  @ApiOkResponse({type:User})
  @ApiBadRequestResponse({description:"არასწორი ID ან მომხმარებელი არ მოიძებნა"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
