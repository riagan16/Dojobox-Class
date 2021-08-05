var namaVariable
let namaVariablePakaiLet
const phi = 3.14; //variable ini tidak akan berubah dan tidak bisa diubah nilainya

//contoh if
// var angka = 20;
// if (angka % 2 === 0){ //=== strict jadi sampai membandingkan tipe datanya
//     //kondisi true
//     document.write(angka + 'hasilnya bilangan genap')
// }else if{
//     document.write('hasilnya ganjil')
// };

//PERULANGAN

//WHILE
// var ulang = 1;

// while(ulang<=10){ //selama nilai ulang kurang dari sama dengan 10 maka program akan dijalankan
//     document.write('halo kalian' + '<br>' );
//     ulang += 1; // 1+1=2 terus 2+1=3 ... 10+1=11 nilai ulang udah lebih dari 10 jadi berhenti
// };


//bakal bikin loop selamanyg
// var ulang = confirm('ulang lagi? ');

// while(ulang<=10){ //selama nilai ulang kurang dari sama dengan 10 maka program akan dijalankan
//     document.write('halo kalian' + '<br>' );
//     ulang += 1; // 1+1=2 terus 2+1=3 ... 10+1=11 nilai ulang udah lebih dari 10 jadi berhenti
// };

//FOR
//untuk angka 1 hingga angka 10 dan increment 1 maka jalankan program di bawah ini
// for (var iterator = 1; iterator <= 10; iterator++){
//     document.write('ini coba for' + '<br>')
// };


/* var siswa = 1;
while(siswa<=5){
    document.write('Siswa dengan nomor induk ' + siswa + ' TA Vista ' + '<br>')
    siswa +=1;
};
//AKU CEK YANG LAIN SI VAR DI FOR BEDA SAMA DI WHILE
for (var siswa = 6; siswa <= 10 ; siswa++) {
    document.write('Siswa dengan nomor induk ' + siswa + ' TA Intan' + '<br>')
}; */
/* 
var jmlSiswa =10;
var noSiswa =1;
var memberTeam =5; batas di while */

//ARRAY
//penampung data yang bisa nampung lebih dari 1 nilai dan tipe datanya tidak harus selalu sama
//cara mendeklarasikan array
/* var buah = [];
// isi buah
buah = ['apel', 'belimbing', 'anggur', 'duku', 'melon'] */

//cara tau tipe datanya apa?
/* document.write(typeof(buah) + '<br>'); //hasilnya object
document.write(buah + '<br>'); //hasilnya akan menampilkan semua isi buah
document.write(buah.length + '<br>'); //hasilnya 5
document.write(buah[4]  + '<br>'); //hasilnya melon karena startnya dari 0=apel */

var IniFungsi = function(){
    alert('hai ini fungsi')
};

var myArr = ['text', 456, true, IniFungsi, [2,3,4]];
document.write(myArr[1] + '<br>'); //hasilnya 123
document.write(myArr[4][1]); //dari data array terus masuk lagi ke 1

//contoh kalo lompat kaya di bawah akan otomatis dibuatkan index kedua isinya empty (claim di memory kita tapi kosong)
var myArr2 = [];
myArr2[0] = 'senin';
myArr2[1] = 'selasa';
myArr2[3] = 'kamis';

//cara hapus kamis manual
myArr2[3] = undefined;


var buah = [];
// isi buah
buah = ['apel', 'belimbing', 'anggur', 'duku', 'melon']

//1.Array function JOIN
document.write(buah.join('<br>'));
document.write('<br>');

//2. push dan pop bekerja di akhir element
//push menambahkan element di akhir
buah.push('durian');
document.write(buah.join('<br>'));
document.write('<br>');
//pop menghapus elemet di akhir
buah.pop();
document.write(buah.join('<br>'));
document.write('<br>');

//3. unshift dan shift bekerja di awal element
//unshift menambahkan element di awal
buah.unshift('Lengkeng');
document.write(buah.join('<br>'));
document.write('<br>');
//shift menghapus element di awal
buah.shift();
document.write(buah.join('<br>'));
document.write('<br>');
document.write('<br>');

//4. splice
//format splice (index awal, jmlhapus, elementbaru1, ...., elementbaru)
//menyisipkan data di tengah-tengah

buah.splice(2, 0, 'PEPAYA');
document.write(buah.join('<br>'));
document.write('<br>');
document.write('<br>');

//5. Slice
//membuat array baru dimana datanya ambil dari array yang sudah dibuat sebelumnya (start, end)
var newBuah = buah.slice(1,4); //tampilnya belimbing PEPAYA anggur
document.write(newBuah.join('<br>'));
document.write('<br>');
document.write('<br>');

//6. for each dan map
//for each tidak mengembalikan array
//setiap index dan element yang ada pada array buah lakukan function berikut. e element i index
buah.forEach(function(e,i) {
    document.write(i + ' = ' + e + '<br>')
})
document.write('<br>');
document.write('<br>');
//hasilnya
// 0 = apel
// 1 = belimbing
// 2 = PEPAYA
// 3 = anggur
// 4 = duku
// 5 = melon

//map mengembalikan array
//map kembaliannya berupa array
var newBuah2 = buah.map(function(e,i){
    return e + ' enak dimakan'
})
document.write(newBuah2.join('<br>'));
document.write('<br>');
document.write('<br>');

//
