
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-13");
var hour2 = $("#hour-14");
var hour3 = $("#hour-15");
var hour4 = $("#hour-16");
var hour5 = $("#hour-17");
var time = moment();

function getDescription() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

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

saveBtn.on("click", function () {
    var timeSlot = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(timeSlot, description);
});

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));

        if (blockHour > hour) {
            $(this).addClass("future")
        }
        else if (blockHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();