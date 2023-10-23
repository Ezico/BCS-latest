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
      document.getElementById("stage1").style.display = "block";
      document.getElementById("stage2").style.display = "none";
      document.getElementById("stage3").style.display = "none";
    }
  };
}

function closeModalContact() {
  document.getElementById("stage1").style.display = "block";
  document.getElementById("stage2").style.display = "none";
  document.getElementById("stage3").style.display = "none";
  $("input").each(function (index) {
    $(this).removeClass("input-error");
  });
  $("#hide-error").hide();
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

function openNext() {
  if (!$("#first-name").val()) {
    $("#first-name").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#first-name").removeClass("input-error");
  }

  if (!$("#last-name").val()) {
    $("#last-name").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#last-name").removeClass("input-error");
  }

  if (!$("#phone").val()) {
    $("#phone").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#phone").removeClass("input-error");
  }

  if (!$("#maincontact").val()) {
    $("#maincontact").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#maincontact").removeClass("input-error");
  }

  if (!$("#street").val()) {
    $("#street").addClass("input-error");
    $("#street").show();
  } else {
    $("#street").removeClass("input-error");
  }

  if (!$("#city").val()) {
    $("#city").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#city").removeClass("input-error");
  }

  if (!$("#state").val()) {
    $("#state").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#state").removeClass("input-error");
  }

  if (!$("#email").val()) {
    $("#email").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#email").removeClass("input-error");
  }

  if (!$("#zip").val()) {
    $("#zip").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#zip").removeClass("input-error");
  }

  if (
    !$("#zip").val() ||
    !$("#state").val() ||
    !$("#street").val() ||
    !$("#maincontact").val() ||
    !$("#phone").val() ||
    !$("#last-name").val() ||
    !$("#first-name").val() ||
    !$("#email").val()
  ) {
    $("#hide-error").show();
  } else {
    $("#hide-error").hide();
    document.getElementById("stage2").style.display = "none";
    document.getElementById("stage3").style.display = "block";
  }
}

function openStg1() {
  document.getElementById("stage1").style.display = "block";
  document.getElementById("stage2").style.display = "none";
}

function openStg2() {
  document.getElementById("stage1").style.display = "none";
  document.getElementById("stage2").style.display = "block";
  document.getElementById("stage3").style.display = "none";
}
