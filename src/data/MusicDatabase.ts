import { Musics } from "../model/Music";
import { BaseDatabase } from "./BaseDatabase";

export class MusicDatabase extends BaseDatabase {

    public async createMusic(Music: Musics): Promise<void> {
        await this.getConnection()
            .insert({
                idMusics: Music.getIdMusics(),
                title: Music.getTitle()
            })
            .into(this.tableNames.musics)
    }

}