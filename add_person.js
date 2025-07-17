// Get form and input field references
const form = document.getElementById("addPersonForm");
const serialField = document.getElementById("serial");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const address = document.getElementById("address");

// Add submit event listener to the form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission (page reload)

  // Create a person object using form values
  const person = {
    id: serialField.value.trim(),     // Use custom serial number as ID
    name: name.value.trim(),
    phone: phone.value.trim(),
    email: email.value.trim(),
    address: address.value.trim()
  };

  // Get existing people from localStorage or start with an empty array
  const people = JSON.parse(localStorage.getItem("people")) || [];

  // Check for duplicate serial number
  if (people.some(p => p.id === person.id)) {
    alert("❌ Serial number already exists. Please choose a unique one.");
    return;
  }

  // Add new person to the array and save back to localStorage
  people.push(person);
  localStorage.setItem("people", JSON.stringify(people));

  // Debug message to console (optional)
  console.log("✅ Saved to localStorage:", people);

  // Success message and reset form
  alert("✅ Person added successfully!");
  form.reset();
});
