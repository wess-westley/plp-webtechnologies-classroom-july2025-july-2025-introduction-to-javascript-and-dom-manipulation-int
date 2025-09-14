// =====================
// Building Blocks
// =====================
let name = "Westley";   // variable
let age = 21;
let isTrainee = true;

// Conditional Example
if (age > 18) {
  console.log("Yes, you are an adult!");
} else {
  console.log("Not yet an adult!");
}

// =====================
// Functions
// =====================

// Greet user
function greetUser(userName) {
  return `Welcome to my portfolio, ${userName}!`;
}

// Add greeting to the hero section
document.getElementById("hero-name").textContent = greetUser(name);

// Calculate total projects (simulate logic)
function calculateProjects(projects) {
  return projects.length;
}

// Format skill string
function formatSkill(skill) {
  return skill.toUpperCase();
}

// =====================
// Loops
// =====================
const projects = [
  { title: "📚 Bookstore App", desc: "Django + React + JWT authentication" },
  { title: "🌐 Portfolio Website", desc: "Responsive portfolio with Grid & Flexbox" },
  { title: "☁️ AWS & PLP Labs", desc: "Cloud labs: EC2, S3, IAM, networking" }
];

const skills = [
  "Django & REST API",
  "React + Redux",
  "Cloud (AWS, PLP)",
  "Database design",
  "Linux & server maintenance"
];

// Insert projects dynamically
const projectContainer = document.getElementById("project-cards");
projects.forEach(project => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
  projectContainer.appendChild(card);
});

// Insert skills dynamically
const skillsList = document.getElementById("skills-list");
for (let i = 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent = formatSkill(skills[i]);
  skillsList.appendChild(li);
}

console.log(`Total projects: ${calculateProjects(projects)}`);

// =====================
// DOM Interaction
// =====================

// Dark/Light theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  toggleBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// Example: Click sidebar email to show alert
document.querySelector("#contact strong").addEventListener("click", () => {
  alert("Email copied: westleykanyora9@gmail.com");
});
