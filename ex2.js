var ToDo = /** @class */ (function () {
    function ToDo() {
        this.myToDos = [];
    }
    ToDo.prototype.addTask = function (task) {
        this.myToDos.push(task);
        console.log("Task: " + task + " has been added to my Tasks");
        return this.myToDos.length;
    };
    ToDo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myToDos.length; i++) {
            console.log(this.myToDos[i] + " is in my Tasks list");
        }
    };
    ToDo.prototype.deleteTask = function (task) {
        var index = this.myToDos.indexOf(task);
        if (index != -1) {
            this.myToDos.splice(index, 1);
            console.log(task + " was deleted from my Task list");
        }
        else {
            console.log(this.myToDos + " was not found in my Task list");
        }
        return this.myToDos.length;
    };
    return ToDo;
}());
var myToDos = new ToDo();
myToDos.addTask("eat");
myToDos.addTask("drink");
myToDos.listAllTasks();
myToDos.deleteTask("eat");
myToDos.deleteTask("drink");
myToDos.listAllTasks();
