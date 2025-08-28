// Sample database of matches for demo (can be replaced by real data or fetched later)
const sampleMatches = {
  James: {
    name: "James",
    teach: "Public Speaking",
    learn: "Leadership",
    location: "Nairobi",
    bio: "Enthusiastic public speaker passionate about community empowerment."
  },
  Aisha: {
    name: "Aisha",
    teach: "Communication Skills",
    learn: "Graphic Design",
    location: "Nakuru",
    bio: "Helping people find their voice and build their confidence."
  }
};

// Function to get query parameters from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Load and display profile
const matchName = getQueryParam("name"); // e.g. match-profile.html?name=Aisha
const profile = sampleMatches[matchName];

if (profile) {
  document.getElementById("matchName").textContent = profile.name;
  document.getElementById("matchTeach").textContent = profile.teach;
  document.getElementById("matchLearn").textContent = profile.learn;
  document.getElementById("matchLocation").textContent = profile.location;
  document.getElementById("matchBio").textContent = profile.bio;
} else {
  document.getElementById("profileDisplay").innerHTML = "<p>Profile not found.</p>";
}
