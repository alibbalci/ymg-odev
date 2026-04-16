# Basit Kutuphane Uygulamasi

Bu proje iki parcadan olusur:

- `backend`: Spring Boot REST API
- `frontend`: React arayuzu

## Ozellikler

- Kitap ekleme
- Kitap listeleme
- Kitap silme
- `books` tablosunda `title` ve `author` alanlarini tutma

## Backend Calistirma

```bash
cd backend
mvn spring-boot:run
```

Backend varsayilan olarak `http://localhost:8080` adresinde calisir.

H2 konsolu:

- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:librarydb`
- Kullanici: `sa`
- Sifre: bos

## Frontend Calistirma

```bash
cd frontend
npm install
npm run dev
```

Frontend varsayilan olarak `http://localhost:5173` adresinde calisir.
