//one way 
var myTasks = [];
//second way
var myTask2 = [];
function addTask(task) {
    myTasks.push(task);
    console.log("Task: " + task + " has been added to my Tasks");
    return myTasks.length;
}
//addTask("Work"); //checks to see if task works
function listAllTasks() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log(myTasks[i] + " is in my Tasks list");
    }
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index != -1) {
        myTasks.splice(index, 1);
        console.log(task + " deleted from my Task list");
    }
    else {
        console.log(task + " was not found in my Task list");
    }
    return myTasks.length;
}
addTask("work");
addTask("sleep");
listAllTasks();
deleteTask("work");
listAllTasks;
