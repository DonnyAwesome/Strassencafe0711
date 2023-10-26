document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    sendLoginData(username, password);
});

function sendLoginData(username, password) {
    const loginData = {
        username: username,
        password: password
    };

    fetch("https://yourserver.com/login-endpoint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert("Login successful");
            // Redirect to another page or perform other actions
        } else {
            alert("Login failed");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error during the login process");
    });
}
