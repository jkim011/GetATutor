const deleteApptHandler = async event => {
    event.preventDefault();

    const user = localStorage.getItem("user")
    const parsedUser = JSON.parse(user)
    const apNumber = document.querySelector("#apptId")
    const apId = apNumber.innerHTML
    

    console.log(parsedUser.id)
    console.log(apNumber)
    console.log(apId)

    const response = await fetch (`api/users/${parsedUser.id}/appointments/${apId}`, {
        method: "DELETE"
    });
    if(response.ok){
        alert('Appointment Removed')
    }else {
        alert (response.statusText)
    }
    location.reload()

}

const deleteBtn = document.querySelector(".deleteAppt")
deleteBtn.addEventListener('click', deleteApptHandler)