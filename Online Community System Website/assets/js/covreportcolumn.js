fetch("../assets/js/covreportdetail.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].reportlistdetail.reportid);
    addRow(data);
  });

function addRow(data) {
  let tableRef = document.getElementById("reporttable");
  for (let item of data) {
    row = tableRef.insertRow(-1);
    row.dataset.id = item.reporteditdetail.modalid;
    for (let key in item.reportlistdetail) {
      var cell = row.insertCell(-1);
      if (key == "reportstatus") {
        if (item.reportlistdetail[key] == "rejected") {
          const reject =
            '<i class="fa-solid fa-circle fa-xs" id="delete"></i>Rejected';
          cell.innerHTML = reject;
        } else if (item.reportlistdetail[key] == "inprogress") {
          const inprogress =
            '<i class="fa-solid fa-circle fa-xs" id="inprogress"></i>In Progress';
          cell.innerHTML = inprogress;
        } else if (item.reportlistdetail[key] == "pending") {
          const pending =
            '<i class="fa-solid fa-circle fa-xs" id="pending"></i>Pending';
          cell.innerHTML = pending;
        } else if (item.reportlistdetail[key] == "completed") {
          const completed =
            '<i class="fa-solid fa-circle fa-xs" id="completed"></i>Completed';
          cell.innerHTML = completed;
        }
      } else cell.innerHTML = item.reportlistdetail[key];
    }
  }
}

function retrievecolumn() {
  fetch("../assets/js/covreportdetail.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].reportlistdetail.reportid);
      addRow(data);
    });
}

$(document).keypress("#searchreportid", function (event) {
  var keycode = event.keyCode || event.which;
  if (keycode == "13") {
    if ($("#searchreportid").val() == "") {
      $("tr").remove();
      retrievecolumn();
    } else {
      let reportidsearched = $("#searchreportid").val();
      $("tr:not([data-id=" + reportidsearched + "])").remove();
    }
  }
});
