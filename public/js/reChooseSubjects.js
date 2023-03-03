const reChooseSubjectFormHandler = async event => {
    console.log("HIT!!!")
    event.preventDefault();

    const math = document.querySelector('#reMath').checked;
    const science = document.querySelector("#reScience").checked;
    const humanities = document.querySelector("#reHumanities").checked;
    const coding = document.querySelector("#reCoding").checked;
    
    const user = localStorage.getItem("user")
    const parsedUser = JSON.parse(user)
   
    console.log("USER.USER", parsedUser.id)
    const response = await fetch(`/api/users/${parsedUser.id}`, {
        method:'PUT',
        body: JSON.stringify({math, science, humanities, coding}),
        headers: { "Content-Type": "application/json"}
    })
    document.location.replace('/profile')

}

const reFormEl = document.querySelector("#reSubjectList")

reFormEl.addEventListener("submit", reChooseSubjectFormHandler)