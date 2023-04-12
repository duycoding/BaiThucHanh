const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', searchData);

searchInput.addEventListener('keypress', function(e1) {
    if (e1.key == 'Enter')
        searchData();
});

function searchData() {
    const searchValue = searchInput.ariaValueMax.trim();
    if (searchValue !== ' ')
        window.location.href = 'timkiem.html?=${searchValue}';
}

function validateForm(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        alert("Email không hợp lệ")
        return false;
    }

    if (frm.psw.value.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự");
        return false;
    }

    if (frm.psw2.value != frm.psw.value) {
        alert("Mật khẩu nhập lại không trùng khớp");
        return false;
    }

    var memberTypes = document.getElementsByName("memberType");
    var selectedMemberType = false;
    for (var i = 0; i < memberTypes.length; i++) {
        if (memberTypes[i].checked) {
            selectedMemberType = true;
            break;
        }
    }

    if (!selectedMemberType) {
        alert("Vui lòng chọn cấp độ thành viên");
        return false;
    }
}

function validateForm1(frm) {
    if (frm.name.value.length < 4) {
        alert("Độ dài họ tên phải nhiều hơn 4 ký tự.");
        return false;
    }

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        alert("Email không hợp lệ")
        return false;
    }

    var selectBox = document.getElementById('haha');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue == "") {
        alert("Vui lòng chọn ít nhất một tùy chọn.");
        return false;
    }
}

var itemList={
    "sp001":{ "name":"Sữa Chua Vị Kiwi", 
    "price":21000, 
    "photo":"images/sanpham/kiwi.jpg"}, 
    "sp002":{ "name":"Sữa Chua Vị Xoài", 
    "price":22000, 
    "photo":"images/sanpham/mango.jpg"}, 
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới", 
    "price":23000, 
    "photo":"images/sanpham/cantaloupe.jpg"}, 
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi", 
    "price":24000, 
    "photo":"images/sanpham/blackberry.jpg"}, 
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây", 
    "price":25000, 
    "photo":"images/sanpham/strawberry.jpg"}, 
    "sp006":{ "name":"Sữa Chua Vị Việt Quất", 
    "price":26000, 
    "photo":"images/sanpham/blueberry.jpg"}, 
    "sp007":{ "name":"Sữa Chua Vị Bưởi", 
    "price":27000, 
    "photo":"images/sanpham/grapes.jpg"}, 
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh", 
    "price":28000, 
    "photo":"images/sanpham/green-apple.jpg"}, 
    "sp009":{ "name":"Sữa Chua Vị Dứa", 
    "price":29000, 
    "photo":"images/sanpham/pineapple.jpg"} 
    };

function addCart(code) {
    var number = parseInt(document.getElementById(code).value);

   if (typeof localStorage[code] === 'undefined') {
    window.localStorage.setItem(code, number);
   } else {
    var current = parseInt(window.localStorage.getItem(code));
    var total = current + number;

    if (total > 100) {
        window.localStorage.setItem(code, 100);
        alert("Số lượng sản phẩm vượt quá 100");
    } else {
        window.localStorage.setItem(code, total);
    }
   }
}

