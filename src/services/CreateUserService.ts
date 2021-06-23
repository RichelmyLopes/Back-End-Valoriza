import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {hash} from "bcryptjs";
interface IUserRequest {
  name: string,
  email: string,
  admin?: boolean,
  password: string
}

class CreateUserService {
  async execute({name, email, admin, password} : IUserRequest){
    const usersRepositories = getCustomRepository(UsersRepositories);

    const passwordHash = await hash(password, 8);

    if(!email){
      throw new Error("Email incorrect!")
    }

    const userAlreadyExiste = await usersRepositories.findOne({email});

    if(userAlreadyExiste){
      throw new Error("User already exists!");
    }

    const user = usersRepositories.create({name, email, admin, password: passwordHash})
    
    await usersRepositories.save(user)
    
    return user;
  }
}

export {CreateUserService};