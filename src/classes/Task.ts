export class Task { 
    title: string; 
    taskTime: number;
    breakTime: number;
    taskCompleted: boolean;
    type: string;    

    constructor(tt: string, tm: number, bm: number, tc:boolean) {
        this.title = tt;
        this.taskTime = tm;
        this.breakTime = bm;
        this.taskCompleted = tc;
        this.type = "Task";
    };
}