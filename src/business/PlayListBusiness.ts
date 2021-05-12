import { PlayListDatabase } from "../data/PlayListDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { PlayList, PlayListInputDTO} from "../model/PlayList";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";

export class PlayListBusiness {
    constructor(
        private playListDatabase: PlayListDatabase,
        private authenticator: Authenticator
    ) {}

    async createPlayList(input: PlayListInputDTO, token: string) {
        const tokenData = this.authenticator.getData(token)
        if (tokenData.role !== UserRole.ADMIN) {
            throw new UnauthorizedError("Only admins can access this feature")
        }

        if (!input.name ) {
            throw new InvalidInputError("Invalid input to playList")
        }

        await this.playListDatabase.createPlayList(
            PlayList.toPlayList({
                ...input,
                 })
        )
    }
}
