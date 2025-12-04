document.getElementById("meuFormulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const dados = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbz5pTZ-f1Jn_Nm6lHjauaL0xAi7C_QQG6m1RO8kVjEsH2Vds969xJlWswimc6vmu7Nuaw/exec", {
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
