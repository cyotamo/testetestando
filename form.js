document.getElementById("meuFormulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const dados = new FormData(this);
    const ficheiroPDF = document.getElementById("ficheiroPDF").files[0];

    if (!ficheiroPDF) {
        alert("Selecione um ficheiro PDF.");
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function(evento) {
        const resultado = evento.target.result;
        const base64PDF = resultado.split(",")[1];

        dados.append("pdfBase64", base64PDF);
        dados.append("pdfNome", ficheiroPDF.name);
        dados.append("pdfTipo", ficheiroPDF.type || "application/pdf");

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
    };

    leitor.onerror = function() {
        alert("Erro ao ler o ficheiro PDF.");
    };

    leitor.readAsDataURL(ficheiroPDF);
});
