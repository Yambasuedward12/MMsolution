// Initialize EmailJS
(function () {
  emailjs.init("g_MjjrrkINTDxEbvK");  // Replace with your EmailJS User ID
})();

// Function to send the email
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send the email
  emailjs.sendForm('service_3rk7tf2', 'template_p1alhdh', this)
    .then(function(response) {
      console.log('Success!', response.status, response.text);
      alert('Your message has been sent successfully!');
    }, function(error) {
      console.error('Failed...', error);
      alert('Something went wrong. Please try again.');
    });
});
///"The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account"