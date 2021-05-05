import { connection } from "../index";

export default async function insertUser(
  id: string,
  name: string,
  nickname: string,
  email: string,
  password: string,
  role: string
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role:'Normal'
    }).into('User')
}

