export enum Activity{
    Education = "education",
    Recreational = "recreational",
    Social = "social",
    Diy = "diy",
    Charity = "charity",
    Cooking = "cooking",
    Relaxation = "relaxation",
    Music = "music",
    Busywork = "busywork"
}


// view  model
export interface ApiView{
    activity : string,
    website: string,
    participants: number;
    type: string
}

// baqend model
export interface ApiBackEnd{
    activity: string
    accessibility: number
    link: string
    participants: number
    type: string
}
