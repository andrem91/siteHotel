const usuarios = {
  usuario: "admin",
  senha: "1234",
};

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === usuarios.usuario && password === usuarios.senha) {
    window.location.href = "/bemVindo";
  } else {
    window.alert("Usuário ou senha incorretos!");
  }
});
