const chooseSubjectFormHandler = async event => {
    console.log("HIT!!!")
    event.preventDefault();

    const math = document.querySelector('#math').checked;
    const science = document.querySelector("#science").checked;
    const humanities = document.querySelector("#humanities").checked;
    const coding = document.querySelector("#coding").checked;
    
    const user = localStorage.getItem("user")
    const parsedUser = JSON.parse(user)
    console.log("USER ID SUBJECT PAGE AHAHAHAH", parsedUser)
    console.log("USER.USER", parsedUser.user.id)
    const response = await fetch(`/api/users/${parsedUser.user.id}`, {
        method:'POST',
        body: JSON.stringify({math, science, humanities, coding}),
        headers: { "Content-Type": "application/json"}

    })

}

const formEl = document.querySelector("#subjectList")

formEl.addEventListener("submit", chooseSubjectFormHandler)