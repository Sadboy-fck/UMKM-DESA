document.addEventListener("DOMContentLoaded", () => {
    // Memuat Berita Admin
    const tempatBerita = document.getElementById("teks-berita");
    tempatBerita.textContent = dataAdmin.beritaTerbaru;

    // Memuat Daftar Produk
    const tempatKatalog = document.getElementById("katalog-produk");

    dataAdmin.daftarProduk.forEach(item => {
        // Membuat teks pesan WA otomatis
        // Hasilnya: "Halo Warung Mang Ujang, saya mau pesan: Kopi Hitam Bubuk Asli 200gr"
        let pesanWA = `Halo ${item.namaToko}, saya mau pesan: ${item.namaProduk}. Apakah masih ada?`;
        let linkWA = `https://wa.me/${item.nomorWA}?text=${encodeURIComponent(pesanWA)}`;

        // Membuat Kartu HTML untuk setiap produk
        const cardHtml = `
            <div class="card">
                <img src="${item.gambar}" alt="${item.namaProduk}">
                <div class="card-info">
                    <div class="toko-nama">🏪 ${item.namaToko}</div>
                    <div class="produk-nama">${item.namaProduk}</div>
                    <div class="produk-harga">${item.harga}</div>
                    <a href="${linkWA}" class="btn-wa" target="_blank">📲 Pesan via WA</a>
                </div>
            </div>
        `;
        
        // Memasukkan kartu ke dalam grid
        tempatKatalog.innerHTML += cardHtml;
    });
});
