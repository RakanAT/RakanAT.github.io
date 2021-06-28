function checkCredit(creditInputID) {
  var a = document.getElementById(creditInputID).value;
  var filter = new RegExp(/^([0-9]{3}\s){3}[0-9]{4}$/);
  // return filter.test(a);
  console.log(filter.test(a));
  console.log(typeof a);

  return filter.test(a);
}

function checkPhone(phoneInputID){
    var a = document.getElementById(phoneInputID).value;
    var filter = new RegExp(/\([0-9]{3}\)\s([0-9]{3})\-([0-9]{4})/);
    return filter.test(a);
}
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date,VetSelectid) {
  // Sunday is Day 0, disable all Sundays
  
  var doctor = document.getElementById("doctor-select").value;
  if(doctor == "Dr. Ismail"){
    if (date.getDay() === 0) return [false];
  }else if(doctor == "Dr. Abdo"){
    if (date.getDay() === 1) return [false];
  }else if(doctor == "Dr. Rakan"){
    if (date.getDay() === 4) return [false];
  }
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [unavailableDates.indexOf(string) === -1];
}

$(document).ready(function () {
  $("#PetType-text-input").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    },
  });
  $("#Credit-text-input").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    },
  });
  $("#phone-text-input").on("change", function () {
    if (!checkPhone("phone-text-input")) {
      alert("Wrong format for phone number");
      $("#phone-text-input").val("(xxx) xxx-xxxx");
      $("#phone-text-input").addClass("error");
    } else {
      $("#phone-text-input").removeClass("error");
    }
  });
  $("#Credit-text-input").on("change", function () {
    if (!checkCredit("Credit-text-input")) {
      alert("Wrong format for credit card");
      $("#Credit-text-input").val("xxxx xxxx xxxx xxxx");
      $("#Credit-text-input").addClass("error");
    } else {
      $("#Credit-text-input").removeClass("error");
    }
  });
  $("#dateInput").datepicker({
    dateFormat: setDateFormat,
    // no calendar before June 1rst 2020
    minDate: new Date("06/01/2020"),
    maxDate: "+4M",
    // used to disable some dates
    // beforeShowDay: $.datepicker.noWeekends,
    beforeShowDay: disableDates
  });
  $("#btnSaveChange").click(function (e) {
    e.preventDefault();
    var name = $("#fullname-text-input").val();
  
    var date = $("#dateInput").val();
    var email = $("#email-text-input").val();
    var service = $("#service-select").val();
    var doctor = $("#doctor-select").val();
    alert(
        name +
        "(" +
        email +
        ")" +
        ". You're appointment of "
        service +
        " has been confirmed on the following date: " +
        date + 
        ". "+
        doctor + " will be awaiting your arival."
    );

    $("#AppointmentModal").modal("toggle");
  });
});