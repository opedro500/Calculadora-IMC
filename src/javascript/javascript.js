/* ============= calculator logic ============= */

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value
    const bmi = (weight / (height * height)).toFixed(1);
    const value = document.getElementById('value');
    
    value.innerHTML = bmi;

    document.getElementById('result').classList.remove('hidden');
});

/* ============= dark mode ============= */

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});