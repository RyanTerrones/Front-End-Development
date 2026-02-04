interface myToDoInterface
{
    //declare functions
    myToDos: Array<string>;
    addTask(task : string) : number;
    listAllTasks() : void;
    deleteTask(task : string) : number;
}

class ToDo implements myToDoInterface
{
    constructor(){}

    myToDos: string[] = [];

    addTask(task: string): number {
        this.myToDos.push(task);
        console.log("Task: " + task + " has been added to my Tasks");
        return this.myToDos.length;
    }

    listAllTasks() : void
    {
        for(let i = 0; i < this.myToDos.length; i++)
        {
            console.log(this.myToDos[i] + " is in my Tasks list");
        }
    }

    deleteTask(task : string)
    {
        let index : number = this.myToDos.indexOf(task);

        if(index != -1)
        {
            this.myToDos.splice(index, 1);
            console.log(task + " was deleted from my Task list");   
        }
        else
        {
            console.log(this.myToDos + " was not found in my Task list");   
        }
        return this.myToDos.length;
    }
}

let myToDos = new ToDo();
myToDos.addTask("eat");
myToDos.addTask("drink");
myToDos.listAllTasks();
myToDos.deleteTask("eat");
myToDos.deleteTask("drink");
myToDos.listAllTasks();