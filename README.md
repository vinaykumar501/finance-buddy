# 💸 Finance Buddy
🚀 **Live Demo:** [https://vinaykumar501.github.io/finance-buddy/](https://vinaykumar501.github.io/finance-buddy/)


**Finance Buddy** is a browser‑based personal money‑tracking application built with **HTML, CSS & JavaScript**, using **localStorage**—no backend needed. Fully offline and secure on your own machine.

---

## 🎯 Objective

Easily manage borrowing and repayments, track balances, and view person‑wise financial details—all in one place.

---

## 🔧 Features

- **Add Person** (custom serial): name, phone, email, address  
- **Add Transaction**: select person, "Give"/"Receive", amount, reason, date  
- **Dashboard (index.html)**  
  - Total Borrowed • Total Repaid • Balance  
  - Recent 5 transactions  
  - Top 3 borrowers with details  
  - Filter by period (All / Last 7 Days / This Month / Last Month)  
  - Notes & reminders  
- **View People**: list of all persons with "View" links  
- **View Person**: full profile, all transactions, edit/delete person  
- **All Transactions**: table with option to delete each transaction  

---

## 🗂 File Structure

```
finance-buddy/
├── index.html              # Dashboard / Home
├── add_person.html         # Add Person form
├── add_transaction.html    # Add Transaction form
├── view_people.html        # List of people
├── view_person.html        # View and edit a person
├── edit_person.html        # Edit person data
├── all_transactions.html   # Table of all transactions
├── home.css                # Shared styles
├── home.js                 # Dashboard (index) JS
├── add_person.css          # Add person styles
├── add_person.js           # Add person logic
├── add_transaction.css     # Add transaction styles
├── add_transaction.js      # Add transaction logic
├── view_people.css         # View people styles
├── view_people.js          # View people logic
├── view_person.css         # View/edit person styles
├── view_person.js          # View/edit person logic
├── all_transactions.css    # Transactions list styles
├── all_transactions.js     # Transactions logic
├── README.md               # This file
└── LICENSE
```

---

## 🚀 Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/vinaykumar501/finance-buddy.git
   cd finance-buddy
   ```

2. **Open `index.html`** in your browser.

3. Use navigation to **add persons**, **record transactions**, view dashboard, etc.

4. **All data is saved locally**—to start fresh, clear your browser's localStorage.

---

## 📌 Notes

- Serial number is custom and unique per person.
- No database—your browser stores data in `localStorage`.
- For multi-user access or real backend, you'd need server-side implementation.

---

## 📄 License

MIT · Feel free to use and modify.

---

> 🔗 **GitHub Repo:**  
> [https://github.com/vinaykumar501/finance-buddy](https://github.com/vinaykumar501/finance-buddy)

---

Made with ❤️ by Vinay Kumar
