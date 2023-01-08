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

    if(subjectChoice !== tutorChoice.optgroup.label) {
        console.log("not equal")
    }

    console.log(subjectChoice)
    console.log("*******************************************")
    console.log(tutorChoice)
    console.log("*******************************************")
    console.log(dateChoice)
    console.log("*******************************************")
    console.log(timeChoice)
    console.log("*******************************************")
}

document.querySelector('#schedule-session').addEventListener("submit", newSession);
