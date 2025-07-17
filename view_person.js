document.getElementById("deletePerson").addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this person and all their transactions?")) {

    // Load existing data
    const people = JSON.parse(localStorage.getItem("people")) || [];
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // Filter out the person and their transactions
    const updatedPeople = people.filter(p => p.id !== personId);
    const updatedTransactions = transactions.filter(t => t.personId !== personId);

    // Save updated data back to localStorage
    localStorage.setItem("people", JSON.stringify(updatedPeople));
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

    alert("✅ Person and their transactions deleted successfully.");
    window.location.href = "4view_people.html"; // Redirect to home page
  }
});
