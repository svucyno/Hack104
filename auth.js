function showLogin() {
  document.getElementById("pageWrap").innerHTML = `
    <h2>Login</h2>
    <input id="email" placeholder="Email"><br>
    <input id="pass" type="password" placeholder="Password"><br>
    <button onclick="doLogin()">Login</button>
    <p onclick="showRegister()">Register</p>
  `;
}

function showRegister() {
  document.getElementById("pageWrap").innerHTML = `
    <h2>Register</h2>
    <input id="email"><br>
    <input id="pass" type="password"><br>
    <button onclick="doRegister()">Register</button>
  `;
}

function doRegister() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  localStorage.setItem(email, pass);
  alert("Registered!");
  showLogin();
}

function doLogin() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if (localStorage.getItem(email) === pass) {
    showApp();
  } else {
    alert("Wrong login");
  }
}

showLogin();