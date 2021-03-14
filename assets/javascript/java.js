//Show current date at top of page

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Display data stored in each timeblock
var previouslySaved = JSON.parse(localStorage.getItem("timeblocks"));

//Saves any changes made to local storage
$(".saveBtn").on("click", function() {
    var data = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

