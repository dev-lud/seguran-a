/*document.getElementById('inicial.html').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('chk').value;
    localStorage.setItem('userName', name);
    window.location.href = 'welcome.html';
});*/

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    localStorage.setItem('userName', name);
    window.location.href = 'home.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'home.html';
});

