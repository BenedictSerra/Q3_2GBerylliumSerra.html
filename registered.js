const storage = "clubsignups";

const table = document.getElementById("signupTable");

const signups = JSON.parse(localStorage.getItem(storage)) || [];

if (signups.length === 0) {
  table.innerHTML = `
    <tr>
      <td colspan="6">No signups found.</td>
    </tr>
  `;
} else {
  signups.forEach(signup => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${signup.studentId}</td>
      <td>${signup.fullName}</td>
      <td>${signup.email}</td>
      <td>${signup.gradeLevel}</td>
      <td>${signup.stay}</td>
      <td>${signup.club}</td>
    `;

    table.appendChild(row);
  });
}