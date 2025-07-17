// Get query parameter from URL (e.g., ?id=123)
function getQueryParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

const oldId = getQueryParam("id"); // The original serial number from URL

// Form fields
const serialField = document.getElementById("serial");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const address = document.getElementById("address");
const form = document.getElementById("editPersonForm");

// Load data from localStorage
let people = JSON.parse(localStorage.getItem("people")) || [];
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Find the person to edit
const person = people.find(p => p.id === oldId);

if (!person) {
  alert("❌ Person not found!");
  window.location.href = "4view_people.html"; // Redirect if not found
} else {
  // Pre-fill form with current details
  serialField.value = person.id;
  name.value = person.name;
  phone.value = person.phone;
  email.value = person.email;
  address.value = person.address;
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newId = serialField.value.trim();

  // Prevent duplicate serial numbers if changed
  if (newId !== oldId && people.some(p => p.id === newId)) {
    alert("❌ Serial number already exists!");
    return;
  }

  // Update the person's information
  people = people.map(p => {
    if (p.id === oldId) {
      return {
        id: newId,
        name: name.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        address: address.value.trim()
      };
    }
    return p;
  });

  // Update all transactions linked to the old serial number
  transactions = transactions.map(t => {
    if (t.personId === oldId) {
      return { ...t, personId: newId };
    }
    return t;
  });

  // Save updates to localStorage
  localStorage.setItem("people", JSON.stringify(people));
  localStorage.setItem("transactions", JSON.stringify(transactions));

  alert("✅ Person details updated!");
  window.location.href = `5view_person.html?id=${newId}`; // Redirect to updated view page
});
