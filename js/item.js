const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
$(document).ready(function () {
    let product = JSON.parse(localStorage.getItem('selectedProduct'));

    $('#content_information_item_minus').click(function () {
        let currentValue = parseInt($('#content_information_item_numbers').val());
        if (!isNaN(currentValue) && currentValue > 1) {
            $('#content_information_item_numbers').val(currentValue - 1);
        }
    });
    $('#content_information_item_increase').click(function () {
        let currentValue = parseInt($('#content_information_item_numbers').val());
        if (!isNaN(currentValue)) {
            $('#content_information_item_numbers').val(currentValue + 1);
        }
    });
    $('.content_information_item_buy_add').click(function(){
        localStorage.setItem('cartProduct', JSON.stringify(product));
        Toast.fire({
            icon: "success",
            title: "Đã thêm sản phẩm vào giỏ hàng!",
          });
    })
    $('.content_information_item_buy_now').click(function(){
        alert('Mua hàng thành công!');
    })


    let img = `<img src="${product.details}" class="img-fluid" alt="">`
    $('#imgItem').html(img);
    let productDetailsHTML = `<div class="itemName">${product.name}</div>
    <div class="itemPrice">${product.price} <u>đ</u></div> <br>
    <div class="itemColor"><b>Màu sắc:</b> ${product.color}</div> <br>
    <div class="itemSizes"><b>Kích thước:</b> ${product.sizes}</div> <br>`;
    $('#top').html(productDetailsHTML);
    let information = '';
    product.characteristists.forEach(element => {
        if(element != undefined){
            information += `<p>${element}</p>`;
            $('.information_content').html(information);
        }
    });
});