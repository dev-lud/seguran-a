
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const aluno = {
        matricula: document.getElementById('matricula').value,
        nome: document.getElementById('nome').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        escola: document.getElementById('escola').value
    };
    
    localStorage.setItem('aluno', JSON.stringify(aluno));
    alert('Dados salvos com sucesso!');
});