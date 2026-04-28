function signup() {
  alert("Signup successful!");
  return false;
}

function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (email === "" || pass === "") {
    alert("Fill all fields");
    return false;
  }

  alert("Login successful!");
  return false;
}

function contactForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Message sent successfully!");
  return false;
}