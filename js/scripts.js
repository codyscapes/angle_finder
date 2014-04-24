var add_zero = function(number) {
  var result = number

  if (number < 10) {
    result = '0' + number
  }

  return result.toString()
}

var formatted_time = function() {
  var currentTime = new Date ();

  var currentHours = add_zero(currentTime.getHours ( ));
  var currentMinutes = add_zero(currentTime.getMinutes ( ));
  var currentSeconds = add_zero(currentTime.getSeconds ( ));

  return currentHours.toString() + currentMinutes.toString() + currentSeconds.toString()
}

var minute_angler = function(time) {
  var hour = time.slice(0,2)
  var minute = time.slice(2,4)

  var minute_degrees = (minute * 6)
  var hour_degrees = (hour * 30) + ((1/60 * minute)*30)

  if (Math.abs(hour_degrees - minute_degrees) > 180) {
    return Math.abs(360 - Math.abs(hour_degrees - minute_degrees))
  } else {
    return Math.abs(hour_degrees - minute_degrees)
  }
}

var second_angler = function(time) {
  var minute = time.slice(2,4)
  var second = time.slice(4,6)

  var minute_degrees = (minute * 6)
  var second_degrees = (second * 6)

  if (Math.abs(minute_degrees - second_degrees) > 180) {
    return Math.abs(360 - Math.abs(minute_degrees - second_degrees))
  } else {
    return Math.abs(minute_degrees - second_degrees)
  }
}



$(document).ready(function() {

  var currentTime = new Date ( );

  var currentHours = add_zero(currentTime.getHours ( ));
  var currentMinutes = add_zero(currentTime.getMinutes ( ));
  var currentSeconds = add_zero(currentTime.getSeconds ( ));

  $('#time').append('<p> The current time is ' + currentHours + ":" + currentMinutes + ":" + currentSeconds + '</p>')
  $('#time').append('<p> The angle between the hour hand and the minute hand is ' + minute_angler(formatted_time()) + ' degrees' + '</p>')
  $('#time').append('<p> The angle between the minute hand and the second hand is ' + second_angler(formatted_time()) + ' degrees' + '</p>')

// This was taken from stack overflow
  $(".user_input").keydown(function (e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode == 65 && e.ctrlKey === true) ||
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
  });

  $('#user_submit').click(function(){
    var user_hour = add_zero($('#user_hour').val())
    var user_minute = add_zero($('#user_minute').val())
    var user_second = add_zero($('#user_second').val())

    input = user_hour.toString() + user_minute.toString() + user_second.toString()

    $('.user_angle').html('')
    $('.user_angle').append('<p> The angle between the hour hand and the minute hand is ' + (minute_angler(input)) + ' degrees' + '</p>')
    $('.user_angle').append('<p> The angle between the minute hand and the second hand is ' + (second_angler(input)) + ' degrees' + '</p>')
  });
});
