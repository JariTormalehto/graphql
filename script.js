// script.js

const API_URL = "https://((DOMAIN))/api/auth/signin"; // Replace with your actual server URL

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();

    // Store the JWT token securely (for example, in localStorage)
    localStorage.setItem("token", data.token);

    // Redirect to the user's profile page or perform other actions
    // Example: window.location.href = "/profile.html";
  } catch (error) {
    console.error("Authentication failed:", error.message);
  }
}
