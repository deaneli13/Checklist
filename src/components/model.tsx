export const enum Mission_Stat  {
    WAITING = 0,
    IN_PROGRESS= 1,
    FINISHED =2
}


export interface Todo{
    id:number;
    todo:string;
    isDone:number;
}
