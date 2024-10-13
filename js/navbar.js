const list = document.querySelectorAll('.list');

// Função para ativar o link e redirecionar
function activeLink() {
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    
    // Redirecionar para diferentes páginas
    const targetPage = this.querySelector('a').getAttribute('href');
    if (targetPage && targetPage !== "#") {
        window.location.href = targetPage;
    }
}

// Adiciona o evento de clique para cada item da lista
list.forEach(item => item.addEventListener('click', activeLink));

// Adiciona os links reais para redirecionamento
document.querySelectorAll('.list a').forEach((link, index) => {
    switch (index) {
        case 0:
            link.setAttribute('href', 'home.html');
            break;
        case 1:
            link.setAttribute('href', 'arquivos.html');
            break;
        case 2:
            link.setAttribute('href', 'chat.html');
            break;
        case 3:
            link.setAttribute('href', 'warning.html');
            break;
        case 4:
            link.setAttribute('href', 'perfil.html');
            break;
    }
});
