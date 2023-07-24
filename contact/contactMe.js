document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object with the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Simulate sending the form data to a server
    // Here, we simply display the form data as a response
    displayContactResponse(formData);

    // Clear the form
    document.getElementById('contact-form').reset();
});

// Function to display the contact form response
function displayContactResponse(formData) {
    const responseElement = document.getElementById('contact-response');
    responseElement.innerHTML = `
        <p>Thank you for contacting me, ${formData.name}!</p>
        <p>I will get back to you at ${formData.email}.</p>
        <p>Your message:</p>
        <p>${formData.message}</p>
    `;
}