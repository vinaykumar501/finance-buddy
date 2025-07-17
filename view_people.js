const people = JSON.parse(localStorage.getItem("people")) || [];  // Load people from localStorage
const tbody = document.getElementById("peopleTable");             // Table body to display people

people.forEach(p => {
  const row = document.createElement("tr");  // Create a new row for each person
  row.innerHTML = `
    <td>${p.id}</td>
    <td>${p.name}</td>
    <td>${p.phone}</td>
    <td>
      <a href="5view_person.html?id=${encodeURIComponent(p.id)}">🔍 View</a>
    </td>
  `;
  tbody.appendChild(row);  // Add the row to the table
});
