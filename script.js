window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('de') && urlParams.has('para') && urlParams.has('msg')) {
        exibirModoRecebido(urlParams.get('de'), urlParams.get('para'), urlParams.get('msg'));
    }
};

function mostrarPrevia() {
    const de = document.getElementById('inputDe').value;
    const para = document.getElementById('inputPara').value;
    const msg = document.getElementById('inputTexto').value;
    if (!de || !para || !msg) { alert("Preencha todos os campos!"); return; }
    document.getElementById('displayDe').innerText = `De: ${de}`;
    document.getElementById('displayPara').innerText = `Para: ${para}`;
    document.getElementById('displayTexto').innerText = msg;
    document.getElementById('setup-container').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('area-acoes').classList.remove('hidden');
    document.getElementById('btn-novo-recebido').classList.add('hidden');
}

function voltarParaEdicao() {
    document.getElementById('envelopeWrapper').classList.remove('open');
    document.getElementById('setup-container').classList.remove('hidden');
    document.getElementById('card-container').classList.add('hidden');
}

function enviarWhatsapp() {
    const de = document.getElementById('inputDe').value;
    const para = document.getElementById('inputPara').value;
    const msg = document.getElementById('inputTexto').value;
    const urlBase = window.location.origin + window.location.pathname;
    const linkFinal = `${urlBase}?de=${encodeURIComponent(de)}&para=${encodeURIComponent(para)}&msg=${encodeURIComponent(msg)}`;
    const textoWhats = `Olá ${para}! ✉️ Enviei uma carta especial para você. Clique no link para abrir:\n\n${linkFinal}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(textoWhats)}`, '_blank');
}

function exibirModoRecebido(de, para, msg) {
    document.getElementById('displayDe').innerText = `De: ${de}`;
    document.getElementById('displayPara').innerText = `Para: ${para}`;
    document.getElementById('displayTexto').innerText = msg;
    document.getElementById('setup-container').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('area-acoes').classList.add('hidden');
    document.getElementById('btn-novo-recebido').classList.remove('hidden');
}

function irParaCriar() { window.location.href = window.location.origin + window.location.pathname; }

function toggleCarta() {
    const wrapper = document.getElementById('envelopeWrapper');
    const estaFechada = !wrapper.classList.contains('open');
    wrapper.classList.toggle('open');
    if (estaFechada) lancarCoracoes();
}

function lancarCoracoes() {
    const container = document.getElementById('hearts-container');
    container.innerHTML = '';
    for (let i = 0; i < 15; i++) {
        const h = document.createElement('div');
        h.classList.add('heart');
        h.style.left = Math.random() * 80 + 10 + '%';
        h.style.animationDelay = Math.random() * 0.8 + 's';
        container.appendChild(h);
    }
}