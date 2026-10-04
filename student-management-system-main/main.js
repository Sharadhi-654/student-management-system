let students = [];
let editIndex = -1;

document.addEventListener("DOMContentLoaded", async () => {

  // DOM refs (centralized)
  const nameInput = document.getElementById("name");
  const studentId = document.getElementById("studentId");
  const emailInput = document.getElementById("email");
  const contactInput = document.getElementById("contact");
  const form = document.getElementById("studentForm");
  const tableBody = document.getElementById("tableBody");

  // DISPLAY
  function displayStudents() {
    tableBody.innerHTML = students.map((s, index) => `
      <tr class="border-b hover:bg-gray-50">
        <td class="p-2">${s.name}</td>
        <td>${s.id}</td>
        <td>${s.email}</td>
        <td>${s.contact}</td>
        <td class="space-x-2">
          <button onclick="editStudent(${index})"
            class="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500">
            Edit
          </button>
          <button onclick="deleteStudent(${index})"
            class="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600">
            Delete
          </button>
        </td>
      </tr>
    `).join("");

    localStorage.setItem("students", JSON.stringify(students));
  }

  // VALIDATION (cleaned)
  function isValid(name, id, email, contact) {
    if (!/^[A-Za-z ]+$/.test(name)) return alert("Name must contain only letters"), false;
    if (!/^[0-9]+$/.test(id)) return alert("ID must be numbers only"), false;
    if (!/^[0-9]{10,}$/.test(contact)) return alert("Contact must be 10+ digits"), false;
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert("Invalid email"), false;
    return true;
  }

  // ADD / UPDATE
  form?.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const id = studentId.value.trim();
    const email = emailInput.value.trim();
    const contact = contactInput.value.trim();

    if (!isValid(name, id, email, contact)) return;

    const student = { name, id, email, contact };

    editIndex === -1
      ? students.push(student)
      : (students[editIndex] = student, editIndex = -1);

    this.reset();
    displayStudents();
  });

  // GLOBAL FUNCTIONS
  window.editStudent = (index) => {
    const s = students[index];
    nameInput.value = s.name;
    studentId.value = s.id;
    emailInput.value = s.email;
    contactInput.value = s.contact;
    editIndex = index;
  };

  window.deleteStudent = (index) => {
    students.splice(index, 1);
    displayStudents();
  };

  // LOAD DATA
  async function loadTempData() {
    try {
      const res = await fetch('students.json');
      const text = await res.text();

      if (!res.ok || !text.trim()) throw new Error("JSON load failed");

      students = JSON.parse(text);
      displayStudents();

    } catch (err) {
      console.error("Error loading temp data:", err);
    }
  }

  // INIT
  const saved = localStorage.getItem("students");
  if (saved) {
    students = JSON.parse(saved);
    displayStudents();
  } else {
    await loadTempData();
  }

});