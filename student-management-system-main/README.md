# 🎓 Student Management System

A simple and responsive **Student Management System** built using **HTML, Tailwind CSS, and JavaScript**.  
This project demonstrates CRUD operations with client-side storage using **LocalStorage**.

---

## 🔗 Live Repository

👉 https://github.com/Logicboy78/student-management-system

---

## 📌 Overview

This application allows users to:
- Add, edit, and delete student records  
- Store data directly in the browser using LocalStorage  
- Load initial data from a JSON file  

It is designed as a **beginner-to-intermediate frontend project** suitable for showcasing core JavaScript skills.

---

## ✨ Features

- ➕ Add new student details (Name, ID, Email, Contact)  
- ✏️ Edit existing student records  
- ❌ Delete student records  
- ✅ Form validation for accurate data entry  
- 💾 Persistent storage using LocalStorage  
- 📂 Initial data loading from `students.json`  
- 📱 Responsive UI with Tailwind CSS  

---

## 🛠️ Tech Stack

- HTML5  
- Tailwind CSS  
- JavaScript (Vanilla JS)  
- Browser LocalStorage API  

---

## 📂 Project Structure

```
student-management-system/
│
├── index.html        # UI structure
├── script.js         # Core logic
├── students.json     # Initial dummy data
└── README.md         # Documentation
```

---

## ⚙️ How It Works

### 1. On Page Load
- Checks if student data exists in LocalStorage  
- If not, loads data from `students.json`  

### 2. Form Submission
- Validates user input  
- Adds or updates student records  

### 3. Data Handling
- Stores data in LocalStorage  
- Automatically updates after every operation  

### 4. Table Rendering
- Dynamically displays student data using JavaScript  

---

## 🧪 Validations

- **Name** → Only alphabets allowed  
- **ID** → Numbers only  
- **Contact** → Minimum 10 digits  
- **Email** → Valid email format  

---

## ⚠️ Known Issues

- **"Unexpected end of JSON input"** may occur if:
  - `students.json` is empty  
  - File path is incorrect  
  - Project is not running on a server  
  - Browser cache is not cleared  

💡 Tip: Clear cache using DevTools → Application → Clear Storage  

---

## ▶️ How to Run

> ⚠️ Do NOT open `index.html` directly

### Option 1 (Recommended)
Use **VS Code Live Server**
- Install Live Server extension  
- Right-click → Open with Live Server  

### Option 2 (Python Server)

```bash
python -m http.server
```

Open in browser:
```
http://localhost:8000
```

---

## 📸 Project Preview

(Add a screenshot here)

```
![Preview](preview.png)
```

---

## 🔮 Future Improvements

- 🔍 Search and filter functionality  
- 🌐 Backend integration (Node.js / Express)  
- 🗄️ Database support (MongoDB / MySQL)  
- 🔐 Authentication system  
- 🎨 UI/UX enhancements and animations  

---

## 👨‍💻 Author

**Gitansh Kashyap**

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
