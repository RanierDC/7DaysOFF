const botaoEnviar = document.getElementById('enviar');

const stringResposta = document.getElementById('resposta');
const stringOpcional = document.getElementById('opcao');
const inputDesc = document.getElementById('subOpcao');

function MostrarData(){
    const stringNome = document.getElementById('nome').value;
    const stringIdade = document.getElementById('idade').value;
    const stringLinguagem = document.getElementById('linguagem').value;

    stringResposta.innerText = `Olá ${stringNome}, você tem ${stringIdade} anos e já está aprendendo ${stringLinguagem}!`;

    
    stringOpcional.innerText = `Você gosta de estudar ${stringLinguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`;
    inputDesc.style.visibility = "visible";
}

document.querySelector('#subOpcao').addEventListener('keypress', function MostrarResposta(e) {
    if (e.key === 'Enter') {
      if(inputDesc.value === 1){
        stringOpcional.innerText = `Muito bom! Continue estudando e você terá muito sucesso.`;
      }
      else{
        stringOpcional.innerText = `Ahh que pena... Já tentou aprender outras linguagens?`;
      }
    }
});

botaoEnviar.addEventListener('click', MostrarData);