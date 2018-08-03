export class Todo {
    id: number; // number, unique ID of todo item
    title: string = ''; // string, title of todo item
    complete: boolean = false; // boolean, whether it is complete

    constructor(values: Object ={}){
        Object.assign(this, values);
    }
}
