$(document).ready(function (){
    console.log("hi")
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")


        localStorage.setItem(time, value)

    })

function updateHour(){
    var now = moment().hours();
    $("time-block").each(function() {
    var hourBlock = parseInt($(this).attr("id")[1])
    if(hourBlock < now) {
        $(this).addClass("past");
    } else if(hourBlock === now) {
        $(this).removeClass("past")
        $(this).addClass("present")
    } else{
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }
    })
}

updateHour()

    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
  

    $ ("#currentDay").text(moment().format("dddd, MMMM Do"))
})


