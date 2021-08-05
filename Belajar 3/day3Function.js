//parameter adalah nilai yang kita gunakan ketika membuat sebuah function
//parameter opsional
//bedanya ekspresi apa? index apa? paramete?
//tergantung developernya

//1. function declaration
/* function jmlDuahBilangan(a,b) {
    var total;
    total = a+b;

    return total //ada nilai yang dikembalikan. optional
}

//2. function expression
var jmlDuahBilangan = function(a,b) {
    var total;
    total = a+b;

    return total //ada nilai yang dikembalikan. optional
} */

var a=8;
var b=4;

function volKubus(sisi) {
    var volume
    volume = sisi * sisi * sisi
    return volume
}
function jmlVolKubus(sisiKubusa,sisiKubusb) {
   
    var jumlah;
    var volA;
    var volB;

    volA = volume(sisiKubusa);
    volB = volume(sisiKubusb);

    jumlah = a+b;

    return jumlah;
}
document.write('sisi kubus a: ' + a + '<br>');
document.write('sisi kubus a: ' + b + '<br>');
document.write('volume kubus a: ' + volA + '<br>');
document.write('volume kubus a: ' + volB+ '<br>');
document.write('jumlah volume kubus a dan b: ' + jumlah + '<br>');