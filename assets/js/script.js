function setDate() {
    document.getElementById("currentDay").textContent = moment(new Date()).format("DD/MM/YYYY");
};

setDate();

var allButtons = document.querySelectorAll("button[class^=saveBtn");
console.log("Found", allButtons.length, "buttons which class starts with 'saveBtn'.");

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(){
        var tasks = document.getElementById("addTask").value;
        localStorage.setItem("task", tasks);
        console.log(tasks);
        alert("task saved");
        console.log("task saved");
    }, false);
}

// document.getElementById("save").addEventListener("click", function(saveTasks) {
//     var tasks = document.getElementById("addTask").value;
//     localStorage.setItem("task",tasks);
//     console.log(tasks);
//     alert("task saved");
//     console.log("task saved");

    
// }, false);
var savedTasks = localStorage.getItem("task");

if (savedTasks) {
    document.getElementById("addTask").textContent = savedTasks;
}

console.log(savedTasks);

// document.getElementById("addTask").textContent = localStorage.getItem("task");

function colorChange() {
    var time = moment().hour();
    var scheduleTime = document.getElementById("hour").innerText;

    var num = parseInt(scheduleTime, 10);
    console.log(time);
    console.log(num);
    

    while (colorCode.length > 0) {
        var colorCode = document.querySelectorAll("div[class^=input-group]");
        console.log(colorCode);
        
        if (time === num) {
            colorCode.classList.add("present");
            // alert("it is 9pm!")
        }
        else if (time > num) {
            colorCode.classList.add("past");
            // alert("it is before 9pm!")
        }
        else {
            colorCode.classList.add("future");
            // alert("it is after 9pm!")
        }
    }
    console.log(colorCode.length);

};

colorChange();
