
# Nama Kelompok:
- Andrew Pasaribu (50423175)
- Muhammad Hafiz Alpakih Purba (50423928)
- Revaldo Leon Rizky Sinambela (51423275)

# 🎬 **Movie Watchlist App**

Aplikasi sederhana untuk menyimpan daftar film yang ingin ditonton, dibuat menggunakan **ReactJS, PHP, TailwindCSS, dan MySQL**.
Aplikasi ini mendukung fitur **CRUD** lengkap: tambah film, tampilkan film, edit film, dan hapus film.

## 🚀 **Tech Stack**

Aplikasi ini dibangun menggunakan teknologi berikut:

| Bagian          | Teknologi             |
| --------------- | --------------------- |
| Frontend        | ReactJS + Vite        |
| Styling         | TailwindCSS           |
| Backend         | PHP Native (REST API) |
| Database        | MySQL                 |
| Version Control | Git & GitHub          |

## 📌 **Fitur Aplikasi**

- ✔️ Menampilkan semua film dari database
- ✔️ Menambahkan film baru
- ✔️ Mengedit film menggunakan *MovieForm* yang sama
- ✔️ Menghapus film
- ✔️ Form otomatis terisi saat mode edit
- ✔️ Setelah edit selesai, form kembali kosong
- ✔️ Desain responsif menggunakan TailwindCSS

## 🗂 **Struktur Folder**

```
Ujian_PWEB/
│── src/
│   ├── api/
│   │   └── action.php
│   ├── db/
│   │   └── 127_0_0_1.sql
│   ├── components/
│   │   ├── MovieForm.jsx
│   │   ├── MovieItem.jsx
│   │   └── MovieList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│── index.html
│── package.json
│── vite.config.js
```

## 🗄 **Database Structure**

Tabel yang digunakan:

```sql
CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INT,
    genre VARCHAR(100),
    poster TEXT,
    is_watched BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## ⚙️ **Cara Menjalankan Aplikasi**

### **1️⃣ Import Database**

* Buka *phpMyAdmin*
* Buat database: **movie_db**
* Import file: `src/db/127_0_0_1.sql`

### **2️⃣ Jalankan Backend (PHP)**

Pastikan backend berada di:

```
http://localhost/api/action.php
```

Jika memakai XAMPP:

* Pindahkan folder `Ujian_PWEB/src/api/` ke dalam `htdocs`
  atau
* Sesuaikan URL fetch di frontend sesuai lokasi backend

### **3️⃣ Jalankan Frontend (React + Vite)**

Di terminal:

```bash
npm install
npm run dev
```

Frontend berjalan di:

```
http://localhost:5173
```

## 🔄 **Alur Kerja Utama Aplikasi**

### **1. Load Movie**

1. React dijalankan → `useEffect()` memanggil `loadMovies()`
2. React mengirim request GET → action.php
3. PHP mengambil semua data dari database
4. PHP kirim JSON ke frontend
5. React menampilkan daftar film

### **2. Tambah Movie**

1. User isi form → klik **Add Movie**
2. React kirim request POST → action.php
3. Backend menyimpan ke database
4. List film otomatis ter-refresh

### **3. Edit Movie**

1. User klik tombol **Edit**
2. Data film masuk ke `initialData` MovieForm
3. User ubah data → klik **Update Movie**
4. React mengirim PUT → action.php
5. Backend update data di database
6. Form kembali kosong → list ter-refresh

### **4. Delete Movie**

1. User klik tombol **Delete**
2. React kirim DELETE → action.php
3. Backend menghapus data
4. React menampilkan daftar terbaru
