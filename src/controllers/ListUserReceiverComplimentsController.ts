import {Request, Response } from "express";
import {ListUserReceiveComplimentsService} from '../services/ListUserReceiveComplimentsService'

class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const {user_id} = request;
    const listUserReceiveComplimentsService =  new ListUserReceiveComplimentsService();
    const result = await listUserReceiveComplimentsService.execute(user_id);

    return response.json(result);
  }
}

export {ListUserReceiverComplimentsController}