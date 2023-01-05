
const loginFormHandler = async event => {
    event.preventDefault();

    //value from login form
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector("#password").value.trim();

    if(email && password) {
        //post request to /login api
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-type': 'application/json'},
        });
        
        if(response.ok) {
            document.location.replace('/profile');
            alert('Welcome Back!')
        } else {
            alert(response.statusText)
        }
    }
};
document.querySelector('#loginUser').addEventListener("submit", loginFormHandler)