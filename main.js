// var btnKetQua = document.getElementById("btnKetQua");
// btnKetQua.onclick = function () {

//     var diemChuan = document.getElementById("diemChuan").value * 1;
//     var KhuVuc = document.getElementById("KhuVuc").value * 1;
//     var DoiTuong = document.getElementById("DoiTuong").value * 1;

//     var number1 = document.getElementById("number1").value * 1;
//     var number2 = document.getElementById("number2").value * 1;
//     var number3 = document.getElementById("number3").value * 1;


//     var total = KhuVuc + DoiTuong + number1 + number2 + number3;

//     if (total < diemChuan || number1 == 0 || number2 == 0 || number3 == 0) {
//         var result = "Bạn đã rớt (T-T) do điểm của bạn thấp hơn điểm chuẩn hoặc 1 môn bằng 0 .<br>Điểm hiện tại:" + Total + " điểm";
//     } else {
//         var result = "Bạn đã đậu L(^-^)L,  " + "tổng điểm:" + Total + "điểm  Congratulation!!";
//     }


//     var footerTinhKQ = document.getElementById("footerTinhKQ");
//     footerTinhKQ.innerHTML = result;//xuất ra
// };




var btnKetQua = document.getElementById("btnKetQua").onclick = function () {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var KhuVuc = document.getElementById("KhuVuc").value * 1;
    var DoiTuong = document.getElementById("DoiTuong").value * 1;

    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;

    var Total = KhuVuc + DoiTuong + number1 + number2 + number3;

    if (diemChuan == 0) {
        var result = "Bạn chưa nhập điểm chuẩn .";

    } else if (Total < diemChuan || number1 == 0 || number2 == 0 || number3 == 0) {
        var result = "Bạn đã rớt (T-T) do điểm của bạn thấp hơn điểm chuẩn:(" +diemChuan+" điểm )hoặc 1 môn nào đó bằng 0 .<br>Điểm hiện tại:" + Total + " điểm";

    } else {
        var result = "Bạn đã đậu L(^-^)L,  " + "tổng điểm:" + Total + "điểm  Congratulation!!";
    }


    return inNoiDung('footerTinhKQ', result);//
    //xuất ra

    //var footerTinhKQ = document.getElementById("footerTinhKQ");

//  footerTinhKQ.innerHTML = result;

};

//  var KQTHi =tinhKQTHI(Total);

function inNoiDung(id,noiDung) {// dung chung khi get id footer
   
    document.getElementById(id).innerHTML=noiDung;

};

// inNoiDung("footerTinhKQ",KQTHI);


// let result =tinhKQTHI();
// document.getElementById("footerTinhKQ").innerHTML = result ;

//

//  function xuatFooter(id,noiDung) { // dung chung khi get id footer
// noiDung == result;
//  document.getElementById(id).innerHTML=noiDung;

// };

// xuatFooter('footerTinhKQ',noiDung); // gan ket qua fuction













// 
var btnTinhKW = document.getElementById("btnTinhKW").onclick = function tinhKQKW() {

    var hoTen = document.getElementById("hoTen").value;
    var soKw = document.getElementById("soKw").value * 1;
    var donGia = 500;//mac dinh giá
    var donGia2 = 650;//mac dinh giá
    var donGia3 = 850;//mac dinh giá
    var donGia4 = 1100;//mac dinh giá
    var donGia5 = 1300;//mac dinh giá
    if (0 < soKw && soKw <= 50) {//dau
        total2 = donGia * soKw;
    } else if (50 < soKw && soKw <= 100) {//50Kw ke
        total2 = 50 * donGia + (soKw - 50) * donGia2;
    } else if (100 < soKw && soKw <= 200) {//100Kw ke
        total2 = 50 * donGia + 50 * donGia2 + (soKw - 100) * donGia3;
    } else if (200 < soKw && soKw <= 350) {//150Kw ke
        total2 = 50 * donGia + 50 * donGia2 + 100 * donGia3 + (soKw - 200) * donGia4;
    } else if (soKw > 350) {//con lai
        total2 = 50 * donGia + 50 * donGia2 + 100 * donGia3 + 150 * donGia4 + (soKw - 350) * donGia5;
    } else {
        alert("Vui long nhap so luong phu hop!");
    }


    //Fomart VN
    // var VND = new Intl.NumberFormat('vi-VN', {
    //     // style: 'currency',
    //     // currency: 'VND',
    //     maximumSignificantDigits: 3
    // });

    var result2 = "Họ tên: " + hoTen + "<br>Tổng tiền: " + new Intl.NumberFormat('vi-VN').format(total2) + ' VND';


    var footerTinhKW = document.getElementById("footerTinhKW");

    footerTinhKW.innerHTML = result2;//xuất ra



};

// debugger

var btnTinhThue = document.getElementById("btnTinhThue");
btnTinhThue.onclick = function () {

    var nhapHoTenThue = document.getElementById("nhapHoTenThue").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;


    var thuNhapChiuThue = tongThuNhap - 4e+6 -(soNguoiPhuThuoc * 16e+5);
    console.log(thuNhapChiuThue)
    if (thuNhapChiuThue <= 60e+6) {
        total3 = thuNhapChiuThue * 0.05;
    } else if (60e+6 < thuNhapChiuThue <= 120e+6) {
        total3 = 60 * 0.05 + (thuNhapChiuThue - 60e+6)*0.1;
    } else if (120e+6 < thuNhapChiuThue <= 210e+6) {
        total3 = 60 * 0.05 + (120e+6 - 60e+6)*0.1+(thuNhapChiuThue - 120e+6)*0.15 ;
    } else if (210e+6 < thuNhapChiuThue <= 384e+6) {
        total3 = 60 * 0.05 + (120e+6 - 60e+6)*0.1+(210e+6 - 120e+6)*0.15+(thuNhapChiuThue -210e+6)*0.2 ;
    } else if (384e+6 < thuNhapChiuThue <= 624e+6) {
        total3 = 60 * 0.05 + (120e+6 - 60e+6)*0.1+(210e+6 - 120e+6)*0.15+(384e+6 -210e+6)*0.2 +(thuNhapChiuThue-384e+6)*0.25;
    } else if (624e+6 < thuNhapChiuThue <= 960e+6) {
        total3 = 60 * 0.05 + (120e+6 - 60e+6)*0.1+(210e+6 - 120e+6)*0.15+(384e+6 -210e+6)*0.2 +(624e+6-384e+6)*0.25+(thuNhapChiuThue-624e+6)*0.3;
    } else if (thuNhapChiuThue > 960e+6) {
        total3 = 60 * 0.05 + (120e+6 - 60e+6)*0.1+(210e+6 - 120e+6)*0.15+(384e+6 -210e+6)*0.2 +(624e+6-384e+6)*0.25+(960e+6-624e+6)*0.3+(thuNhapChiuThue-960e+6)*0.35;
    }else{
        alert("Vui long nhap so luong phu hop!");
    }

    var result3 = "họ tên " + nhapHoTenThue+ "<br>Thu nhập chịu thuế: " +new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(total3) + ' VND';
    var footerTinhThue = document.getElementById("footerTinhThue");
    footerTinhThue.innerHTML = result3;//xuất ra

    //     // var donGia = 500;//mac dinh giá
    //     // var donGia2 = 650;//mac dinh giá
    //     // var donGia3 = 850;//mac dinh giá
    //     // var donGia4 = 1100;//mac dinh giá
    //     // var donGia5 = 1300;//mac dinh giá
    //     // if (0 < soKw && soKw <= 50) {//dau
    //     //     total2 = donGia * soKw;
    //     // } else if (50 < soKw && soKw <= 100) {//50Kw ke
    //     //     total2 = 50 * donGia + (soKw - 50) * donGia2;
    //     // } else if (100 < soKw && soKw <= 200) {//100Kw ke
    //     //     total2 = 50 * donGia + 50 * donGia2 + (soKw - 100) * donGia3;
    //     // } else if (200 < soKw && soKw <= 350) {//150Kw ke
    //     //     total2 = 50 * donGia + 50 * donGia2 + 100 * donGia3 + (soKw - 200) * donGia4;
    //     // } else if (soKw > 350) {//con lai
    //     //     total2 = 50 * donGia + 50 * donGia2 + 100 * donGia3 + 150 * donGia4 + (soKw - 350) * donGia5;
    //     // } else {
    //     //     alert("Vui long nhap so luong phu hop!");
    //     // }


    //     // var result2 = "Họ tên: " + hoTen + "<br>Tổng tiền: " + new Intl.NumberFormat('vi-VN').format(total2) + ' VND';



    //     // var footerTinhKW = document.getElementById("footerTinhKW");
    //     // footerTinhKW.innerHTML = result2;//xuất ra


};


var btnTinhTienCap = document.getElementById("btnTinhTienCap").onclick = function tinhTienCap() {
    var KhachHang = document.getElementById("KhachHang").value;

    var maKhachHang = document.getElementById("maKhachHang").value * 1;
    var soKenhCC = document.getElementById("soKenhCC").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    console.log(KhachHang);
    // var DN =document.getElementById("KhachHang").value=DN;
    // var ND =document.getElementById("khachHang").value=ND;

    if (KhachHang === "DN" && soKetNoi <= 10) {
        var tienCapDoanhNghiep = 15 + 75 + (soKenhCC * 50);
        var result4 = "Mã khách hàng:" + maKhachHang + "tiền cáp :" + "$" + tienCapDoanhNghiep;
    } else {
        tienCapDoanhNghiep = 15 + 75 + (soKenhCC * 50) + ((soKetNoi - 10) * 5);
        var result4 = "Mã khách hàng:" + maKhachHang + "tiền cáp :" + "$" + tienCapDoanhNghiep;
    }

    if (KhachHang === "ND") {
        tienCapNhaDan = 4.5 + 20.5 + (soKenhCC * 7.5);
        var result4 = "Mã khách hàng:" + maKhachHang + "tiền cáp :" + tienCapNhaDan;
    }

    var footerTinhDTCV = document.getElementById("footerTinhDTCV");
    footerTinhDTCV.innerHTML = result4;//xuất ra


};
