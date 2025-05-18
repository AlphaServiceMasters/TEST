document.getElementById('loginBtn').addEventListener('click', function(e) {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 200);
    alert('Login functionality coming soon!');
});
