document.getElementById("editProfileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const profileData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    teach: document.getElementById("teach").value,
    learn: document.getElementById("learn").value,
    location: document.getElementById("location").value,
    bio: document.getElementById("bio").value,
  };

  // For now, just store it locally (can connect to Firebase or a backend later)
  localStorage.setItem("peerpadProfile", JSON.stringify(profileData));

  alert("Profile updated successfully!");
  window.location.href = "dashboard.html";
});
