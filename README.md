# Sistem Checkout Produk Sederhana

## Deskripsi studi kasus

Program ini menghitung total pembayaran saat checkout berdasarkan harga satuan, jumlah produk, dan status keanggotaan pelanggan. Program memvalidasi bahwa harga dan jumlah produk bernilai positif serta jumlah produk berupa bilangan bulat. Member mendapat diskon 10% dari subtotal. Ongkos kirim gratis jika total setelah diskon minimal Rp250.000; jika kurang, ongkos kirim sebesar Rp15.000.

Program menampilkan total pembayaran akhir atau pesan `Input tidak valid` jika input tidak memenuhi validasi.

## Cara menjalankan program

1. Pastikan [Node.js](https://nodejs.org/) sudah terpasang.
2. Buka terminal pada folder proyek.
3. Atur nilai `hargaProduk`, `jumlahProduk`, dan `isMember` di bagian awal file `checkout.js`.
   - `hargaProduk`: harga satuan dalam rupiah, lebih dari 0.
   - `jumlahProduk`: jumlah barang berupa bilangan bulat positif.
   - `isMember`: `true` untuk member atau `false` untuk non-member.
4. Jalankan perintah berikut:

   ```bash
   node checkout.js
   ```

5. Baca hasil total pembayaran atau pesan validasi pada terminal.

## Ringkasan penggunaan AI

AI digunakan sebagai bantuan dalam menyusun dokumentasi proyek dan tabel skenario pengujian di `testing.md`, termasuk menghitung hasil yang diharapkan. Hasil skenario dicocokkan dengan fungsi `hitungCheckout` di `checkout.js`.

## Berkas proyek

- `checkout.js` — program checkout.
- `analysis.md` — analisis masalah dan alur solusi.
- `pseudocode.md` — pseudocode proses checkout.
- `testing.md` — skenario dan hasil pengujian.
- `sistem-checkout.drawio.png` — diagram alur checkout.
