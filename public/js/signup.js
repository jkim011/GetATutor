

const signupFormHandler = async event => {

    event.preventDefault();

    const username = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username, email, password
            }),
            headers: { "Content-Type": "application/json"}
        });

        if(response.ok) {
            alert("Welcome to GetATutor!")
            console.log("######################################")
            document.location.replace('/choose-subjects')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#createUser').addEventListener("submit", signupFormHandler)
