$(document).ready(function(){
    $('#searchInput').keyup(function () {
        var keyword = $(this).val();
        var searchGirlResults = searchGirlProducts(keyword);
        var searchBoyResults = searchBoyProducts(keyword);
        displaySearchResults(searchGirlResults);
        displaySearchResults(searchBoyResults);
    });
});
function searchGirlProducts(keyword) {
    return datanu.filter(function (product) {
        return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
}
function searchBoyProducts(keyword) {
    return datanam.filter(function (product) {
        return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
}

function displaySearchResults(results) {
    var searchHTML = '';
    results.forEach(function (product) {
        searchHTML += '<p>' + product.name + ' - $' + product.price + '</p>';
    });
    $('#searchResults').html(searchHTML).show();
}   


const datanu = [
    {
        "id": 1,
        "name": "Đầm váy thun sát nách Mickey & Minnie bé gái TrollVN #1",
        "price": "199.000",
        "color": ["Đỏ hồng", "Xanh da trời"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Nhóm sản phẩm: Đầm váy bé gái",
            "- Chất liệu: 100% cotton an toàn và thoáng mát cho da của bé",
            "- Size: Phù hợp với bé gái cân nặng từ 11 - 21kg, từ 2 - 6 tuổi",
            "- Họa tiết hình in Mickey & Minnie bản quyền Disney"
        ],
        "details": "../imgs/begai/m1.webp"
    },
    {
        "id": 2,
        "name": "Đầm váy thô Elsa phối voan ngắn tay bé gái TrollVN #2",
        "price": "469.000",
        "color": ["Đỏ hồng", "Xanh da trời"],
        "sizes": ["4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu 95% cotton và 5% spandex thấm hút mồ hôi, thoáng mát và an toàn cho làn da của bé",
            "- Phù hợp với bé gái cân nặng từ 14 - 25kg, từ 4 - 8 tuổi",
            "- Đầm váy thô ngắn tay hình in Elsa bản quyền Disney sắc nét và màu sắc hài hòa"
        ],
        "details": "../imgs/begai/m2.webp"
    },
    {
        "id": 3,
        "name": "Đầm váy thun Gấu dâu Lotso ngắn tay bé gái TrollVN #3",
        "price": "229.000",
        "color": ["Đỏ hồng", "Trắng"],
        "sizes": ["4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu 95% cotton và 5% spandex thấm hút mồ hôi, thoáng mát và an toàn cho làn da của bé",
            "- Phù hợp với bé gái cân nặng từ 14 - 25kg, từ 4 - 8 tuổi",
            "- Đầm váy thun ngắn tay in hình Gấu dâu Lotso bản quyền Disney, hình in đáng yêu, sắc nét và màu sắc hài hòa"
        ],
        "details": "../imgs/begai/m3.webp"
    },
    {
        "id": 4,
        "name": "Bộ thun ngắn tay Gấu dâu Lotso bé gái TrollVN #4",
        "price": "299.000",
        "color": ["Hồng", "Xanh da trời"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu 95% cotton và 5% spandex thấm hút mồ hôi, thoáng mát và an toàn cho làn da của bé",
            "- Phù hợp với bé gái cân nặng từ 14 - 25kg, từ 4 - 8 tuổi",
            "- Đồ bộ thun ngắn tay in hình Gấu dâu Lotso bản quyền Disney, hình in to sắc nét, đáng yêu và màu sắc hài hòa"
        ],
        "details": "../imgs/begai/m4.webp"
    },
    {
        "id": 5,
        "name": "Áo thun ngắn tay phối voan Minnie bé gái TrollVN #5",
        "price": "229.000",
        "color": ["Hồng", "Xanh da trời"],
        "sizes": ["4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu 95% cotton và 5% spandex thấm hút mồ hôi, thoáng mát và an toàn cho làn da của bé",
            "- Phù hợp với bé gái cân nặng từ 11 - 21kg, từ 2 - 6 tuổi",
            "- Áo thun ngắn tay in hình Minnie bản quyền Disney, hình in to sắc nét, đáng yêu và màu sắc hài hòa"
        ],
        "details": "../imgs/begai/m5.webp"
    },
    {
        "id": 6,
        "name": "Áo thun ngắn tay phối voan Minnie bé gái TrollVN #6",
        "price": "229.000",
        "color": ["Hồng", "Be"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu 95% cotton và 5% spandex thấm hút mồ hôi, thoáng mát và an toàn cho làn da của bé",
            "- Phù hợp với bé gái cân nặng từ 11 - 21kg, từ 2 - 6 tuổi",
            "- Họa tiết Minnie bản quyền Disney tính nghịch, đáng yêu"
        ],
        "details": "../imgs/begai/m6.webp"
    },
    {
        "id": 7,
        "name": "Bộ thun ngắn tay Minnie bé gái TrollVN #7",
        "price": "189.000",
        "color": ["Vàng", "Hồng"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu 95% cotton và 5% spandex thấm hút mồ hôi, thoáng mát và an toàn cho làn da của bé",
            "- Phù hợp với bé gái cân nặng từ 11 - 21kg, từ 2 - 6 tuổi",
            "- Bộ thun ngắn tay in hình Minnie bản quyền Disney, hình in sắc nét và màu sắc nhẹ nhàng cho bé gái"
        ],
        "details": "../imgs/begai/m7.webp"
    },
    {
        "id": 8,
        "name": "Áo khoác gió bé gái TrollVN #8",
        "price": "134.500",
        "color": ["Hồng nhạt"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu 95% cotton và 5% spandex thấm hút mồ hôi, thoáng mát và an toàn cho làn da của bé",
            "- Phù hợp với bé gái cân nặng từ 11 - 21kg, từ 2 - 6 tuổi",
            "- Áo khoác gió thiết kế hiện đại, phù hợp cho bé mặc khoác mùa thu đông"
        ],
        "details": "../imgs/begai/m8.webp"
    },
];
const datanam = [
    {
        "id": 1,
        "name": "Quần short thun bé trai TrollVN #1",
        "price": "139.000",
        "color": ["Nâu"],
        "sizes": ["2Y-11-12kg", "4Y-14-16kg", "6Y-19-21kg", "8Y-23-25kg", "10Y-27-30kg", "12Y-32-34kg"],
        "characteristists": [
            "- Chất liệu: Với thiết kế 95% vải cotton và 5% vải sợi Spandex mềm mịn, thoáng mát và an toàn cho da bé",
            "- Độ tuổi, cân nặng: phù hợp cho bé từ 6-14 tuổi, từ 19-37kg",
            "- Loại sản phẩm: Quần short trẻ em",
            "- Quần sooc ngắn, kết hợp hình chữ in phá cách, kết hợp túi phía trước và phía sau tăng tính tiện dụng và thời trang cho trang phục của bé"
        ],
        "details": "../imgs/betrai/m1.webp"
    },
    {
        "id": 2,
        "name": "Quần short thun bé trai TrollVN #2",
        "price": "79.200",
        "color": ["Nâu"],
        "sizes": ["2Y-11-12kg", "4Y-14-16kg", "6Y-19-21kg", "8Y-23-25kg", "10Y-27-30kg", "12Y-32-34kg"],
        "characteristists": [
            "- Chất liệu: Với thiết kế 100% vải cotton thoáng mát, thấm hút mồ hôi tốt",
            "- Độ tuổi, cân nặng: phù hợp cho bé từ 2-12 tuổi, từ 11-34kg",
            "- Loại sản phẩm: Quần short trẻ em",
            "- Quần  short thun năng động, cho bé yêu thỏa sức vui chơi, với màu sắc dễ phối với nhiều outfit."
        ],
        "details": "../imgs/betrai/m2.webp"
    },
    {
        "id": 3,
        "name": "Áo sơ mi ngắn tay bé trai TrollVN #3",
        "price": "249.000",
        "color": ["Xanh", "Trắng"],
        "sizes": ["2Y-11-12kg", "4Y-14-16kg", "6Y-19-21kg", "8Y-23-25kg", "10Y-27-30kg", "12Y-32-34kg"],
        "characteristists": [
            "- Nhóm sản phẩm: Áo sơ mi bé trai",
            "- Chất liệu: 100% cotton an toàn và thoáng mát cho da của bé",
            "- Size: Phù hợp với bé trai cân nặng từ 11 - 34kg, từ 2-12 tuổi"
        ],
        "details": "../imgs/betrai/m3.jpg"
    },
    {
        "id": 4,
        "name": "Quần short kaki bé trai TrollVN #4",
        "price": "255.550",
        "color": ["Kem", "Đen"],
        "sizes": ["2Y-11-12kg", "4Y-14-16kg", "6Y-19-21kg", "8Y-23-25kg", "10Y-27-30kg", "12Y-32-34kg", "14Y-35-37kg"],
        "characteristists": [
            "- Chất liệu: Với thiết kế 100% cotton spandex mềm mịn, thoáng mát",
            "- Độ tuổi, cân nặng: phù hợp cho bé từ 4-14 tuổi, từ 14-37kg",
            "- Loại sản phẩm: Quần short trẻ em",
            "- Quần short thô thiết kế thoải mái năng động, màu sắc trung tính, phần eo chun co giãn và có nhiều túi tiện lợi cho bé"
        ],
        "details": "../imgs/betrai/m4.webp"
    },
    {
        "id": 5,
        "name": "Quần short thô  bé trai TrollVN #5",
        "price": "229.000",
        "color": ["Xanh cốm", "Đen"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu: Với thiết kế 100% cotton mềm mịn, thoáng mát",
            "- Độ tuổi, cân nặng: phù hợp cho bé từ 2-6 tuổi, từ 11-21kg",
            "- Loại sản phẩm: Quần short trẻ em",
            "- Quần short thô thiết kế thoải mái năng động, hình in các con vật nghộ nghĩnh và dễ thương, mẹ có thể dễ dàng kết hợp với nhiều áo thun để cho bé đi học, dạo phố, thể thao và hơn thế nữa... có thể mặc trong hầu hết mọi dịp."
        ],
        "details": "../imgs/betrai/m5.webp"
    },
    {
        "id": 6,
        "name": "Áo thun ngắn tay bé trai TrollVN #6",
        "price": "198.000",
        "color": ["Đỏ", "Xanh"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu: Với thiết kế 100% cotton mềm mịn, thoáng mát",
            "- Độ tuổi, cân nặng: phù hợp cho bé từ 2-6 tuổi, từ 11-21kg",
            "- Quần short thô thiết kế thoải mái năng động, hình in các con vật nghộ nghĩnh và dễ thương, mẹ có thể dễ dàng kết hợp với nhiều áo thun để cho bé đi học, dạo phố, thể thao và hơn thế nữa... có thể mặc trong hầu hết mọi dịp."
        ],
        "details": "../imgs/betrai/m6.webp"
    },
    {
        "id": 7,
        "name": "Bộ thun ngắn tay Mickey bé trai TrollVN #7",
        "price": "299.000",
        "color": ["Xanh", "Trắng"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu: Với thiết kế 100% cotton mềm mịn, thoáng mát",
            "- Độ tuổi, cân nặng: phù hợp cho bé từ 2-6 tuổi, từ 11-21kg",
        ],
        "details": "../imgs/betrai/m7.webp"
    },
    {
        "id": 8,
        "name": "Bộ thun ngắn tay Mickey bé trai TrollVN #8",
        "price": "329.000",
        "color": ["Xanh đậm", "Xanh nhạt"],
        "sizes": ["2Y-11-12kg", "3Y-12-13kg", "4Y-14-16kg", "5Y-17-19kg", "6Y-19-21kg"],
        "characteristists": [
            "- Chất liệu: Với thiết kế 100% polyester cao cấp, dày dặn, mịn đẹp an toàn cho bé.",
            "- Độ tuổi, cân nặng: phù hợp cho bé từ 2-6 tuổi, từ 11-21kg",
            "- Công nghệ in không bể nứt hình với thời gian, họa tiết và màu sắc ngộ nghĩnh bắt mắt, thiết kế kỹ càng từng chi tiết: lớp lót, lưng quần bo chun co giãn,...",
        ],
        "details": "../imgs/betrai/m8.webp"
    },
];