// Load transactions and people from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const people = JSON.parse(localStorage.getItem("people")) || [];
const tbody = document.getElementById("allTransactionTable");

// Render the transaction table
function renderTable() {
  tbody.innerHTML = ""; // Clear existing rows

  transactions.forEach((txn) => {
    // Find person by personId
    const person = people.find(p => p.id == txn.personId);
    const name = person ? person.name : "Unknown";

    // Create a table row for each transaction
    const row = document.createElement("tr");
    row.className = txn.type; // for styling "give" or "receive"

    row.innerHTML = `
      <td>${txn.date}</td>
      <td>${name}</td>
      <td>${txn.type.toUpperCase()}</td>
      <td>₹${txn.amount}</td>
      <td>${txn.reason}</td>
      <td><button onclick="deleteTxn(${txn.id})" style="color:red;">Delete</button></td>
    `;

    tbody.appendChild(row);
  });
}

// Delete a transaction by ID
function deleteTxn(id) {
  if (confirm("Are you sure you want to delete this transaction?")) {
    // Remove the transaction from the array
    transactions = transactions.filter(t => t.id !== id);

    // Update localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // Re-render the table
    renderTable();
  }
}

// Initial render
renderTable();
