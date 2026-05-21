const hireButton = document.getElementById("hireBtn");

hireButton.addEventListener('click', function () {
    alert('Thank you for hiring Traco! Skill monster is ready to work.')
});

const myForm = document.getElementById("myForm");

const emaillnput = document.getElementById("userEmail");

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const currentEmail = emaillnput.value;

    alert(' Traco ' + currentEmail + ' you get message.')
});