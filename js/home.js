document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('userName');
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (name) {
        welcomeMessage.innerText = `Bem-vindo, ${name}!`;
    } else {
        welcomeMessage.innerText = 'Bem-vindo!';
    }
});

/*document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('userName');
    if (name) {
        document.getElementById('welcomeMessage').innerText = `Bem-vindo, ${name}!`;
    } else {
        document.getElementById('welcomeMessage').innerText = 'Bem-vindo!';
    }
});*/


document.getElementById('callButton').addEventListener('click', function() {
    location.href = 'tel:190'; // Substitua pelo número desejado
});