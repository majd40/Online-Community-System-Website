const form = document.getElementById("form");
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");

const city = document.getElementById("city");
const prov = document.getElementById("prov");
const post = document.getElementById("post");
const address = document.getElementById("address");
const Pphone = document.getElementById("Pphone");

const email = document.getElementById("email");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("Car");
const roomNum = document.getElementById("roomNum");
const guestNum = document.getElementById("guestNum");

const Submit = document.getElementById("Submit");

function fs() {
  swal({
    title: "Are you sure?",
    text: "If all your Data are filled in correctly! You may Proceed",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (
      Fname.value.length == 0 ||
      Lname.value.length == 0 ||
      city.value.length == 0 ||
      Pphone.value.length == 0 ||
      checkIn.value.length == 0 ||
      checkOut.value.length == 0 ||
      roomNum.value.length == 0
    ) {
      swal("submission Failed!", {
        icon: "error",
      });
    } else if (willDelete) {
      swal("THANK YOU! successfully submitted!!", {
        icon: "success",
      });
    } else {
    }
  });
}
