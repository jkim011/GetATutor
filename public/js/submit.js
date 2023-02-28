// For future development when scheduling tutors

// New package Flatpickr 
configDate = {
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y",
    minDate: new Date().fp_incr(1),
    maxDate: new Date().fp_incr(14)
}
const fpDate = flatpickr("#date-choices", configDate)

configTime = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    altInput: true,
    minTime: "9:00",
    maxTime: "16",
    defaultDate: "9:00",
}
const fpTime = flatpickr("#appt-time", configTime)


const newSession = async event => {

    event.preventDefault();
    
    const subjectChoices = document.getElementById("subject-choices");
    const subject = subjectChoices.value;

    const tutorChoices = document.getElementById("tutor-choices");
    const tutor = tutorChoices.value;

    const dateChoices = document.getElementById("date-choices");
    const date = dateChoices.value;

    const timeChoices = document.getElementById("appt-time");
    const time = timeChoices.value;

    // if(subjectChoice !== tutorChoice.optgroup.label) {
    //     console.log("not equal")
    // }

    console.log(subject)
    console.log("*******************************************")
    console.log(tutor)
    console.log("*******************************************")
    console.log(date)
    console.log("*******************************************")
    console.log(time)
    console.log("*******************************************")

    // TESTING. puts user input onto homepage. need to find a way to have multiple appointments be displayed
    document.getElementById("appointmentSubject").innerText = subject
    document.getElementById("appointmentTutor").innerText = tutor
    document.getElementById("appointmentDate").innerText = date
    document.getElementById("appointmentTime").innerText = time

    const user = localStorage.getItem("user")
    const parsedUser = JSON.parse(user)
    console.log(parsedUser)

    const response = await fetch(`/api/users/${parsedUser.id}/appointments`, {
        method: "POST",
        body: JSON.stringify({subject, tutor, date, time}),
        headers: {"Content-Type": "application/json"}
    })


}

document.querySelector('#schedule-session').addEventListener("submit", newSession);
