$(document).on("click", "button.editreportbutton", function (e) {
  e.preventDefault();
  var id = $(this).closest("tr").data("id");
  $(".modal-title #editModaltitle").text("Report #" + id);
  fetch("../assets/js/covreportdetail.json")
    .then((response) => response.json())
    .then((data) => {
      for (let item of data) {
        if (item.reporteditdetail.modalid == id) {
          $("#residentname").text(item.reporteditdetail.residentname);
          if (item.reporteditdetail.reportvalidation) {
            $("#reportvalidation").prop("checked", true);
          } else {
            $("#reportvalidation").prop("checked", false);
          }
          $("#roomnumber").text(item.reporteditdetail.roomnumber);
          $("#contactnumber").text(item.reporteditdetail.contactnumber);
          $("#reportdesc").text(item.reporteditdetail.reportdesc);
          lastexec(item);
        }
      }
    });
  $("#editreportModal").data("id", id).modal("show");
});

function lastexec(item) {
  if (item.reporteditdetail.lastexec == "default") {
    $("#defaultactivity").prop("checked", true);
  } else if (item.reporteditdetail.lastexec == "roominspection") {
    $("#roominspectioncheck").prop("checked", true);
  } else if (item.reporteditdetail.lastexec == "calltheresident") {
    $("#callresidentactivitycheck").prop("checked", true);
  } else if (item.reporteditdetail.lastexec == "notifyuser") {
    $("#notifyuser").prop("checked", true);
  }
}

$(document).on("click", ".editreportbutton", function (e) {
  e.preventDefault();
  $("#rejectreport").prop("checked", false);
  $("#completereport").prop("checked", false);
  $("#reportvalidation").prop("checked", false);
  $("#rejectreport").prop("disabled", true);
  $("#completereport").prop("disabled", true);
  $("#reportvalidation").prop("disabled", true);
  $("#defaultactivity").prop("disabled", true);
  $("#notifyuser").prop("disabled", true);
  $("#callresidentactivitycheck").prop("disabled", true);
  $("#roominspectioncheck").prop("disabled", true);
  $("#reportnote").prop("disabled", true);
});

$(document).on("change", "#reportvalidation", function (e) {
  e.preventDefault();
  if ($(this).is(":checked")) {
    $("#rejectreport").prop("disabled", true);
    $("#rejectreport").prop("checked", false);
    $("#completereport").prop("disabled", false);
  } else {
    $("#rejectreport").prop("disabled", false);
    $("#completereport").prop("disabled", true);
    $("#completereport").prop("checked", false);
  }
});

$(document).on("change", "#rejectreport", function (e) {
  e.preventDefault();
  if ($(this).is(":checked")) {
    $("#reportvalidation").prop("disabled", true);
    $("#completereport").prop("disabled", true);
  } else {
    $("#reportvalidation").prop("disabled", false);
    $("#completereport").prop("disabled", true);
  }
});

$(document).on("click", "#editbtn", function (e) {
  e.preventDefault();
  $("#reportvalidation").prop("disabled", false);
  $("#defaultactivity").prop("disabled", false);
  $("#notifyuser").prop("disabled", false);
  $("#callresidentactivitycheck").prop("disabled", false);
  $("#roominspectioncheck").prop("disabled", false);
  $("#reportnote").prop("disabled", false);
  if ($("#reportvalidation").is(":checked")) {
    $("#rejectreport").prop("disabled", true);
    $("#completereport").prop("disabled", false);
  } else {
    $("#rejectreport").prop("disabled", false);
    $("#completereport").prop("disabled", true);
  }
});
