# 💸 Finance Buddy

**Finance Buddy** is a browser-based personal money tracking application built using **HTML, CSS, and JavaScript**. It helps you manage borrowing, repayments, and person-wise tracking — all offline with no backend, using your browser’s local storage.

---

## 🎯 Objective

The goal of Finance Buddy is to provide a simple and user-friendly interface to:

- Record money borrowed or repaid with any person  
- Track total balances and transaction summaries  
- View person-wise financial details  
- See recent transactions and top borrowers  
- Maintain personal notes/reminders  

---

## 🔧 Features

### 👤 Add Person
- Input serial number, name, phone, email, and address  
- Serial number is used as a unique ID  
- Validated to avoid duplicates  

### 💵 Add Transaction
- Select a person by serial number  
- Choose between “Give” (borrowed) or “Receive” (repaid)  
- Add amount, reason, and date  

### 🏠 Home Dashboard
- **Total Summary** – borrowed, repaid, and balance  
- **Recent Transactions** – latest 5 records  
- **Top 3 Borrowers** – ranked by borrowed amount  
- **Filter by Time Period** – All / Last 7 Days / This Month / Last Month  
- **Notes** – Save, edit, and delete your financial reminders  

### 🔍 View People
- Table showing all persons added  
- Quick access to individual profiles  

### 👁️ View Person
- Displays full details and balance  
- Shows all transactions related to that person  
- Option to edit or delete the person  

### 📜 All Transactions
- Table of all transactions  
- Option to delete each record  

---

## 🗂 File Structure

```
finance-buddy/
├── 1home.html              # Dashboard
├── 2add_person.html        # Add a new person
├── 3add_transaction.html   # Record transaction
├── 4view_people.html       # View list of people
├── 5view_person.html       # Person profile page
├── 6edit_person.html       # Edit person data
├── 7all_transactions.html  # View all transactions
├── home.css                # Global styles
├── home.js                 # JS for dashboard logic
└── README.md               # Project info
```

---

## 🚀 How to Use

1. **Clone or Download**
   ```bash
   git clone https://github.com/vinaykumar501/finance-buddy.git
   ```

2. **Run the Project**
   - Open `1home.html` in your browser  
   - Add people using `2add_person.html`  
   - Record transactions and explore features  

3. **Data Storage**
   - Uses `localStorage` in the browser  
   - All data stays in the same browser (no backend)  
   - Works fully offline  

---

## 📌 Notes

- This app is meant for **personal use** on your device.  
- Data is **not shared or synced** between devices.  
- To start fresh, clear your browser's `localStorage` manually.  

---

## 📄 License

This project is **open source** and free to use. Built for learning and personal productivity.  

---

**Made with ❤️ by [Vinay Kumar](https://github.com/vinaykumar501)**
