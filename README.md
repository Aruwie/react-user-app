# React User App

Aplikasi frontend berbasis React yang terintegrasi dengan API Reqres untuk fitur authentication dan manajemen user.

---

## 🚀 Features

* Register User
* Login User
* Logout
* Protected Route (halaman tertentu hanya bisa diakses jika login)
* List Users (dengan pagination)
* User Detail
* Default Avatar jika gambar gagal dimuat
* Responsive UI dengan Tailwind CSS

---

## 🛠️ Tech Stack

* React (Vite)
* React Router DOM
* Axios
* Tailwind CSS
* Context API

---

## 📡 API Integration

Menggunakan API dari:
https://reqres.in

Endpoint yang digunakan:

* `POST /api/register`
* `POST /api/login`
* `GET /api/users`
* `GET /api/users/:id`

Semua request membutuhkan header:

```
x-api-key: YOUR_API_KEY
```

---

## ⚠️ Important Notes

* Register hanya berhasil untuk user yang sudah terdaftar di Reqres
* Jika tidak sesuai, akan return error (ini memang behavior dari API)
* Gambar user dari API kadang tidak bisa di-load → fallback ke default avatar

---

## 🔐 Authentication Flow

1. User login / register
2. Token disimpan di Context API
3. Protected Route mengecek token
4. Jika tidak ada token → redirect ke login

---

## 📂 Project Structure

```
src/
│
├── assets/            # default avatar
├── components/        # Navbar, ProtectedRoute
├── context/           # AuthContext
├── pages/             # Login, Register, Home, UserDetail
├── routes/            # AppRoutes
├── services/          # axios config
```

---

## ▶️ Installation & Run

```bash
git clone <repo-url>
cd react-user-app
npm install
npm run dev
```

---

## 🔑 API Key Setup

Tambahkan API Key di axios config:

```js
headers: {
  "x-api-key": "YOUR_API_KEY"
}
```

---

## ✨ Additional Features

* Loading state
* Error handling UI
* Better UI/UX design
* Search user
* Dark mode

---

## 📌 GitHub Commit Convention

```
feat: add login feature
fix: handle default avatar
feat: implement protected route
fix: add api key header
```

---

## 📄 Author

Dibuat untuk assignment React Fundamentals.
