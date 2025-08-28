const matches = [
  {
    name: "James",
    teach: "Public Speaking",
    learn: "Leadership",
    location: "Nairobi",
    bio: "Enthusiastic public speaker passionate about community empowerment.",
    img: "images/james.png"
  },
  {
    name: "Aisha",
    teach: "Communication Skills",
    learn: "Graphic Design",
    location: "Nakuru",
    bio: "Helping people find their voice and build their confidence.",
    img: "images/aisha.png"
  },
  {
    name: "Brian",
    teach: "Python Programming",
    learn: "UI/UX Design",
    location: "Eldoret",
    bio: "Software developer interested in building social good tools.",
    img: "images/brian.png"
  },
  {
    name: "Lilian",
    teach: "Photography",
    learn: "Digital Marketing",
    location: "Mombasa",
    bio: "Visual storyteller learning the art of online branding.",
    img: "images/lilian.png"
  }
];

const currentUser = {
  name: "You",
  learn: "Public Speaking"
};

function renderMatches(list) {
  const container = document.getElementById("matchesContainer");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No matches found.</p>";
    return;
  }

  list.forEach(match => {
    const card = document.createElement("div");
    card.className = "match-card";
    card.innerHTML = `
      <img src="${match.img}" alt="${match.name}'s photo" class="profile-pic" />
      <h3>${match.name}</h3>
      <p><strong>Can Teach:</strong> ${match.teach}</p>
      <p><strong>Wants to Learn:</strong> ${match.learn}</p>
      <p><strong>Location:</strong> ${match.location}</p>
      <p><strong>Bio:</strong> ${match.bio}</p>
      <a href="match-profile.html?name=${encodeURIComponent(match.name)}">
        <button>View Profile</button>
      </a>
    `;
    container.appendChild(card);
  });
}

function searchMatches() {
  const term = document.getElementById("searchInput").value.trim().toLowerCase();
  const selectedLocation = document.getElementById("locationFilter").value;

  const filtered = matches.filter(match => {
    const matchesSearch =
      match.name.toLowerCase().includes(term) ||
      match.teach.toLowerCase().includes(term) ||
      match.learn.toLowerCase().includes(term);

    const matchesLocation =
      selectedLocation === "" || match.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  renderMatches(filtered);
}

function matchMe() {
  const potentialMatches = matches.filter(
    match => match.teach.toLowerCase().includes(currentUser.learn.toLowerCase())
  );

  if (potentialMatches.length === 0) {
    alert("No strong match found for your interests.");
    return;
  }

  const bestMatch = potentialMatches[Math.floor(Math.random() * potentialMatches.length)];
  window.location.href = `match-profile.html?name=${encodeURIComponent(bestMatch.name)}`;
}

// Initial load
renderMatches(matches);
