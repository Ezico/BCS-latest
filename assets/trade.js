function openTrade() {
  // Get the modal
  var modal = document.getElementById("tradeModal");
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

function closeModalTrade() {
  document.getElementById("tradestage1").style.display = "block";
  document.getElementById("tradestage2").style.display = "none";
  document.getElementById("tradestage3").style.display = "none";
  document.getElementById("tradestage4").style.display = "none";
  $("input").each(function (index) {
    $(this).removeClass("input-error");
  });
  $("#hide-error").hide();
  var modal = document.getElementById("tradeModal");
  modal.style.display = "none";
}

function openTradeForm() {
  document.getElementById("tradestage2").style.display = "block";
  document.getElementById("tradestage1").style.display = "none";
}

function openTradeNext() {
  if (!$("#business-name").val()) {
    $("#business-name").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#business-name").removeClass("input-error");
  }

  if (!$("#vat").val()) {
    $("#vat").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#vat").removeClass("input-error");
  }

  if (!$("#business-type").val()) {
    $("#business-type").addClass("input-error");
    $("#hide-error").show();
  } else {
    $("#business-type").removeClass("input-error");
  }

  // if (!$("#maincontact").val()) {
  //   $("#maincontact").addClass("input-error");
  //   $("#hide-error").show();
  // } else {
  //   $("#maincontact").removeClass("input-error");
  // }

  // if (!$("#street").val()) {
  //   $("#street").addClass("input-error");
  //   $("#street").show();
  // } else {
  //   $("#street").removeClass("input-error");
  // }

  // if (!$("#city").val()) {
  //   $("#city").addClass("input-error");
  //   $("#hide-error").show();
  // } else {
  //   $("#city").removeClass("input-error");
  // }

  // if (!$("#state").val()) {
  //   $("#state").addClass("input-error");
  //   $("#hide-error").show();
  // } else {
  //   $("#state").removeClass("input-error");
  // }

  // if (!$("#email").val()) {
  //   $("#email").addClass("input-error");
  //   $("#hide-error").show();
  // } else {
  //   $("#email").removeClass("input-error");
  // }

  // if (!$("#zip").val()) {
  //   $("#zip").addClass("input-error");
  //   $("#hide-error").show();
  // } else {
  //   $("#zip").removeClass("input-error");
  // }

  if (
    !$("#business-name").val() ||
    !$("#vat").val() ||
    !$("#business-type").val()
  ) {
    $("#hide-error").show();
  } else {
    $("#hide-error").hide();
    document.getElementById("tradestage2").style.display = "none";
    document.getElementById("tradestage3").style.display = "block";
  }
}

function openTradeThird() {
  if (!$("#tstreet").val()) {
    $("#tstreet").addClass("input-error");
    $("#thide-error").show();
  } else {
    $("#tstreet").removeClass("input-error");
  }

  if (!$("#tvat").val()) {
    $("#tvat").addClass("input-error");
    $("#thide-error").show();
  } else {
    $("#tvat").removeClass("input-error");
  }

  if (!$("#tcity").val()) {
    $("#tcity").addClass("input-error");
    $("#thide-error").show();
  } else {
    $("#tcity").removeClass("input-error");
  }

  if (!$("#tstate").val()) {
    $("#tstate").addClass("input-error");
    $("#thide-error").show();
  } else {
    $("#tstate").removeClass("input-error");
  }

  if (!$("#tzip").val()) {
    $("#tzip").addClass("input-error");
    $("#thide-error").show();
  } else {
    $("#tzip").removeClass("input-error");
  }

  if (!$("#tphone").val()) {
    $("#tphone").addClass("input-error");
    $("#thide-error").show();
  } else {
    $("#tphone").removeClass("input-error");
  }

  if (!$("#temail").val()) {
    $("#temail").addClass("input-error");
    $("#thide-error").show();
  } else {
    $("#temail").removeClass("input-error");
  }

  if (
    !$("#tstreet").val() ||
    !$("#tcity").val() ||
    !$("#tstate").val() ||
    !$("#tphone").val() ||
    !$("#tzip").val() ||
    !$("#temail").val()
  ) {
    $("#thide-error").show();
  } else {
    $("#thide-error").hide();
    document.getElementById("tradestage2").style.display = "none";
    document.getElementById("tradestage3").style.display = "none";
    document.getElementById("tradestage4").style.display = "block";
  }
}
function open1() {
  document.getElementById("tradestage1").style.display = "block";
  document.getElementById("tradestage2").style.display = "none";
  document.getElementById("tradestage3").style.display = "none";
  document.getElementById("tradestage4").style.display = "none";
}

function open2() {
  document.getElementById("tradestage1").style.display = "none";
  document.getElementById("tradestage2").style.display = "block";
  document.getElementById("tradestage3").style.display = "none";
  document.getElementById("tradestage4").style.display = "none";
}
function open3() {
  document.getElementById("tradestage1").style.display = "none";
  document.getElementById("tradestage2").style.display = "none";
  document.getElementById("tradestage3").style.display = "block";
  document.getElementById("tradestage4").style.display = "none";
}
