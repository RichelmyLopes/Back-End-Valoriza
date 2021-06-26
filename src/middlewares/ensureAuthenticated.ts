import { Request, Response, NextFunction} from "express"
import {verify} from "jsonwebtoken";

interface IPayload {
  sub: string
}

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction){

  // Receber o token
  const authToken = request.headers.authorization  

  // Validar se token esta preenchido
  if(!authToken){
    return response.status(401).end();
  }

  const [,token] = authToken.split(" ");
  console.log(token);
  // Verificar se token é valido
  try {
    
    const {sub} = verify(token, "8ab8303ddd79432efd6ba5040da38a46") as IPayload;

    request.user_id = sub;
    
    return next();

  } catch (error) {
    return response.status(401).end();
  }

  // Recuperar informações do usuário
  

}