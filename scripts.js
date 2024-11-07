// Autenticación simulada para acceder al dashboard
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {  // Ejemplo de autenticación
        document.getElementById("login-section").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Función de cierre de sesión
function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}

// Navegar a módulos específicos
function navigateTo(module) {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("module-content").style.display = "block";
    document.getElementById("module-header").textContent = `Administración de ${module}`;
    document.getElementById("module-body").innerHTML = `<p>Contenido de ${module}</p>`;
}

// Volver al Dashboard
function goBackToDashboard() {
    document.getElementById("module-content").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}
