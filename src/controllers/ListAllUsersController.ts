import {Request, Response} from "express";
import {ListAllUsersService} from '../services/ListAllUsersService';

class ListAllUsersController {
  async handle(request: Request, response: Response){
    const listAllUsers = new ListAllUsersService();

    const result = await listAllUsers.execute();

    response.json(result);
  }
}

export {ListAllUsersController}