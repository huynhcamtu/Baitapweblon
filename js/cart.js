const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

let list = [];
$(document).ready(function () {
  let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
  let cartProductHTML = "";
  let total = "";
  list.push(cartProduct);
  total += cartProduct.price;
  console.log(total);
  $(".total").text(total + " đ");
  list.forEach((item) => {
    cartProductHTML += `<div class="cartList">
    <div class="cartItemImg"><img src="${item.details}" class="img-fluid"
    alt=""></div>
    <div class="cartItemDetails">
    <div class="cartItemName">${item.name}</div>
    <div class="cartItemPrice">${item.price} <u>đ</u></div>
    </div>
    <div class="cartItemRemove">
    <button class="btn btn-danger delete" name="${item.name}">Xóa</button>
    </div>
    </div>`;
  });
  if (cartProduct !== null) {
    $("#listItem").empty();
    $("#listItem").append(cartProductHTML);
  }
  $('.delete').on('click', function () {
    let a = $('.delete').attr('name');
    list.forEach((item) => {
      if (item.name === a) {
        list = list.filter((item) => item.name !== a);
      }
    });
  });
  $(".btn_pay").click(function () {
    Toast.fire({
      icon: "success",
      title: "Thanh toán thành công!",
    });
  });
});
