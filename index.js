

var time = moment();

function getDescription() {

        // assigns the current date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

        // Gets the saved information entered in the textarea/description from local storage
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var description = localStorage.getItem(id);

        if (description !== null) {
            $(this).children(".description").val(description);
        }
    });
}

getDescription();

var saveBtn = $(".saveBtn");
  
// This step will save the information entered into a specific timeslot 
// text area to be saved to local storage when I click the save button
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
});

// This step based on the time of day will determine if the schedule task time
// is in the future, the present or in the past. 
function pastPresentFuture() {
    hour = time.hours();
    console.log(hour);
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));

        if (blockHour > hour) {
            $(this).addClass("future")
        }
        else if (blockHour === hour) {
            $(this).addClass("present");
            $(this).removeClass("future")
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("present")
            $(this).removeClass("future")

        }
    })
}

pastPresentFuture();