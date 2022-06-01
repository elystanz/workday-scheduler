function setDate() {
    document.getElementById("currentDay").textContent = moment(new Date()).format("DD/MM/YYYY");
    document.getElementById("currentHour").textContent = moment().format("h:mm a");
};

setDate();

$(document).ready(function () {
    $('.saveBtn').click(function (event) {
        event.preventDefault();

        // can't seem to get this to save individual tasks
        var tasks = $('#addTask').val();
        var time = $(this).parent().attr('id');
    
        localStorage.setItem(time, tasks);
    
        console.log('task "' + tasks + '" has been saved!');
    });
});


function colorChange() {
    // use date to get local times
    const currentHour = moment().hour();
    
    //use jQuery to loop timeblocks
    $('.timeblock').each(function () {
        const thisTime = parseInt($(this).attr('id').split('hour')[1]);
        console.log(thisTime);

        if (thisTime < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else if (thisTime === currentHour) {
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
        } else {
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
        }
    });
    
    

};

colorChange();

$('#hour9 .newTask').val(localStorage.getItem('hour9'));
$('#hour10 .newTask').val(localStorage.getItem('hour10'));
$('#hour11 .newTask').val(localStorage.getItem('hour11'));
$('#hour12 .newTask').val(localStorage.getItem('hour12'));
$('#hour13 .newTask').val(localStorage.getItem('hour13'));
$('#hour14 .newTask').val(localStorage.getItem('hour14'));
$('#hour15 .newTask').val(localStorage.getItem('hour15'));
$('#hour16 .newTask').val(localStorage.getItem('hour16'));
$('#hour17 .newTask').val(localStorage.getItem('hour17'));