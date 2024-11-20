document.addEventListener("DOMContentLoaded", () => {
    fetch("users.json")
        .then(response => response.json())
        .then(users => displayProfiles(users))
        .catch(err => console.error("Error loading user data:", err));
});

function displayProfiles(users) {
    const profilesContainer = document.getElementById("profiles");
    users.forEach(user => {
        const profile = document.createElement("div");
        profile.className = "profile";
        profile.innerHTML = `
            <img src="${user.photo}" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>${user.bio}</p>
        `;
        profilesContainer.appendChild(profile);
    });
}

