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
