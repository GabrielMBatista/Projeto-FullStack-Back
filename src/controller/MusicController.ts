import { Request, Response } from "express"
import { MusicBusiness } from "../business/MusicBusiness"
import { BaseDatabase } from "../data/BaseDatabase"
import { MusicDatabase } from "../data/MusicDatabase"
import { MusicInputDTO } from "../model/Music"
import { Authenticator } from "../services/Authenticator"


export class MusicController {
    async  createMusic(req: Request, res: Response) {
        try {
            const input: MusicInputDTO = {
                idMusics:req.body.idMusics,
                title:req.body.title

            }
            const musicBusiness = new MusicBusiness(
                new MusicDatabase,
                new Authenticator
            )

            await musicBusiness.createMusic(input, req.headers.authorization as string)
            res.sendStatus(200).send({
                message: 'Musica adicionada',
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