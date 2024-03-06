/* ============= lógica calculadora ============= */

let botaoCalcular = document.getElementById('botao_calcular');

botaoCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    const altura = document.getElementById('entrada_altura').value;
    const peso = document.getElementById('entrada_peso').value;
    const resultado = calcularIMC(altura, peso);

    const paragrafo = document.getElementById('resultado');

    paragrafo.innerHTML = "Resultado: IMC aproximado de " + resultado.toFixed(1);
});

function calcularIMC(h, p){
    const r = p / (h**2);

    return r;
};

/* ============= modo escuro ============= */

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});