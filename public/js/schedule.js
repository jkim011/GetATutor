const newSchedule = async event => {
    event.preventDefault();
    
    // const subjectChoice = document.getElementById("subject-choices").value;
    const tutorChoice = document.getElementById("tutor-choices").value.trim();
    const dateChoice = document.getElementById("date-choices").value;
    const timeChoice = document.getElementById("appt-time").value;

    if (tutorChoice && dateChoice && timeChoice) {
        const response = await fetch(`/api/users`, {
          method: 'POST',
          body: JSON.stringify({ tutorChoice, dateChoice, timeChoice }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to create schedule');
        }
      }

    // if(!dateChoice) {
    //     console.log("enter a date!!!!!!!!!!!!")
    //     alert("Enter a date!")
    //     return
    // } else {
    //     console.log("push date to homepage")
    // }

    // if(!timeChoice) {
    //     console.log("Enter a time!!!!!!!")
    //     alert("Enter a time!")
    //     return
    // } else {
    //     console.log("push time to homepage")
    // }

    // console.log(subjectChoice)
    // console.log("*******************************************")
    console.log(tutorChoice)
    console.log("*******************************************")
    console.log(dateChoice)
    console.log("*******************************************")
    console.log(timeChoice)
    console.log("*******************************************")


    // if(subjectChoice === "Math" && tutorChoice !== "Professor Xavier") {
    //     console.log("This professor doesn't teach math")
    //     alert("This professor doesn't teach math")
    //     return 
    // } else if(subjectChoice === "Math" && tutorChoice === "Professor Xavier") {
    //     console.log("push this to homepage")

    //     alert("Your tutoring session has been scheduled!")
    //     document.location.replace('/')
    // } else if(subjectChoice === "Science" && tutorChoice === "John Keating") {
    //     console.log("this professor doesnt teach science")
    //     alert("This professor doesn't teach science")
    //     return
    // } else if(subjectChoice === "Science" && tutorChoice !== "John Keating") {
    //     console.log("push this to homepage")
    // } else if(subjectChoice === "Coding" && tutorChoice === "John Keating" || tutorChoice === "Walter White") {
    //     console.log("this professor doesnt teach coding")
    //     alert("This professor doesn't teach coding")
    //     return
    // } else if(subjectChoice === "Coding" && tutorChoice === "Professor Xavier" || tutorChoice === "Trinity Moss") {
    //     console.log("push this to homepage")
    // } else if(subjectChoice === "Humanities" & tutorChoice !== "John Keating") {
    //     console.log("this professor doesnt teach humanities")
    //     alert("This professor doesn't teach humanities")
    //     return
    // } else if (subjectChoice === "Humanities" & tutorChoice === "John Keating") {
    //     console.log("push to homepage")
    // }

    // await fetch(`/`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       tutorChoice
    //     }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });

    // alert("Your tutoring session has been scheduled!")
    // document.location.replace('/')
}

document.querySelector('.new-schedule-form').addEventListener("submit", newSchedule);
