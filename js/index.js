$(document).ready(function() {
    $('#btnMore_nu').click(function() {
        var newPageUrl = '../html/begai.html';
        window.location.href = newPageUrl;
    });
    $('#btnMore_nam').click(function() {
        var newPageUrl = '../html/betrai.html';
        window.location.href = newPageUrl;
    });

    datanu.forEach(function(product) {
        let themnu = `
                     <div  data-id="${product.id}" class="showMoreInformation_nu borderProducts col-2">
                        <div class="products">
                            <img class="img-fluid" src="${product.details}"
                                alt>
                        </div>
                        <p class="content">
                        ${product.name}
                        </p>
                        <p class="price"><b>${product.price}<b/>  <u>đ</u></p>
                     </div>
                        
        `
        $("#listProducts_nu").append(themnu);
    });

    datanam.forEach(function(product) {
        let themnam = `
        <div  data-id="${product.id}" class="showMoreInformation_nam borderProducts col-2">
        <div class="products">
            <img class="img-fluid" src="${product.details}"
                alt>
        </div>
        <p class="content">
        ${product.name}
        </p>
        <p class="price"><b>${product.price}<b/>  <u>đ</u></p>
     </div>
                        
        `
        $("#listProducts_nam").append(themnam);
    });
    $('#searchInput').keyup(function() {
        var keyword = $(this).val();
        var searchGirlResults = searchGirlProducts(keyword);
        var searchBoyResults = searchBoyProducts(keyword);
        displaySearchResults(searchGirlResults);
        displaySearchResults(searchBoyResults);
    });
    $('.showMoreInformation_nu').on('click', function() {
        var productId = $(this).data('id');
        for (const [index, item] of datanu.entries()) {
            if (item.id === productId) {
                localStorage.setItem('selectedProduct', JSON.stringify(datanu[index]));
                window.location.href = '../html/item.html';
                break;
            }
        }
    });
    $('.showMoreInformation_nam').on('click', function() {
        var productId = $(this).data('id');
        for (const [index, item] of datanam.entries()) {
            if (item.id === productId) {
                localStorage.setItem('selectedProduct', JSON.stringify(datanam[index]));
                window.location.href = '../html/item.html';
                break;
            }
        }
    });
})

function searchGirlProducts(keyword) {
    return datanu.filter(function(product) {
        return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
}

function searchBoyProducts(keyword) {
    return datanam.filter(function(product) {
        return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
}

function displaySearchResults(results) {
    var searchHTML = '';
    results.forEach(function(product) {
        searchHTML += '<p>' + product.name + ' - $' + product.price + '</p>';
    });
    $('#searchResults').html(searchHTML).show();
}












const datanu = [{
        "id": 1,
        "name": "Áo Polo Pique Nữ Basic WPO 2012",
        "price": "199.000",
        "color": ["xanh mint", "đen"],
        "sizes": ["45kg", "48kg", "51kg", "54kg", "57kg"],
        "characteristists": [
            "- Áo polo pique cơ bản với điểm nhấn bo cổ dệt jacquard nổi gân tinh tế. Form áo regular, vừa với người giúp vóc dáng người mặc gọn gàng, dễ phối đồ cho các cô gái năng động.",
            "- Chất liệu: Pique 70% Cotton, 25% Polyester, 5% Spandex",
            "- Form áo: Slim",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/begai/h1.webp"
    },
    {
        "id": 2,
        "name": "Áo Khoác Nữ Dù Trượt Nước Phối Màu WOP 2048",
        "price": "469.000",
        "color": ["Đỏ hồng", "Xanh da trời"],
        "sizes": ["51g", "54kg", "58kg"],
        "characteristists": [
            "- Áo Khoác Nữ Dù Trượt Nước Phối Màu WOP 2048 với form dáng đặc biệt với phần tay áo vừa vặn của form Regular, phần thân được thiết kế rộng rãi của form Relax tạo cảm giác thoải mái và tăng tính thời trang cho sản phẩm.. Khả năng trượt nước nhẹ, cản gió phù hợp với các hoạt động đi làm, đi chơi, đi du lịch...",
            "- Chất liệu: Dù 100% Polyester",
            "- Form dáng: Regular + Relax"
        ],
        "details": "../imgs/begai/h2.webp"
    },
    {
        "id": 3,
        "name": "Áo Khoác Nữ UV Pro Windbreaker WOK 2058",
        "price": "449.000",
        "color": ["Đỏ hồng", "Trắng"],
        "sizes": ["51kg", "54kg", "58kg"],
        "characteristists": [
            "- Áo Khoác Nữ UV Pro Windbreaker WOK 2058 Sản phẩm được làm từ 100% sợi polyester tái chế nên rất bền chắc, nhanh khô, độ bền màu cao, có khả năng chống nắng vượt trội với chỉ số UPF 50++ và khả năng kháng tia UV tới 98%, nhờ tính chất kháng tia UV tự nhiên của sợi polyester cùng kiểu dệt 2 lớp cải tiến",
            "- Áo có lỗ thoát khí 2 bên sườn giúp thoáng khí.",
            "- Thiết kế 2 túi dây kéo an toàn thân trước, 2 túi trong tiện lợi đựng đồ."
        ],
        "details": "../imgs/begai/h3.webp"
    },
    {
        "id": 4,
        "name": "Áo Thun Nữ Zodiac Vibe WTS 2400",
        "price": "299.000",
        "color": ["Hồng", "Xanh da trời"],
        "sizes": ["45kg", "48kg", "51kg", "54kg", "58kg"],
        "characteristists": [
            "- Áo thun in hình 12 cung hoàng đạo, mang đến phong cách cá tính và sự kết nối với bản thân, hoàn hảo cho những tín đồ yêu thích chiêm tinh và thời trang. Form relax mang đến sự thoải mái tối đa cho người mặc.",
            "- Chất Liệu : SINGLE 2C COTTON 210GSM",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/begai/h4.webp"
    },
    {
        "id": 5,
        "name": "Áo Khoác Nữ Jean Lệch Tà WOF 2008",
        "price": "419.000",
        "color": ["Hồng", "Xanh da trời"],
        "sizes": ["48kg", "51kg", "54kg"],
        "characteristists": [
            "- Form oversize năng động với điểm nhấn xếp lai, lệch tà trước sau.",
            "- Form dáng: Oversize",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/begai/h5.jpg"
    },
    {
        "id": 6,
        "name": "Áo Khoác Nữ Trượt Nước Logo Phản Quang WOP 2074",
        "price": "449.000",
        "color": ["Hồng", "Be"],
        "sizes": ["48kg", "51kg", "54kg", "58kg", "60kg"],
        "characteristists": [
            "- Áo khoác dù trượt nước, chất vải dù có xớ mịn, trượt nước bề mặt và có chống thấm ngược vào trong. Được lót 1 lớp vải lưới thoáng khí và thân sau có thiết kế lỗ nhỏ thoát hơi. 2 túi có dây kéo ở thân trước an toàn đựng đồ, 1 túi cơi ở mặt trong. Dây kéo chống thấm, bo lai dạng dây rút có con chặn có thể điều chỉnh độ rộng lai theo sở thích  người mặc. Logo thân trước và logo X thân sau IN ÉP PHẢN QUANG",
            "- Chất liệu: Dù gân mờ 100% Polyester",
            "- Form dáng: REGULAR MIX RELAX"
        ],
        "details": "../imgs/begai/h6.webp"
    },
    {
        "id": 7,
        "name": "Áo Khoác Nữ Hoodie Big Signal WHO 2021",
        "price": "269.000",
        "color": ["Vàng", "Hồng"],
        "sizes": ["48kg", "51kg", "54kg", "58kg", "60kg"],
        "characteristists": [
            "- Áo hoodie chất liệu vải Terry fabric in logo nổi to bảng ở lưng cùng với thiết kế trẻ trung, mang đến phong cách năng động và cá tính, giúp người mặc tự tin thể hiện bản sắc riêng qua trang phục, là sản phẩm dành cho mùa thu đông, khách hàng sẽ có thể nâng cao cá tính của mình.",
            "- Chất liệu: FrenchTerry Fabric",
            "- Form dáng: Oversize."
        ],
        "details": "../imgs/begai/h7.jpg"
    },
    {
        "id": 8,
        "name": "Áo Thun Nữ Slim Basic Cổ Tròn WTS 2325",
        "price": "179.500",
        "color": ["Hồng nhạt"],
        "sizes": ["48kg", "51kg", "54kg", "57kg", "60kg"],
        "characteristists": [
            "- Chất liệu thun cotton mềm mịn tạo cảm giác thoải mái, dễ dàng phối được với nhiều phong cách khác nhau. Form slim fit tôn dáng người mặc.",
            "- Chất Liệu : 86.6% Cotton + 13.4% Polyester, 180 GSM.",
            "- Màu Sắc : Đen, Trắng, Xám Micro Chip,Xanh Infinity, Nâu nhạt"
        ],
        "details": "../imgs/begai/h8.webp"
    },
];
const datanam = [{
        "id": 1,
        "name": "Áo Khoác Thun UV Nam Helios MOK 1054",
        "price": "449.000",
        "color": ["Xanh"],
        "sizes": ["65kg", "68kg", "71kg", "74kg", "77kg", "80kg"],
        "characteristists": [
            "- Sản phẩm áo khoác chống nắng có chỉ số chống UPF 50+, phản xạ đến 98% tia UV nhờ vào cấu trúc sợi Polyester có khả năng chống nắng tự nhiên. Bề mặt từ vải xược, thiết kế với logo đặc trưng và chi tiết nhấn eo phản quang, đảm bảo an toàn trong điều kiện ánh sáng yếu.",
            "- Chất liệu : Thành phần TC 60.49% Poly +39.51 %cotton 260gsm",
            "- Chỉ số UPF: 50+, phản xạ 98% tia UVm",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/betrai/h1.jpg"
    },
    {
        "id": 2,
        "name": "Áo Khoác Thun UV Nam Cổ Đứng Helios MOK 1055",
        "price": "419.000",
        "color": ["Xanh nhạt"],
        "sizes": ["65", "68kg", "71kg", "74kg", "78kg", "80kg"],
        "characteristists": [
            "- sản phẩm áo khoác chống nắng có chỉ số chống UPF 50+, phản xạ đến 98% tia UV nhờ vào cấu trúc sợi Polyester có khả năng chống nắng tự nhiên. Bề mặt từ vải xược, thiết kế với logo đặc trưng và chi tiết nhấn eo phản quang, đảm bảo an toàn trong điều kiện ánh sáng yếu.",
            "- Chất liệu : Thành phần TC 60.49% Poly +39.51 %cotton 260gsm",
            "- Chỉ số UPF: 50+, phản xạ 98% tia UV ",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/betrai/h2.jpg"
    },
    {
        "id": 3,
        "name": "Áo Thun Nam The Only Best Energy MTS 1402",
        "price": "149.000",
        "color": ["Xanh", "Trắng"],
        "sizes": ["65", "68kg", "71kg", "74kg", "78kg", "80kg"],
        "characteristists": [
            "- Áo thun mang đến phong cách trẻ trung và hiện đại, với nhiều kiểu dáng phù hợp cho cả nam, nữ và trẻ em. Sản phẩm có màu sắc mới lạ, phù hợp với tông da người Châu Á. Đây sẽ là lựa chọn tuyệt vời cho các gia đình trong dịp Noel sắp tới.",
            "- Chất Liệu : SINGLE 2C 100% COTTON 210 GSM",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/betrai/h3.webp"
    },
    {
        "id": 4,
        "name": "Quần Dài Nam Jogger Thun Vải 2 Da Airlayer MPA 1009",
        "price": "255.550",
        "color": ["Xám", "Đen"],
        "sizes": ["65", "68kg", "71kg", "74kg", "78kg", "80kg"],
        "characteristists": [
            "- Một trong những item không thể thiếu trong tủ đồ thu đông, với chất liệu thun 2 da mềm mịn phù hợp với các hoạt động ngoài trời, thể thao, đi chơi, du lịch. Chất liệu thun 2 da có 15% Rayon giúp bề mặt vải có độ mềm mướt khi chạm vào và 5% Spandex co giãn thoải mái.",
            "- Chất liệu: Thun 2 da,  80% Polyester + 15% Rayon + 5% Spandex, 300 GSM.",
            "- Form dáng: Jogger Regular",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/betrai/h5.webp"
    },
    {
        "id": 5,
        "name": "Áo Khoác Nam Dù Trượt Nước Emboss Hoa Văn MOP 1038",
        "price": "419.000",
        "color": ["Kem", "Đen"],
        "sizes": ["65", "68kg", "71kg", "74kg", "78kg", "80kg"],
        "characteristists": [
            "- Phần túi áo được thiết kế trong – ngoài rộng rãi cùng phần dây kéo chắc chắn, tiện dụng. Khả năng trượt nước nhẹ, cản gió phù hợp với các hoạt động đi làm, đi chơi, đi du lịch...",
            "- Chất liệu: Dù trượt nước Emboss 100% Polyester                                                                               ",
            "- Form dáng: New Regular + Relax",
            "- Sản xuất: Việt Nam"
        ],
        "details": "../imgs/betrai/h4.webp"
    },
    {
        "id": 6,
        "name": "Áo Thun Nam Basic Slim Fit Cổ Tròn MTS 1261",
        "price": "198.000",
        "color": ["Đỏ", "Xanh"],
        "sizes": ["65", "68kg", "71kg", "74kg", "78kg", "80kg"],
        "characteristists": [
            "- Áo thun cổ tim vải đốm, với form slim gọn gàng giúp tôn dáng hơn. Bộ màu đa dạng cho bạn lựa chọn. Sản phẩm có thể mix & match với đa dạng các bottom khác nhau tạo phong cách năng động hơn.",
            "- Chất liệu: Thun CVC vải đốm, thành phần 60% Cotton, 40% Polyester, trọng lượng 180gsm ",
            "- Form: Slim."
        ],
        "details": "../imgs/betrai/h6.webp"
    },
    {
        "id": 7,
        "name": "Áo Hoodie Nam Basic MHO 1020",
        "price": "299.000",
        "color": ["đen", "Trắng"],
        "sizes": ["65", "68kg", "71kg", "74kg", "78kg", "80kg"],
        "characteristists": [
            "- Chất liệu: Thun 2 da,  80% Polyester + 15% Rayon + 5% Spandex, 300GSM.",
            "- Form dáng: Oversize.",
        ],
        "details": "../imgs/betrai/h7.webp"
    },
    {
        "id": 8,
        "name": "Áo Khoác Nam Regular Fit Anti UV MOK 1020",
        "price": "329.000",
        "color": ["Cam", "Xanh nhạt"],
        "sizes": ["65", "68kg", "71kg", "74kg", "78kg", "80kg"],
        "characteristists": [
            "- Sản phẩm có chỉ số chống UV UPF 50+, cản được 98% tia UV tiếp xúc với áo làm giảm khả năng tổn hại làn da từ tia cực tím. Màu sắc đa dạng và thời trang cùng với form dáng gọn gàng, di chuyển thuận lợi. Hệ túi trong rộng rãi và túi ngoài có khóa kéo an toàn.",
            "- Chất liệu :Vải Tricot UV, thành phần 60% Cotton - 40% Polyester, trọng lượng 240GSM",
            "- Sản xuất: Việt Nam",
        ],
        "details": "../imgs/betrai/h8.webp"
    },
];