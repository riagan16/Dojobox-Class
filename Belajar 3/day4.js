
// * Function Declaration
function tambah(a,b) {
    return a+b; // return itu untuk mengembalikan nilai balik dari suatu function. berarti nanti function tambah itu nilainya a+b. tapi return ini opsional soalnya ada function yang ga perlu return
}

document.write(tambah(5,3 + '<br>')) // 5 dan 3 itu argumen
document.write(tambah(3,5,5 + '<br>')) // argumen kelebihan yang akan dipake cuma 2 argumen di awal yaitu 3 sama 5. kalo kurang hasilnya akan undefined
document.write('<br>')


// * Fungsi deklarasi yang ga punya nilai balik/return
function cetak(bill1,bill2) {
    document.write('Tagihan pertama sebesar: ' + bill1 + '<br>');
    document.write('Tagihan kedua sebesar: ' + bill2 + '<br>');
}
//cara panggil
cetak('200.000', '500.000');


// * Function ekspresi. kalo yang ini yang dipanggil si variable ekspresinya -> penjumlahan
// ! Function Expression harus punya return
var penjumlahan = function (angka1,angka2) {
    var hasil
    hasil = angka1 + angka2;
    return hasil

    //atau
   /*  return angka1 + angka2 */
}
document.write(penjumlahan(6,5) + '<br>');


// * OBJECT: Kumpulan nilai yang memiliki nama. Array yang lebih sakti?
// Di dalam object ada Property dan Method. Property nama dari suatu var dlm object. Method itu function2 yg ada dalam object. Object kaya pembungkus data agar lebih mudah diakses. BEdanya dengan array 
//Deklarasi Object

//*literal declaration
/* var akademia = {
    //1. Property
    nama : 'Andi',
    NIK : '312121212',
    email : 'andi@test.com',

    //2. Method
    getName: function(){
        console.log('Nama saya adalah ' + this.nama + '<br>')
    },
    getEmail: function() {
        console.log('Email saya adalah' + this.email + '<br>')
    }
}; */

//*constructor
function akademia(nama,nik,email) {
    this.nama = nama;
    this.email = email;
    this.nik = nik;
}

var akademisi = new akademia('Dudu', '123131313', 'dudu@coba.com')