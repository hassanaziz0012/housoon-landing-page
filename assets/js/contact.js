function retrieveContactFormData() {
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const subjectElement = document.getElementById("subject");
    const messageElement = document.getElementById("message");

    let name = nameElement.value;
    nameElement.value = null;

    let email = emailElement.value;
    emailElement.value = null;

    let subject =subjectElement.value;
    subjectElement.value = null;

    let message = messageElement.value;
    messageElement.value = null;

    console.log(name, email, subject, message);
    
    let url_unformatted = `https://pinterest-bulk-upload.herokuapp.com/send-housoon-msg/${name}/${email}/${subject}/${message}`;
    let url = url_unformatted.replace(/ /g,"%20");
    fetch(url, {
        'method': 'GET'
    })
    .then(response => response.text()).then(text => console.log('Message sent.'));

}

