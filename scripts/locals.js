function showHarn() {
    let harnKingdom = document.getElementById('name-column-2');

    let brumado = document.createElement('p');
    brumado.textContent = 'Brumado';
    brumado.setAttribute("id", "brumado-trigger");
    brumado.setAttribute('onclick', 'showBrumado()');

    let dasEstepes = document.createElement('p');
    dasEstepes.textContent = 'das Estepes';
    dasEstepes.setAttribute("id", "das-estepes-trigger");

    harnKingdom.appendChild(brumado);
    harnKingdom.appendChild(dasEstepes);

    document.getElementById('lythia-trigger').style.color = '#B7B7B7';
    document.getElementById('harn-trigger').style.fontWeight = '700';

    let cleanLocalButton = document.getElementById('resetLocal');
    cleanLocalButton.disabled = false;
};

function showBrumado() {
    let brumadoFiefs = document.getElementById('name-column-3');

    let angra = document.createElement('p');
    angra.textContent = 'Angra';
    angra.setAttribute("id", "angra-trigger");

    let novo = document.createElement('p');
    novo.textContent = 'Novo';
    novo.setAttribute('onclick', 'showNovo()');
    novo.setAttribute("id", "novo-trigger");

    brumadoFiefs.appendChild(angra);
    brumadoFiefs.appendChild(novo);

    document.getElementById('das-estepes-trigger').style.color = '#B7B7B7';
    document.getElementById('brumado-trigger').style.fontWeight = '700';
};

function showNovo() {
    let novoCities = document.getElementById('name-column-4');

    let farteixoLink = document.createElement('a')
    farteixoLink.setAttribute('href', '/pages-locais/vilas/farteixo.html')
    let farteixo = document.createElement('p');
    farteixo.textContent = 'Farteixo';
    farteixoLink.appendChild(farteixo);

    let fossoBranco = document.createElement('p');
    fossoBranco.textContent = 'Fosso Branco';

    let monforteLink = document.createElement('a')
    monforteLink.setAttribute('href', '/pages-locais/vilas/monforte.html')
    let monforte = document.createElement('p');
    monforte.textContent = 'Monforte';
    monforteLink.appendChild(monforte);

    let nogueira = document.createElement('p');
    nogueira.textContent = 'Nogueira';

    novoCities.appendChild(farteixoLink);
    novoCities.appendChild(fossoBranco);
    novoCities.appendChild(monforteLink);
    novoCities.appendChild(nogueira);

    document.getElementById('angra-trigger').style.color = '#B7B7B7';
    document.getElementById('novo-trigger').style.fontWeight = '700';
};

function cleanLocal() {
    let column2 = document.getElementById('name-column-2');
    let column3 = document.getElementById('name-column-3');
    let column4 = document.getElementById('name-column-4');

    column2.textContent = '';
    column3.textContent = '';
    column4.textContent = '';
};