$(document).ready(function () {
    // display current day at the top of the calendar
    var currentDay = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(currentDay);
  
    // color-code time blocks based on current hour
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    // load saved events from local storage
    $(".description").each(function () {
      var id = $(this).parent().attr("id");
      var event = localStorage.getItem(id);
      if (event !== null) {
        $(this).text(event);
      }
    });
  
    // save events to local storage on button click
    $(".saveBtn").on("click", function () {
      var id = $(this).parent().attr("id");
      var event = $(this).siblings(".description").val();
      localStorage.setItem(id, event);
    });
  });
  