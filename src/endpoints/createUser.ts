import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function login(
    req: Request, 
    res: Response
    ){
    try {
    if (
        !req.body.name ||
        !req.body.nickname ||
        !req.body.email ||
        !req.body.password
        ) {
      res.status(400).send("Todos os campos são obrigatórios");
    }
    const id: string = Date.now() + Math.random().toString()

    await insertUser(
        id,
        req.body.name,
        req.body.nickname,
        req.body.email,
        req.body.password,
        req.body.role
        
    )    
    res.status(200).send("Sucesso!");

  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
