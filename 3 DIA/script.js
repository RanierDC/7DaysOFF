const divLista = document.getElementById('lista');
let arrayLinguaguens = new Array();
let finalizado = false;

var primeiraPergunta = prompt('Qual área pretende seguir? Para área de Front-End ou para a área de Back-End?');

if(primeiraPergunta == 'Front-End'){
    var segundaPergunta = prompt('Você quer aprender React ou aprender Vue?');

    arrayLinguaguens.push(segundaPergunta);
    prompt('Você pretende seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?');
    alert('Estão você tem um ótimo senso estético');
}
else{
    var segundaPergunta = prompt('Você quer aprender C# ou aprender Java?');
    arrayLinguaguens.push(segundaPergunta);
    prompt('Você pretende seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?');
    alert('O mundo dos algoritmos é bem legal');
}

while(finalizado === false){
    arrayLinguaguens.push(prompt('Qual tecnologia você gostaria de se especializar ou de conhecer?'));

    alert(`Muito legal seu interesse!`);

    var verificador = prompt('Tem mais alguma tecnologia que você tem interesse?');
    alert(verificador);

    if(verificador === 'ok'){
        finalizado = true;
    }
    else{
        finalizado = false;
    }
}

alert('Muito Bom, abaixo estará sua lista de aprendizado!');

        const h3 = document.createElement('h3');
        const texto = document.createTextNode("Esta é a sua Lista de aprendizado!:");

        h3.appendChild(texto);
        divLista.appendChild(h3);

        const criarlista = document.createElement('ul');

        for(let i = 0; i < arrayLinguaguens.length; i++){
    
            const conteudo = document.createTextNode(arrayLinguaguens[i])
            const criarElemento = document.createElement('li');

            criarElemento.appendChild(conteudo);
            criarlista.appendChild(criarElemento);
            divLista.appendChild(criarlista);
            document.createElement('br');
        }