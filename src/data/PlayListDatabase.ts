import { PlayList } from "../model/PlayList";
import { BaseDatabase } from "./BaseDatabase";

export class PlayListDatabase extends BaseDatabase {

    public async createPlayList(PlayList: PlayList): Promise<void> {
        await this.getConnection()
            .insert({
                name: PlayList.getplayListName()
            })
            .into(this.tableNames.playList)
    }

}