function sendForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the payload
    const payload = {
        name: name,
        email: email,
        message: message,
        origin: "portfolio-valentin-coroneos"
    };

    // Send data to webhook using Fetch API
    fetch('https://hook.eu1.make.com/uqvsbho8b8dth6d2vwfk98f97598l4i9', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (response.ok) {
                // Handle successful response
                alert('Message envoyé avec succès !');
                document.getElementById('contactForm').reset(); // Clear the form
            } else {
                // Handle error response
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Erreur d'envoi du message.");
        });
}  