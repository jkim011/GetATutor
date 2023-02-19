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
    defaultDate: "8:00",
}
const fpTime = flatpickr("#appt-time", configTime)


const newSession = async event => {

    event.preventDefault();
    
    const subjectChoices = document.getElementById("subject-choices");
    const subjectChoice = subjectChoices.value;

    const tutorChoices = document.getElementById("tutor-choices");
    const tutorChoice = tutorChoices.value;

    const dateChoices = document.getElementById("date-choices");
    const dateChoice = dateChoices.value;

    const timeChoices = document.getElementById("appt-time");
    const timeChoice = timeChoices.value;

    // if(subjectChoice !== tutorChoice.optgroup.label) {
    //     console.log("not equal")
    // }

    console.log(subjectChoice)
    console.log("*******************************************")
    console.log(tutorChoice)
    console.log("*******************************************")
    console.log(dateChoice)
    console.log("*******************************************")
    console.log(timeChoice)
    console.log("*******************************************")

    // TESTING. puts user input onto homepage. need to find a way to have multiple appointments be displayed
    document.getElementById("appointmentSubject").innerText = subjectChoice
    document.getElementById("appointmentTutor").innerText = tutorChoice
    document.getElementById("appointmentDate").innerText = dateChoice
    document.getElementById("appointmentTime").innerText = timeChoice
}

document.querySelector('#schedule-session').addEventListener("submit", newSession);
