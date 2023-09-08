// shopify add to cart
function bts_add_to_cart(title, id, img, val, desc) {
  // console.log(this);
  let formData = {
    items: [
      {
        id: title.replace("pro-", ""),
        quantity: 1,
      },
    ],
  };

  document.getElementById(title).classList.remove("hide");
  document.getElementById(title).classList.add("product_add_tocartreset");

  // document.querySelector("." + title).style.opacity = 1;
  // document.querySelector("." + title).style.zIndex = 1;

  // openModalCart(title, id, img, val, desc);
  fetch(`${routes.cart_add_url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      document.getElementById(title).classList.add("hide");
      document
        .getElementById(title)
        .classList.remove("product_add_tocartreset");
      openModalCart(title, id, img, val, desc);
      updateCart();
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.updateCart = function () {
  fetch("/?view=cart")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementById("miniCart").innerHTML = html;
      const newCount = document.getElementById("miniCount").innerText;
      document.getElementById("headerCount").innerText = newCount;
    });
};

updateCart();
// function to open modal
function openModalCart(title, id, val, img, desc) {
  // console.log(title, id, img, val, desc);
  //update modal data
  document.getElementById("cartModalImg").src = val;
  document.getElementById("cartModalTitle").innerText = img;
  document.getElementById("cartModaldesc").innerHTML = desc;
  // Get the modal
  var modal = document.getElementById("cartmyModal");
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

function closeModalCart() {
  var modal = document.getElementById("cartmyModal");
  // When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}

// product page add to cat popup
window.openModal = function () {
  // console.log(title, id, img, val, desc);
  // Get the modal
  var modal = document.getElementById("cartmyModal");
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
};

window.closeModal = function () {
  var modal = document.getElementById("cartmyModal");
  // When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
};

function openOrders(e) {
  const updateUI = document.getElementById("update");
  const orderUI = document.getElementById("orders");
  const addAddresUI = document.getElementById("add_address");
  const addressUI = document.getElementById("address");
  const profile = document.getElementById("profileClick");
  const address = document.getElementById("addressClick");

  orderUI.style.display = "block";
  e.classList.add("active-bg");
  updateUI.style.display = "none";
  addressUI.style.display = "none";
  addAddresUI.style.display = "none";
  profile.classList.remove("active-bg");
  address.classList.remove("active-bg");
  // console.log(e.classList);
}

function openProfile(e) {
  const updateUI = document.getElementById("update");
  const orderUI = document.getElementById("orders");
  const addAddresUI = document.getElementById("add_address");
  const addressUI = document.getElementById("address");
  const order = document.getElementById("ordersClick");
  const address = document.getElementById("addressClick");
  updateUI.style.display = "block";
  addressUI.style.display = "none";
  addAddresUI.style.display = "none";
  e.classList.add("active-bg");
  orderUI.style.display = "none";
  order.classList.remove("active-bg");
  address.classList.remove("active-bg");
}

function openAddress(e) {
  const updateUI = document.getElementById("update");
  const addressUI = document.getElementById("address");
  const orderUI = document.getElementById("orders");
  const addAddresUI = document.getElementById("add_address");
  const order = document.getElementById("ordersClick");
  const profile = document.getElementById("profileClick");
  addressUI.style.display = "block";
  e.classList.add("active-bg");
  orderUI.style.display = "none";
  updateUI.style.display = "none";
  addAddresUI.style.display = "none";
  order.classList.remove("active-bg");
  profile.classList.remove("active-bg");
  // console.log("adress");
}

function openAddAddress(e) {
  const updateUI = document.getElementById("update");
  const addressUI = document.getElementById("address");
  const addAddresUI = document.getElementById("add_address");
  const orderUI = document.getElementById("orders");
  const order = document.getElementById("ordersClick");
  const profile = document.getElementById("profileClick");
  addressUI.style.display = "none";
  orderUI.style.display = "none";
  updateUI.style.display = "none";
  addAddresUI.style.display = "block";
}

function mopenProfile(e) {
  document.getElementById("mobileAddress").style.display = "none";
  document.getElementById("mobileAddAddress").style.display = "none";
  document.getElementById("mobileOrders").style.display = "none";
  document.getElementById("mobileProfile").style.display = "block";
  document.querySelector(".h-mobile").style.display = "none";
}
function mopenOrders(e) {
  document.getElementById("mobileAddress").style.display = "none";
  document.getElementById("mobileAddAddress").style.display = "none";
  document.getElementById("mobileOrders").style.display = "block";
  document.getElementById("mobileProfile").style.display = "none";
  document.querySelector(".h-mobile").style.display = "none";
}
function mopenAddress(e) {
  document.getElementById("mobileAddress").style.display = "block";
  document.getElementById("mobileAddAddress").style.display = "none";
  document.getElementById("mobileOrders").style.display = "none";
  document.getElementById("mobileProfile").style.display = "none";
  document.querySelector(".h-mobile").style.display = "none";
}

function mopenAddAddress(e) {
  document.getElementById("mobileAddress").style.display = "none";
  document.getElementById("mobileAddAddress").style.display = "block";
  document.getElementById("mobileOrders").style.display = "none";
  document.getElementById("mobileProfile").style.display = "none";
  document.querySelector(".h-mobile").style.display = "none";
}

function closeOptionsShowMenu(e) {
  console.log("clicked");
  document.getElementById("mobileAddress").style.display = "none";
  document.getElementById("mobileAddAddress").style.display = "none";
  document.getElementById("mobileOrders").style.display = "none";
  document.getElementById("mobileProfile").style.display = "none";
  document.querySelector(".h-mobile").style.display = "block";
}

function addAddressBtn(e) {
  console.log("clicked");
  document.getElementById("address").style.display = "none";
  document.getElementById("add_address").style.display = "block";
  document.getElementById("mobileAddAddress").style.display = "block";
  document.getElementById("mobileAddress").style.display = "none";
  // document.getElementById("mobileOrders").style.display = "none";
  // document.getElementById("mobileProfile").style.display = "none";
  // document.querySelector(".h-mobile").style.display = "block";
}
// $("#openOrders").click(function (event) {
//   const updateUI = document.getElementById("update");
//   const orderUI = document.getElementById("orders");
//   orderUI.style.display = "block";
//   orderUI.classList.add = "active-bg";
//   updateUI.style.display = "none";
//   updateUI.classList.remove = "active-bg";
//   console.log(event.target);
// });

// $("#openProfile").click(function (event) {
//   const updateUI = document.getElementById("update");
//   const orderUI = document.getElementById("orders");
//   orderUI.style.display = "none";
//   orderUI.classList.remove = "active-bg";
//   updateUI.style.display = "block";
//   updateUI.classList.add = "active-bg";
//   console.log(event.target);
// });
// This example was used to pull in variant titles and IDs dynamically
// on a custom build of the ReCharge customer portal.
//
// Feel free to send me an email if you have any questions.
//
// Kelly Vaughn -- The Taproom Agency
// kelly@thetaproom.com

// APP CREDENTIALS
const api = "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";
// api key: 376b1f7d1d60e67f365ecb7acb1567aa
// api screte: fc4e52132f548bcade4d3e907c2fb74f

var desktopform = document.querySelector("#profileUpdateForm");
desktopform.addEventListener("submit", function (e) {
  e.preventDefault();
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var email = $("#email").val();
  var id = $("#customer_id").val();
  var errorMsg = $("#updateErrorMsg");
  const updateData = {
    fname,
    lname,
    email,
    id,
  };
  var customer_data = {
    customer: {
      id: id,
      first_name: fname,
      last_name: lname,
      email: email,
    },
  };

  updateUser(customer_data, id);
});

window.onload = function () {
  var mform = document.querySelector("#mprofileUpdateForm");
  mform.onsubmit = msubmitted.bind(form);
};

function updateInput(ish, id) {
  $(`#${id}`).attr("value", ish);
}

function msubmitted(event) {
  event.preventDefault();
  var fname = $("#mfname").val();
  var lname = $("#mlname").val();
  var email = $("#memail").val();
  var id = $("#customer_id").val();
  var errorMsg = $("#updateErrorMsg");
  const updateData = {
    fname,
    lname,
    email,
    id,
  };
  var customer_data = {
    customer: {
      id: id,
      first_name: fname,
      last_name: lname,
      email: email,
    },
  };
  updateUser(customer_data, id);
}

function updateUser(customer_data, id) {
  $.ajax({
    url:
      `https://376b1f7d1d60e67f365ecb7acb1567aa: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@thebabycotshop-staging.myshopify.com/admin/api/2021-07/customers/` +
      id +
      ".json",
    type: "PUT",
    cache: false,
    data: customer_data,
    dataType: "json",
    crossDomain: true,
    success: function (response) {
      location.reload(true);
    },
    error: function (response) {
      // location.reload(true);
      const err = response.responseJSON.errors.email;
      if (response.responseJSON.errors.email) {
        console.log(err[0]);
        Toastify({
          text: `Email ${err[0]}`,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#bfb5a7",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }

      // response.responseJSON.errors.forEach((element) => {});
    },
  });
}

// customer address tab
function openCity(evt, cityName) {
  console.log("open");
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("address-1").click();

// mobile customer address tab
function mopenCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("mtabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("mtablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("mactive", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "mactive";
}

document.getElementById("maddress-1").click();
// enable sticky nav
// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
//   myFunction2();
// };

// Get the header
// var header = document.getElementById("myHeader");
// var announcement = document.getElementById("announcement");

// Get the offset position of the navbar
// var stickyhead = header.offsetTop;
// var stickyannouncement = announcement.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > stickyhead) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// function myFunction2() {
//   if (window.pageYOffset > stickyannouncement) {
//     announcement.classList.add("sticky");
//   } else {
//     announcement.classList.remove("sticky");
//   }
// }

function logout() {
  CartJS.clear();
  window.location.href = "/account/logout";
  console.log("logout clicked");
}
