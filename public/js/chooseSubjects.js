const chooseSubjectFormHandler = async event => {
    event.preventDefault();

    const math = document.querySelector('#math');
    const science = document.querySelector("#science");
    const humanities = document.querySelector("#humanities");
    const coding = document.querySelector("#coding");



}

document.querySelector("#submitSubject").addEventListener("submit", chooseSubjectFormHandler)