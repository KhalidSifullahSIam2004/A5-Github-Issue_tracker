const userName = document.getElementById("username");
const password = document.getElementById("password");

document.getElementById("signInBtn").addEventListener("click", () => {
  if (userName.value === "admin" && password.value === "admin123") {
    alert("Login successful!");
    location.replace("./main.html");
  } else {
    alert("Login failed. Please check your username and password.");
  }
});
