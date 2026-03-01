window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Pegamos os dados da URL
    const de = urlParams.get('de');
    const para = urlParams.get('para');
    const msg = urlParams.get('msg');

    // Só exibimos se todos os campos existirem (Evita scripts vazios ou links quebrados)
    if (de && para && msg) {
        exibirModoRecebido(de, para, msg);
    }
};

function mostrarPrevia() {
    const de = document.getElementById('inputDe').value;
    const para = document.getElementById('inputPara').value;
    const msg = document.getElementById('inputTexto').value;

    if (!de || !para || !msg) {
        alert("Preencha todos os campos!");
        return;
    }

    // .innerText é SEGURO: ele converte qualquer tag <script> em texto puro e não executa nada
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
    
    // encodeURIComponent é essencial para segurança: 
    // ele codifica caracteres especiais (como < > /) para que o navegador não os interprete mal
    const linkFinal = `${urlBase}?de=${encodeURIComponent(de)}&para=${encodeURIComponent(para)}&msg=${encodeURIComponent(msg)}`;
    
    const textoWhats = `Olá ${para}! ✉️ Enviei uma carta especial para você. Clique no link para abrir:\n\n${linkFinal}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(textoWhats)}`, '_blank');
}

function exibirModoRecebido(de, para, msg) {
    // Usamos .innerText aqui também para garantir que nada vindo da URL seja executado como código
    document.getElementById('displayDe').innerText = `De: ${de}`;
    document.getElementById('displayPara').innerText = `Para: ${para}`;
    document.getElementById('displayTexto').innerText = msg;

    document.getElementById('setup-container').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('area-acoes').classList.add('hidden');
    document.getElementById('btn-novo-recebido').classList.remove('hidden');
}

function irParaCriar() {
    window.location.href = window.location.origin + window.location.pathname;
}

function toggleCarta() {
    const wrapper = document.getElementById('envelopeWrapper');
    const estaFechada = !wrapper.classList.contains('open');
    wrapper.classList.toggle('open');
    if (estaFechada) lancarCoracoes();
}

function lancarCoracoes() {
    const container = document.getElementById('hearts-container');
    container.innerHTML = ''; // Aqui é seguro pois o conteúdo é controlado por nós (não vem do usuário)
    for (let i = 0; i < 15; i++) {
        const h = document.createElement('div');
        h.classList.add('heart');
        h.style.left = Math.random() * 80 + 10 + '%';
        h.style.animationDelay = Math.random() * 0.8 + 's';
        container.appendChild(h);
    }
}