# Pseudocode: Sistem Checkout Produk Sederhana

START
    INPUT hargaProduk, jumlahProduk, isMember

    // Validasi Input
    IF (hargaProduk <= 0) OR (jumlahProduk <= 0) OR (jumlahProduk MOD 1 != 0) THEN
        OUTPUT "Input tidak valid"
        STOP
    ENDIF

    // Menghitung Subtotal
    SET subtotal = hargaProduk * jumlahProduk

    // Menghitung Diskon Berdasarkan Status Member
    IF isMember == TRUE THEN
       SET diskon = subtotal * 0.10
    ELSE
       SET diskon = 0
    ENDIF

    // Menghitung Total Setelah Diskon
    SET totalSetelahDiskon = subtotal - diskon

    // Menentukan Ongkos Kirim
    IF totalSetelahDiskon >= 250000 THEN
       SET ongkir = 0
    ELSE
       SET ongkir = 15000
    ENDIF

    // Menghitung Total Pembayaran Akhir
    SET totalPembayaran = totalSetelahDiskon + ongkir

    // Output Hasil
    OUTPUT totalPembayaran
END