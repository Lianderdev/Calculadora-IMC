const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;


    const imc = (weight / (height * height)).toFixed(2);

    if (!isNaN(imc)) {
        const value = document.getElementById('value');
        let description = '';
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (imc < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';
            value.classList.add('azul')
        } 

        else if (imc >= 18.5 && imc <= 25) {
            description = "Você está no peso ideal!";
            value.classList.add('verde')
        }

        else if (imc > 25 && imc <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
            value.classList.add('amarelo')
        }

        else if (imc > 30 && imc <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
            value.classList.add('laranja-claro')
        }

        else if (imc > 35 && imc <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
            value.classList.add('laranja-escuro')
        }

        else {
            description = "Cuidado! Você está com obesidade morbida!";
            value.classList.add('vermelho')
        }

        value.textContent = imc.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});
const nameInput = document.getElementById('name');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value;

    localStorage.setItem('name', name);

    // Restante do seu código para calcular o IMC e exibir os resultados...
});

// Ao carregar a página, recuperar os dados armazenados localmente, se houver
window.addEventListener('load', function() {
    const savedName = localStorage.getItem('name');

    if (savedName) {
        nameInput.value = savedName;
    }
});