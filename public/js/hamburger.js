const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // animate lines
  navLinks.classList.toggle('active');  // toggle menu
});

// 1. Edit Profile
document.getElementById("editProfileBtn").addEventListener("click", () => {
  alert("Redirecting to profile editor (feature coming soon)!");
  window.location.href = "/edit-profile.html";
});

// 2. View Match (individual)
const viewButtons = document.querySelectorAll(".viewMatchBtn");
viewButtons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    alert(`Opening match profile for ${name}...`);
    window.location.href = `/match-profile.html?name=${name}`;
  });
});

// 3. View All Matches
document.getElementById("viewAllBtn").addEventListener("click", () => {
  alert("Taking you to the full match list.");
  window.location.href = "/matches.html";
});

