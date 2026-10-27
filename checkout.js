// Input
let hargaProduk = 300000;
let jumlahProduk = 1.6;
let isMember = true;

// function perhitungan total pembayaran saat checkout
function hitungCheckout(harga, jumlah, isMember){
    // validasi input
    if (harga <= 0 || jumlah <= 0 || jumlah % 1 != 0) {
        return 'Input tidak valid';
    }
    
    // hitung subtotal
    const subtotal = harga * jumlah;

    // hitung diskon berdasarkan status member
    let diskon = 0;
    if (isMember === true) {
        diskon = subtotal * 0.1;
    }

    // hitung total setelah diskon
    const totalSetelahDiskon = subtotal - diskon;

    // menentukan ongkos kirim
    let ongkir = 0;
    if (totalSetelahDiskon < 250000) {
        ongkir = 15000;
    } 

    // hitung total pembayaran akhir
    const totalBayar = totalSetelahDiskon + ongkir;
    return totalBayar;
}

const checkout = hitungCheckout(hargaProduk, jumlahProduk, isMember);
//Output
console.log(checkout);