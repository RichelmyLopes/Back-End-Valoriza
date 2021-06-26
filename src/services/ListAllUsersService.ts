import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories";


class ListAllUsersService {
  async execute(){
    const usersRepositories = getCustomRepository(UsersRepositories);

    const listAllUsers = await usersRepositories.find();

    return classToPlain(listAllUsers);
  }
}

export {ListAllUsersService}