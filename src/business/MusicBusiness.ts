import { MusicDatabase } from "../data/MusicDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Musics, MusicInputDTO} from "../model/Music";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";

export class MusicBusiness {
    constructor(
        private musicDatabase: MusicDatabase,
        private authenticator: Authenticator
    ) {}

    async createMusic(input: MusicInputDTO, token: string) {
        const tokenData = this.authenticator.getData(token)
        if (tokenData.role !== UserRole.ADMIN) {
            throw new UnauthorizedError("Only admins can access this feature")
        }

        if (!input.title ) {
            throw new InvalidInputError("Invalid input to Music")
        }

        await this.musicDatabase.createMusic(
            Musics.toMusic({
                ...input,
                 })
        )
    }
}
