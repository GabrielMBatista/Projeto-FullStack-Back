export class PlayList {
    constructor(
          private name: string
 
    ) {}


    public getplayListName(): string {
        return this.name
    }
    public setplayListName(name: string) {
        this.name = name
    }
    
    public static toPlayList(data?: any) {
        return (data && new PlayList(
             data.name
        ))
    }
}


export interface PlayListInputDTO {
    name: string

}

export interface PlayListOutputDTO {
    name: string
}