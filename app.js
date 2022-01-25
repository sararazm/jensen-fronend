
document.addEventListener("submit", (event) => {
    console.log("Validating")
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const headers = new Headers();
    headers.append("Accept", "application/json")
    headers.append("Authorization", btoa(username + ":" + password))
    fetch("http://localhost:5000", { headers: headers }).then(function (response) {
        if (response.ok) {
            document.write("Framgång login!")
        }
        throw response;
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn(error);
    });

    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/authorize");
    console.log("Validated")
    
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(`user=${user}&password=${password}`);
    event.preventDefault()
})

var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };