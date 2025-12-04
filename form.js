document.getElementById("meuFormulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const dados = new FormData(this);

    fetch("AQUI_URL_DO_SEU_WEBAPP", {
        method: "POST",
        body: dados
    })
    .then(res => res.json())
    .then(resposta => {
        alert(resposta.mensagem);
    })
    .catch(err => {
        alert("Erro ao enviar: " + err);
    });
});
