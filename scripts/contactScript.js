function submitForm() {
    emailjs.init("7L5MF5pWPXPqsolVY");

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    var templateParams = {};

    formData.forEach((value, key) => {
        templateParams[key] = value;
    })

    if (!templateParams["from_name"] || !templateParams["from_email"] || !templateParams["message"]) {
        alert("Please enter all fields.");
    } else {
        emailjs.send('service_tpxbsp8', 'template_afl54ze', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
            alert('FAILED...', error);
        });
    }
}
