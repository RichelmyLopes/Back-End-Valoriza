import {ListTagsService} from '../services/ListTagsService'
import {Request, Response} from 'express'


class ListTagsController {
  async handle(request: Request, response : Response){
    const listTagsService = new ListTagsService();

    const listTagsResult = await listTagsService.execute();

    return response.json(listTagsResult);
  }
}

export {ListTagsController}