# Website CV & Portofolio Profesional - Dhafin U.F

Website CV (Curriculum Vitae) & Portofolio profesional, modern, elegan, dan minimalis yang dibuat khusus untuk **Dhafin U.F**, seorang siswa SMK jurusan **Teknik Jaringan Komputer (TKJ)** di **SMK TI Garuda Nusantara**, untuk melamar program magang (PKL) maupun peluang kerja sebagai **Junior Network Technician** di bidang IT.

---

## 🌟 Fitur Utama

1. **Desain Modern & Premium**:
   - Skema warna eksklusif: *Emerald Green* (`#059669` / `#10b981`), putih bersih, dan *Dark Slate / Deep Obsidian* (`#0f172a` / `#0b0f17`).
   - Tipografi modern menggunakan *Plus Jakarta Sans* dan *Space Grotesk*.
   - Efek kaca (*glassmorphism*) pada bilah navigasi, bayangan halus, dan mikro-interaksi responsif.

2. **Fitur Download CV ke PDF (Print-Ready)**:
   - Tombol **Download CV PDF** langsung mengaktifkan dialog simpan PDF peramban (`window.print()`).
   - Dilengkapi *print stylesheet* khusus (`@media print`) yang secara otomatis mengubah tampilan situs menjadi dokumen resume eksekutif standar **A4 portrait**, rapi, bebas dari tombol navigasi/formulir, dan ramah ATS (*Applicant Tracking System*).

3. **Dark Mode & Light Mode**:
   - Mendukung peralihan mode gelap dan terang dengan tombol ikon di pojok kanan atas.
   - Pilihan tema otomatis tersimpan di `localStorage` dan mendeteksi preferensi sistem pengguna.

4. **Navigasi & Interaktivitas Lengkap**:
   - Menu desktop & *mobile drawer* responsif dengan animasi mulus.
   - *Scrollspy* aktif yang menandai posisi section saat halaman digulir.
   - Tombol *Back to Top* dengan animasi transisi.
   - Tombol *Salin Kontak* (Copy to Clipboard) dengan notifikasi *toast popup*.

5. **Formulir Kontak Terintegrasi**:
   - **Kirim via WhatsApp**: Membuka aplikasi WhatsApp dengan pesan terformat otomatis.
   - **Kirim via Email**: Membuka aplikasi email pengirim dengan subjek dan format pesan otomatis.

---

## 📁 Struktur File

```text
cv-dhafin-uf/
├── index.html       # Struktur HTML5 semantik & konten lengkap CV
├── style.css        # Desain CSS modern, variabel tema (Dark/Light), responsif & print style
├── script.js        # Logika interaktif: Dark Mode, Navigasi Mobile, Download PDF, Form WhatsApp & Email
└── README.md        # Panduan penggunaan dan cara kustomisasi
```

---

## 🚀 Cara Menjalankan Website

1. Buka folder `C:\Users\User\.gemini\antigravity\scratch\cv-dhafin-uf\` di File Explorer komputer Anda.
2. Klik dua kali pada file `index.html` untuk langsung membukanya di browser apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).
3. Anda juga dapat menjalankannya melalui server lokal (seperti Live Server di VS Code).

---

## 🖨️ Cara Menyimpan CV Menjadi File PDF

1. Klik tombol **"Download CV PDF"** di bagian atas (Hero), di navigasi header, atau di kotak download bagian kontak.
2. Di jendela cetak yang muncul pada browser:
   - Pada kolom **Destination / Tujuan**: Pilih **"Save as PDF"** atau **"Simpan sebagai PDF"**.
   - Pada kolom **Paper size / Ukuran Kertas**: Pastikan memilih **A4**.
   - Pada opsi lanjutan, centang **"Background graphics"** (Grafis latar belakang) agar warna aksen tetap rapi.
3. Klik **Save / Simpan**, lalu tentukan lokasi penyimpanan berkas PDF Anda.

---

## ✏️ Cara Mengedit Data & Informasi Pribadi

Semua informasi kontak dan konfigurasi telah dirancang agar mudah diedit:

### 1. Mengubah Kontak di `script.js`
Buka file `script.js`, Anda akan melihat konfigurasi di bagian paling atas:
```javascript
const USER_CONFIG = {
  fullName: 'Dhafin U.F',
  role: 'Junior Network Technician',
  school: 'SMK TI Garuda Nusantara',
  email: 'dhafin.uf@example.com',        // Ganti dengan alamat email asli
  whatsapp: '6281200000000',            // Ganti nomor WA asli (tanpa tanda '+')
  whatsappDisplay: '+62 8xx-xxxx-xxxx',  // Tampilan nomor di layar
  location: 'Indonesia'                 // Ganti dengan kota domisili Anda
};
```

### 2. Mengubah Foto Profil
Secara bawaan, website menggunakan ilustrasi SVG modern teknisi jaringan berbingkai lingkaran. Jika Dhafin ingin menggunakan foto asli:
1. Simpan foto Anda (disarankan foto rasio 1:1 / kotak) ke dalam folder ini, misalnya dengan nama `profile.jpg`.
2. Buka `index.html`, cari elemen dengan ID `#profile-picture-container`, lalu ganti tag `<svg ...>...</svg>` dengan:
```html
<img src="profile.jpg" alt="Foto Profil Dhafin U.F" style="width: 100%; height: 100%; object-fit: cover;">
```

---

## 🛠️ Hak Cipta & Lisensi
Dibuat untuk kebutuhan portofolio dan pencarian kerja/magang Dhafin U.F (SMK TI Garuda Nusantara - Teknik Jaringan Komputer). Bebas digunakan dan dikembangkan lebih lanjut.
