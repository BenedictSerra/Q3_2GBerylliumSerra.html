const storage = "clubsignups";


const form = document.getElementById("dForm");
const button = document.getElementById("viewBtn");


button.addEventListener("click", () => {
  window.location.href = "registered.html";
});


form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const ok = confirm("Are you sure you want to submit?");
  if (!ok) return;


  const studentId = document.getElementById("Student").value.trim();
  const fullName = document.getElementById("Fname").value.trim();
  const birthday = document.getElementById("Bday").value;
  const email = form.elements["Eadress"].value.trim();
  const mobile = form.elements["Mnum"].value.trim();
  const gradeLevel = form.elements["Glevel"].value;
  const stay = form.elements["Stay"].value;
  const club = form.elements["Club"].value;
  const reason = document.getElementById("Reason").value.trim();
  const dpAgreed = document.getElementById("dp").checked;
  const about = document.getElementById("about").value.trim();




  const signup = {
    studentId,
    fullName,
    birthday,
    email,
    mobile,
    gradeLevel,
    stay,
    club,
    reason,
    about,
  };


  let signups = [];
  const existing = localStorage.getItem(storage);

  if (existing) {
    try {
      signups = JSON.parse(existing);
      if (!Array.isArray(signups)) signups = [];
    } catch {
      signups = [];
    }
  }

  signups.push(signup);
  localStorage.setItem(storage, JSON.stringify(signups));

  alert("Signup saved successfully!");
  form.reset();
});
