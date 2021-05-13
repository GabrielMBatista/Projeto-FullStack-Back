export class Musics {
  constructor(private idMusics: string, private title: string) {}

  getIdMusics() {
    return this.idMusics;
  }

  getTitle() {
    return this.title;
  }

  setIdMusics(idMusics: string) {
    this.idMusics = idMusics;
  }

  setTitle(title: string) {
    this.title = title;
  }

  public static toMusic(data?: any) {
    return data && new Musics
    (   data.idMusics,
        data.title
       );
  }
}

export interface MusicInputDTO {
  idMusics: string;
  title: string;
}

export interface MusicOutputDTO {
  idMusics: string;
  title: string;
}
