function sendMail() {

    // Prevent form from reloading
    event.preventDefault()

    // Get the form data
    var params = {
        username: document.getElementById("username").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim(),
        from_name: "alimohammed"
    };

    // Check if required fields are empty
    if (params.username === '' || params.email === '' || params.subject === '' || params.message === '') {
        alert("Please fill in all the required fields.");
        
        // Prevent form from submitting
        return;
    }

    // Define your EmailJS service and template IDs
    const serviceID = "service_9jl737l";
    const templateID = "template_gnry7dd";

    // Use EmailJS to send the email
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear the form fields after successful submission
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            // Log the response and show a success alert
            console.log(res);
            alert("Message sent successfully");
        })
        .catch((err) => {
            // Log and handle any errors
            console.warn(err);
        });
}
