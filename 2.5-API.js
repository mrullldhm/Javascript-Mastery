// API is a way for a different software application to communicate with each other

// Type of API
// 1. Brower API - localStorage, Geolocation, Fetch API
// 2, Third-party API - OpenWeather API, GitHub APU, OpenAI API

// Use Case - use to work with external services or our own backend
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
