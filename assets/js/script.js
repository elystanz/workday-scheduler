function setDate() {
    document.getElementById("currentDay").textContent = moment(new Date()).format("DD/MM/YYYY");
};

setDate();

document.getElementById("save").addEventListener("click", function() {
    var tasks = document.getElementById("addTask").value;
    localStorage.setItem("task",tasks);
    console.log(tasks);
    alert("task saved");
    console.log("task saved");
}, false);

document.getElementById("addTask").textContent = localStorage.getItem("task");

