import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/user.controller';
import { UserService } from './services/user.service';
import { UsersEntity } from './users.entity';
 

@Module({
  
  controllers: [UsersController],
  providers: [UserService]
})
export class UserModule {}
