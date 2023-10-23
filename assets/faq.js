$(document).ready(function () {
  $(".at-title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".at-tab")
      .slideToggle()
      .parent()
      .siblings()
      .find(".at-tab")
      .slideUp()
      .prev()
      .removeClass("active");
  });
});

// the side tab function

function openTab(x) {
  $(".faq-head").each(function (i, obj) {
    obj.classList.remove("active");
  });

  if (x.id === "account-tab") {
    $("#account").show();
    x.classList.add("active");
    $("#care").hide();
    $("#customer").hide();
    $("#gift").hide();
    $("#order").hide();
    $("#payment").hide();
    $("#safty").hide();
    $("#shipping").hide();
  } else if (x.id === "care-tab") {
    $("#account").hide();
    x.classList.add("active");
    $("#care").show();
    $("#customer").hide();
    $("#gift").hide();
    $("#order").hide();
    $("#payment").hide();
    $("#safty").hide();
    $("#shipping").hide();
  } else if (x.id === "customer-tab") {
    x.classList.add("active");
    $("#account").hide();
    $("#care").hide();
    $("#customer").show();
    $("#gift").hide();
    $("#order").hide();
    $("#payment").hide();
    $("#safty").hide();
    $("#shipping").hide();
  } else if (x.id === "gift-tab") {
    x.classList.add("active");
    $("#account").hide();
    $("#care").hide();
    $("#customer").hide();
    $("#gift").show();
    $("#order").hide();
    $("#payment").hide();
    $("#safty").hide();
    $("#shipping").hide();
  } else if (x.id === "order-tab") {
    x.classList.add("active");
    $("#account").hide();
    $("#care").hide();
    $("#customer").hide();
    $("#gift").hide();
    $("#order").show();
    $("#payment").hide();
    $("#safty").hide();
    $("#shipping").hide();
  } else if (x.id === "payment-tab") {
    x.classList.add("active");
    $("#account").hide();
    $("#care").hide();
    $("#customer").hide();
    $("#gift").hide();
    $("#order").hide();
    $("#payment").show();
    $("#safty").hide();
    $("#shipping").hide();
  } else if (x.id === "safty-tab") {
    x.classList.add("active");
    $("#account").hide();
    $("#care").hide();
    $("#customer").hide();
    $("#gift").hide();
    $("#order").hide();
    $("#payment").hide();
    $("#safty").show();
    $("#shipping").hide();
  } else if (x.id === "shipping-tab") {
    x.classList.add("active");
    $("#account").hide();
    $("#care").hide();
    $("#customer").hide();
    $("#gift").hide();
    $("#order").hide();
    $("#payment").hide();
    $("#safty").hide();
    $("#shipping").show();
  }
}
