const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

$(document).ready(function () {
  function checkUserName() {
    let kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
    if ($("#username").val() == "") {
      $("#tb").html("*Bắt buộc nhập tất cả thông tin!!");
      $("#tb").addClass("thongbao");
      return false;
    }
    if (!kt.test($("#username").val())) {
      $("#tb").html(
        "*Tên đăng nhập phải là chữ cái đầu viết hoa và không có khoảng cách"
      );
      $("#tb").addClass("thongbao");
      return false;
    }
    $("#tb").html("");
    $("#tb").removeClass("thongbao");
    return true;
  }
  $("#username").blur(checkUserName);

  function checkAddress() {
    if ($("#address").val() == "") {
      $("#tb").html("*Bắt buộc nhập tất cả thông tin!!");
      $("#tb").addClass("thongbao");
      return false;
    }
    $("#tb").html("");
    $("#tb").removeClass("thongbao");
    return true;
  }
  $("#address").blur(checkAddress);

  function validatePassword(password) {
    if (password.length < 6 || password.length > 16) {
      return false;
    }
    return true;
  }

  function checkPassword() {
    let pass = $("#password").val();
    if ($("#password").val() == "") {
      $("#tb").html("*Bắt buộc nhập tất cả thông tin!!");
      $("#tb").addClass("thongbao");
      return false;
    }
    if (!validatePassword(pass)) {
      $("#tb").html("*Mật khẩu phải từ 6-16 ký tự");
      $("#tb").addClass("thongbao");
      return false;
    }
    $("#tb").html("");
    $("#tb").removeClass("thongbao");
    return true;
  }
  $("#password").blur(checkPassword);

  function checkPhoneNumber() {
    let mauKT = /^0\d{9}$/;
    let pn = $("#phoneNumber").val();
    if ($("#phoneNumber").val() == "") {
      $("#tb").html("*Bắt buộc nhập tất cả thông tin!!");
      $("#tb").addClass("thongbao");
      return false;
    }
    if (mauKT.test($("#phoneNumber").val()) == false) {
      $("#tb").html("*Số điện thoại chỉ từ từ 0-10 số và số đầu phải là số 0");
      $("#tb").addClass("thongbao");
      return false;
    }
    $("#tb").html("");
    $("#tb").removeClass("thongbao");
    return true;
  }
  $("#phoneNumber").blur(checkPhoneNumber);

  $("#submit").on("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let gender = document.getElementById("gender").value;

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      address.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      Toast.fire({
        icon: "error",
        title: "Vui lòng điền đẩy đủ thông tin!",
      });
      return;
    }
    let account = {
      username: username,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
      gender: gender,
    };
    localStorage.setItem("account", JSON.stringify(account));
    alert(JSON.stringify(account))
    Toast.fire({
      icon: "success",
      title: "Đăng ký thành công!",
    });
  });
});

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username.trim() === "" || password.trim() === "") {
    Toast.fire({
      icon: "error",
      title: "Vui lòng điền đầy đủ tên đăng nhập và mật khẩu!",
    });
    return;
  }

  var storedAccount = localStorage.getItem("account");
  if (storedAccount) {
    storedAccount = JSON.parse(storedAccount);
    if (
      username === storedAccount.username &&
      password === storedAccount.password
    ) {
      Toast.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
      });
      alert(JSON.stringify(account))
      window.location.href = "index.html";
    } else {
      Toast.fire({
        icon: "error",
        title: "Đăng nhập không thành công!",
      });
    }
  } else {
    Toast.fire({
      icon: "error",
      title: "Không tìm thấy tài khoản. Vui lòng đăng ký trước khi đăng nhập!",
    });
  }
}
