
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
  } else {
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
