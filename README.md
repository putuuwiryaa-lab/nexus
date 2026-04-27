# Nexus 2D - Vercel Version

Versi web statis dari aplikasi Nexus 2D. Sistem PIN/VIP sudah dihapus, jadi user langsung masuk ke halaman utama.

## Jalankan lokal

```bash
npm install
npm run build
npm start
```

Atau buka langsung:

```bash
public/index.html
```

## Deploy ke GitHub + Vercel

1. Buat repository baru di GitHub, misalnya `nexus-2d-vercel`.
2. Upload semua file dari folder ini ke repository tersebut.
3. Buka Vercel, pilih **Add New > Project**.
4. Import repository GitHub tadi.
5. Framework Preset: **Other**.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Klik **Deploy**.

## Perubahan dari APK

- Menghapus layar login `Akses VIP`.
- Menghapus input PIN, device ID, validasi PIN, status weekly/pro, dan logout.
- Aplikasi langsung menampilkan `Engine Poltar`.
- Menghapus anti-devtools/debugger trap supaya aman dipakai sebagai website normal.
