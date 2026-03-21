# 🛒 E-Cart – Modern E-Commerce Web App

E-Cart is a responsive e-commerce web application built using **React.js** and **Tailwind CSS**, focused on real-world state management using **Redux Toolkit**.  
The project demonstrates core e-commerce functionalities like product listing, cart management, and dynamic pricing.

---

## 🚀 Live Demo
🔗 https://e-cart-n8.vercel.app/

---

## 📌 Features

- 📦 Product listing using API integration  
- 🛒 Add to Cart functionality  
- ➕ Increase / ➖ Decrease item quantity  
- 💰 Dynamic total price calculation  
- 🔄 Centralized state management using Redux Toolkit  
- 📱 Fully responsive UI (mobile + desktop)  
- ⚡ Fast performance using Vite  

---

## 🧠 Key Learnings

This project helped me understand:

- Managing global state using **Redux Toolkit**
- Avoiding prop drilling in React applications
- Handling real-time UI updates based on state changes
- Implementing derived state (total price calculation using `reduce`)
- Structuring scalable frontend applications

---

## ⚡ Challenges Faced

- ❌ Data inconsistency while adding items to cart  
- ❌ Quantity not updating correctly across components  
- ❌ Incorrect total calculation (NaN issues)  
- ❌ Managing state across multiple components  

---

## ✅ Solutions Implemented

- Used **Redux Toolkit as a single source of truth**
- Implemented proper reducers for:
  - Adding items  
  - Removing items  
  - Updating quantity  
- Ensured UI sync using centralized state
- Used `reduce()` for accurate total price calculation

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **State Management:** Redux Toolkit  
- **Build Tool:** Vite  
- **API:** DummyJSON API  

---

## 📂 Project Structure

src/
├── components/
├── redux/
│ ├── slice.js
│ ├── store.js
├── pages/
├── App.jsx
└── main.jsx


---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SolankiAman004/E-Cart.git

# Navigate to project
cd E-Cart

# Install dependencies
npm install

# Run development server
npm run dev

