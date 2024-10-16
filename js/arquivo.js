document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('photoInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.innerHTML = `<img src="${e.target.result}" alt="Foto Carregada">`;
        }
        reader.readAsDataURL(file);
        // Salvar a foto localmente ou enviar para o servidor
        alert('Foto salva com sucesso!');
    } else {
        alert('Por favor, selecione uma foto.');
    }
});
