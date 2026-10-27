# Analysis: Sistem Checkout Produk Sederhana
## 1. Problem Decomposition
Pemisahan Input, Validasi, Proses perhitungan, dan Output yang terdapat pada studi kasus.
### A. Input
* **hargaProduk:** Harga satuan dari produk yang ingin dibeli. Harus berupa angka positif.
* **jumlahProduk:** Kuantitas barang yang dibeli. Harus berupa bilangan bulat positif.
* **isMember:** Status keanggotaan pembeli yang bernilai boolean (`true` jika member, `false` jika bukan member).
### B. Proses
1. **Validasi Input:** Memeriksa apakah `hargaProduk > 0` dan `jumlahProduk` adalah bilangan bulat positif. Jika tidak valid, tampilkan pesan error *"Input tidak valid"* dan hentikan perhitungan.
2. **Perhitungan Subtotal:** Menghitung nilai dasar transaksi dengan rumus: `Subtotal = hargaProduk * jumlahProduk`.
3. **Perhitungan Diskon:** Menentukan besar diskon berdasarkan status member. `Member` mendapatkan diskon 10% dari subtotal, sedangkan `non-member` tidak mendapatkan diskon.
4. **Perhitungan Total Setelah Diskon:** Mengurangkan nominal diskon dari subtotal.
5. **Penentuan Ongkos Kirim:** Mengecek apakah `total setelah diskon` minimal Rp250.000. Jika ya, `ongkos kirim` adalah Rp0 (gratis); jika kurang dari Rp250.000, `ongkos kirim` ditetapkan sebesar Rp15.000.
6. **Perhitungan Total Pembayaran:** Menjumlahkan `total setelah diskon` dengan `ongkos kirim`.
### C. Output
* Menampilkan *"total pembayaran akhir"*.
* Atau menampilkan pesan error *"Input tidak valid"* jika kondisi validasi tidak terpenuhi.
---
## 2. Pattern Recognition
Dalam membangun program ini, terdapat beberapa pola logika pemrograman yang diterapkan:
* **Pola Validasi:** Memeriksa kondisi data input di awal eksekusi program guna mencegah perhitungan lanjut jika data tidak sesuai aturan.
* **Pola Kondisional Bercabang:** Penggunaan struktur percabangan untuk menentukan pemberian `diskon` berdasarkan `status keanggotaan`. Dan penentuan `ongkos kirim` berdasarkan nilai `total setelah diskon`.
* **Pola Sekuensial Perhitungan Beruntun:** Alur kalkulasi bertahap mulai dari subtotal -> diskon -> total setelah diskon -> ongkos kirim -> total pembayaran.
---
## 3. Abstraction
Penggunaan hargaProduk, jumlahProduk, isMember; tanpa foto produk dan nama produk tidak mempengaruhi proses perhitungan.
---
## 4. Algorithmic Thinking
Urutan instruksi logis langkah demi langkah yuntuk menyelesaikan perhitungan checkout dari awal hingga akhir:
1. **Mulai (Start):** Program siap menerima input data dari pengguna.
2. **Terima Input:** Ambil nilai `hargaProduk`, `jumlahProduk`, dan `isMember`.
3. **Evaluasi Validasi:**
   * Apakah `hargaProduk <= 0` atau `jumlahProduk <= 0` atau `jumlahProduk` bukan bilangan bulat?
   * Jika **Ya**, cetak pesan `"Input tidak valid"` lalu akhiri program (*End*).
   * Jika **Tidak**, lanjutkan ke langkah berikutnya.
4. **Hitung Subtotal:** Kalikan `hargaProduk` dengan `jumlahProduk`. Simpan hasilnya ke dalam variabel `subtotal`.
5. **Hitung Diskon:**
   * Periksa apakah `isMember == true`.
   * Jika **Ya**, hitung `diskon = subtotal * 0.10`.
   * Jika **Tidak**, tetapkan `diskon = 0`.
6. **Hitung Total Setelah Diskon:** Kurangi `subtotal` dengan `diskon`. Simpan ke variabel `totalSetelahDiskon`.
7. **Tentukan Ongkos Kirim:**
   * Periksa apakah `totalSetelahDiskon >= 250000`.
   * Jika **Ya**, tetapkan `ongkir = 0`.
   * Jika **Tidak**, tetapkan `ongkir = 15000`.
8. **Hitung Total Akhir:** Jumlahkan `totalSetelahDiskon` dengan `ongkir`. Simpan sebagai `totalPembayaran`.
9. **Tampilkan Hasil:** Cetak rincian berupa `subtotal`, `diskon`, `ongkir`, dan `totalPembayaran` ke layar.
10. **Selesai (End):** Proses eksekusi program rampung.