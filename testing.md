# Pengujian Sistem Checkout

Pengujian dijalankan pada fungsi `hitungCheckout` di `checkout.js`.

| No. | Skenario | hargaProduk | jumlahProduk | isMember | Diskon | Ongkir | Hasil yang diharapkan | Hasil aktual | Status |
|---:|---|---:|---:|:---:|---:|---:|---|---|:---:|
| 1 | Member | Rp100.000 | 3 | `true` | Rp30.000 | Rp0 | Rp270.000 | Rp270.000 | Lulus |
| 2 | Non-member | Rp100.000 | 1 | `false` | Rp0 | Rp15.000 | Rp115.000 | Rp115.000 | Lulus |
| 3 | Total setelah diskon < Rp250.000 | Rp100.000 | 2 | `false` | Rp0 | Rp15.000 | Rp215.000 | Rp215.000 | Lulus |
| 4 | Total setelah diskon = Rp250.000 | Rp250.000 | 1 | `false` | Rp0 | Rp0 | Rp250.000 | Rp250.000 | Lulus |
| 5 | Total setelah diskon > Rp250.000 | Rp300.000 | 1 | `true` | Rp30.000 | Rp0 | Rp270.000 | Rp270.000 | Lulus |
| 6 | jumlahProduk = 0 | Rp100.000 | 0 | `false` | — | — | `Input tidak valid` | `Input tidak valid` | Lulus |
| 7 | jumlahProduk tidak bulat | Rp100.000 | 1,5 | `false` | — | — | `Input tidak valid` | `Input tidak valid` | Lulus |
| 8 | hargaProduk tidak valid (negatif) | -Rp10.000 | 1 | `false` | — | — | `Input tidak valid` | `Input tidak valid` | Lulus |

Pengujian ulang menggunakan fungsi langsung dari `checkout.js`; seluruh delapan skenario lulus.




