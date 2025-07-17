// Get the transaction form element
const form = document.getElementById("addTransactionForm");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload on form submit

  // Create a new transaction object using form values
  const transaction = {
    id: Date.now(), 
    personId: document.getElementById("serialNumber").value.trim(), 
    amount: parseFloat(document.getElementById("amount").value),    
    type: document.getElementById("type").value,                    
    reason: document.getElementById("reason").value,               
    date: document.getElementById("date").value                     
  };

  // Retrieve existing transactions from localStorage or start with empty array
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // Add new transaction to the list
  transactions.push(transaction);

  // Save updated transactions list back to localStorage
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Show success message and reset the form
  alert("✅ Transaction added successfully!");
  form.reset(); // Clear form fields
});
