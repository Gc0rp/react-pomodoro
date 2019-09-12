export class Task { 
    title: string; 
    taskTime: number;
    breakTime: number;

    constructor(tt: string, tm: number, bm: number) {
        this.title = tt;
        this.taskTime = tm;
        this.breakTime = bm;
    };
}