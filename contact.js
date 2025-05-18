document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Login functionality coming soon!');
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contactMsg').textContent = 'Thank you for contacting us!';
    this.reset();
});
