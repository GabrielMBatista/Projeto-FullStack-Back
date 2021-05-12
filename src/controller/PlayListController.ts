import { Request, Response } from "express"
import { PlayListBusiness } from "../business/PlayListBusiness"
import { BaseDatabase } from "../data/BaseDatabase"
import { PlayListDatabase } from "../data/PlayListDatabase"
import { PlayListInputDTO } from "../model/PlayList"
import { Authenticator } from "../services/Authenticator"


export class PlayListController {
    async  createPlayList(req: Request, res: Response) {
        try {
            const input: PlayListInputDTO = {
                name:req.body.name

            }
            const playListBusiness = new PlayListBusiness(
                new PlayListDatabase,
                new Authenticator
            )

            await playListBusiness.createPlayList(input, req.headers.authorization as string)
            res.sendStatus(200).send({
                message: 'Playlist Criada',
            })
        } catch (err) {
            res.status(err.customErrorCode || 400).send({
                message: err.message,
            })
        } finally {
            await BaseDatabase.destroyConnection()
        }
    }

}