// function openPersonal() {
//   console.log("open personal");
// }

function openPersonal() {
  // Get the modal
  var modal = document.getElementById("contactModal");
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks anywhere outside of the modal, close it
  modal.style.display = "block";
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function closeModalContact() {
  var modal = document.getElementById("contactModal");
  modal.style.display = "none";
}

function onlyOne(checkbox) {
  var checkboxes = document.querySelectorAll("#check");
  checkboxes.forEach((item) => {
    if (item !== checkbox) {
      item.checked = false;
    } else {
      item.checked = true;
    }
  });
}

function openForm() {
  document.getElementById("stage2").style.display = "block";
  document.getElementById("stage1").style.display = "none";
}
