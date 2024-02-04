let tentativa = 3;
const numeroSorteado = Math.floor(Math.random() * 11);
alert('Tente acertar o número que estou pensando entre 0 e 10, você tem 3 tentativas!');
alert(numeroSorteado);

while(tentativa !== 0){
    let resposta = prompt('Qual número estou pensando ?');
    if(resposta == numeroSorteado){
        alert('Parabéns, você acertou!');
        tentativa = 0;
    }
    else{
        tentativa--;
        alert(`Voçê tem mais ${tentativa} chances`);
    }
}