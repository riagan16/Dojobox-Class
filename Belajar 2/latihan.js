// document.write('Selamat datang kembali');
// var bil1 = parseInt(prompt('Input bilangan 1: ') );
// var bil2 = parseInt(prompt('Input bilangan 2: ') );
// var bil3 = bil1+bil2;
// // yg dicomment bawah kalo ditambahin si document write bil 1 sama 2 jadi ga nampil
// // document.write('bilangan 1' + bil1 + '<br>') );
// // document.write('bilangan 1' + bil2 + '<br>') );
// document.write('jumlah bilangan 1 + bilangan 2: ' + bil3 + '<br>');


//variable hanya menampung 1 data dan tipe datanya spesifik. 
//disimpennya di memory//
// var nilai = parseInt(prompt('Masukkan nilai: ') );
// var lulus = (nilai >= 70) ? 'Anda Lulus': 'Anda tidak lulus';
// document.write (lulus);

// var namaPenguji = prompt('Masukan nama: ' , "yuhuuuu");
// document.write('Halo ' + namaPenguji + ', Welcome!' + '<br>');

// var konfirmasi = confirm('Yakin mau lanjut?');
// document.write(konfirmasi==true ? 'Iya' : 'Tidak');

//cara lain
// var konfirmasi = confirm('Yakin mau lanjut?');
// var hasil = (konfirmasi==true) ? 'Iya' : 'Tidak';
// document.write(hasil);

// var angka = parseInt(prompt('Input angka: '));
// if(angka>10){
//     document.write('bilangan yang dimasukkan lebih dari 10')
// };

// var nama = 'Kamu'; //kalo mau pake prompt bisa juga
// if(nama=='Aku'){
//     document.write('Bisa')
// }else{
//     document.write('Tidak bisa')
// };

// var nilai = prompt('masukkan angka: ');
// if(nilai%2 == 0){
//     document.write(nilai + ' merupakan bilangan genap')
// }else if(nilai&2 == 1){
//     document,write(nilai + ' merupakan bilangan ganjil')
// }else{
//     document.write(nilai + ' bukan bilangan')
// };


// switch ada break. kalo ada break berarti case selanjutnya ga akan dijalankan kalo case1 sudah sesuai

// var nilaiKepuasan = prompt('Masukkan nilai kepuasan kamu', '0-5');

// switch(nilaiKepuasan){
//     case '0':
//         document.write('Saya sangat kecewa')
//         break
//     case '1':
//         document.write('Saya kecewa')
//         break
//     case '2':
//         document.write('Saya tidak puas')
//         break
//     case '3':
//         document.write('Saya puas')
//         break
//     case '4':
//         document.write('Saya sangat puas')
//         break
//     case '5':
//         document.write('Saya terkesan')
//         break
//     default :
//         document.write('Masukkan range angka yang sesuai')
// }
     


// No where it says that switch expression or the case expression has to be a number, string, boolean or anything. true is perfectly acceptable as a switch expression and y < 20 is perfectly acceptable as case expression. Keep in mind that comparison between switch expression and case expressions are made using === operator.

// soalnya itu solanya kondisi penentu mba apa mas yak kalo missal dia tidak ada penentu itu semisal kayak codingan ini ar jawab = prompt("Kamu beruntung! Silahakn pilih hadiahmu dengan memasukan angka 1 sampai 5");
//         var hadiah = "";
        
//         switch(jawab){
//             case "1":
//                 hadiah = "Tisu";
//                 break;
//             case "2":
//                 hadiah = "1 Kotak Kopi";
//                 break;
//             case "3":
// var jawab = prompt("Kamu beruntung! Silahakn pilih hadiahmu dengan memasukan angka 1 sampai 5");
//         var hadiah = "";
        
//         switch(jawab){
//             case "1":
//                 hadiah = "Tisu";
//                 break;
//             case "2":
//                 hadiah = "1 Kotak Kopi";
//                 break;
//             case "3":
//                 hadiah = "Sticker";
//                 break;
//             case "4":
//                 hadiah = "Minyak Goreng";
//                 break;
//             case "5":
//                 hadiah = "Uang Rp 50.000";
//                 break;
//             default:
//                 document.write("<p>Opps! anda salah pilih</p>");
//         }
//         if(hadiah === ""){
//             document.write("<p>Kamu gagal mendapat hadiah</p>");
//         } else {
//             document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
//         }

//true  jadinya dia digunakan jika sudah ada penentu yang digunakan


// In the code you posted, the first true case will be executed until break is encountered or the switch block ends

var nilaiSiswa = parseInt(prompt('Masukkan nilai siswa' , '0-100'));

switch(true){
    case (nilaiSiswa >= 90):
        document.write('Grade A')
        break
    case (nilaiSiswa >= 80):
        document.write('Grade B')
        break   
    case (nilaiSiswa >= 70):
        document.write('Grade C')
        break 
    case (nilaiSiswa >= 60):
        document.write('Grade D')
        break
    default:
        document.write('Grade E')
};

