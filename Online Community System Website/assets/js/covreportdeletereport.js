$(document).on("click", "button.deletereportbutton", function (e) {
  e.preventDefault();
  var id = $(this).closest("tr").data("id");
  $(".modal-title #deleteModaltitle").text("Report #" + id);
  $(".modal-body #deleteModalbody").text(
    "Are you sure you want to delete Report #" + id + "?"
  );
  $("#deletereportModal").data("id", id).modal("show");
});

$(document).on("click", "#reportmodaldeleteButton", function () {
  var id = $("#deletereportModal").data("id");
  $("[data-id=" + id + "]").remove();
  $("#deletereportModal").modal("hide");
  callActivityRef(id);
});
