document
  .querySelector(".passwordSquare")
  .addEventListener("mouseover", function () {
    document.querySelector("#passwordInfo").innerText = `
    8=< Password Length <=20. 
    PASSWORD MUST HAVE AT LEAST:
        - one lowercase letter (a - z).
        - one uppercase letter (A - Z).
        - numeric value (0-9).
        - special symbol (!@#$%^&*=+-_)
    `;
  });

document
  .querySelector(".passwordSquare")
  .addEventListener("mouseout", function () {
    document.querySelector("#passwordInfo").innerText = "";
  });

var form = document
  .querySelector("#formHome")
  .addEventListener("submit", function submitHome(event) {
    event.preventDefault();
    var residentRadio = document.querySelector("#Resident").checked;
    var adminRadio = document.querySelector("#Admin").checked;

    if (residentRadio) {
      window.location.href = "resident/profile.html";
    } else {
      window.location.href = "admin/profileadmin.html";
    }
  });
