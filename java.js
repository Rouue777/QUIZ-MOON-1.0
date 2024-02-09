//selecionar elementos importantes
let titulo = document.querySelector('h1');
let instrucoes = document.getElementById('instrucoes');
let aviso = document.getElementById('aviso');
let placar = 0;
let pontos = 0;

//numero da qestao e pergunta
let numeroQuestao = document.getElementById('numQuestao');
let pergunta = document.getElementById('pergunta');

//selecionar elemento das questões
let A = document.getElementById('a');
let B = document.getElementById('b');
let C = document.getElementById('c');
let D = document.getElementById('d');

//elementos que irao ser substituidos no fim do quiz.
let articleQuestoes = document.querySelector('.questoes');
let alternativas = document.getElementById('alternativas');

//objetos para armazenar as questões
const q0 = {
    numQuestao : 0,
    pergunta : '',
    alternativaA : '',
    alternativaB : '',
    alternativaC : '',
    alternativaD : '',
    correta : '',
};


const q1 = {
    numQuestao : 1,
    pergunta : 'Qual o menor país do mundo em área territorial?',
    alternativaA : 'Nauru',
    alternativaB : 'Mônaco',
    alternativaC : 'Vaticano',
    alternativaD : 'San Marino',
    correta : 'Vaticano',
};

const q2 = {
    numQuestao : 2,
    pergunta : 'Quem escreveu a famosa frase "Penso, logo existo"?',
    alternativaA : 'Platão',
    alternativaB : 'René Descartes',
    alternativaC : ' Albert Einstein',
    alternativaD : ' Isaac Newton',
    correta : 'René Descartes',
};


const q3 = {
    numQuestao : 3,
    pergunta : 'Qual o maior rio do Brasil em extensão?',
    alternativaA : 'Rio Amazonas',
    alternativaB : 'Rio São Francisco',
    alternativaC : 'Rio Paraná',
    alternativaD : 'Rio Tocantins',
    correta : 'Rio Amazonas',
};


const q4 = {
    numQuestao : 4,
    pergunta : 'Qual o maior país do mundo em população?',
    alternativaA : 'China',
    alternativaB : 'Índia',
    alternativaC : 'Estados Unidos',
    alternativaD : 'Indonésia',
    correta : 'China',
};


const q5 = {
    numQuestao : 5,
    pergunta : 'Qual o continente que não faz fronteira com o Oceano Atlântico?',
    alternativaA : 'América do Sul',
    alternativaB : 'Europa',
    alternativaC : 'África',
    alternativaD : 'Oceania',
    correta : 'Oceania',
}


//armazenar questoes
const Questoes = [q0, q1, q2, q3, q4, q5];


//variaveis para armazenar numero e total
let numero = document.getElementById('numero');
let total = document.getElementById('total')



numero.textContent = q1.numQuestao;

//total de questoees

let totalDeQuestoes = (Questoes.length-1);
total.textContent = totalDeQuestoes



//montagem da primeira questao
numeroQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
A.textContent = q1.alternativaA;
B.textContent = q1.alternativaB;
C.textContent = q1.alternativaC;
D.textContent = q1.alternativaD;

//criar setatributtes
A.setAttribute('value', '1A');
B.setAttribute('value', '1B');
C.setAttribute('value', '1C');
D.setAttribute('value', '1D');


//criar funtion para montar as proximas questões


function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numeroQuestao.textContent = nQuestao
    pergunta.textContent = Questoes[nQuestao].pergunta
    A.textContent = Questoes[nQuestao].alternativaA;
    B.textContent = Questoes[nQuestao].alternativaB;
    C.textContent = Questoes[nQuestao].alternativaC;
    D.textContent = Questoes[nQuestao].alternativaD;

    A.setAttribute('value', nQuestao + 'A');
    B.setAttribute('value', nQuestao + 'B');
    C.setAttribute('value', nQuestao + 'C');
    D.setAttribute('value', nQuestao + 'D');

};


//funcao bloquear e desbloquear alternativas
function bloquearAlternativas() {
    A.classList.add('blocked')
    B.classList.add('blocked')
    C.classList.add('blocked')
    D.classList.add('blocked')    
}

function desbloquearAlternativas(){
    A.classList.remove('blocked')
    B.classList.remove('blocked')
    C.classList.remove('blocked')
    D.classList.remove('blocked')
}


//function para verificar resposta correta
function verificarSeAcertou(nQuestao, resposta) {
   let numeroDaQuestao = nQuestao.value

   let respostaEscolhida = resposta.textContent;

   let respostaCerta = Questoes[numeroDaQuestao].correta;

    if (respostaEscolhida == respostaCerta) {
        //adicionar pontos 
        console.log('voce é o mais caro pai')
        pontos += 10;
        
    }else{
       
    }
   placar = pontos
   instrucoes.textContent = 'Pontos: ' + placar;

   //bloquearquestões
   bloquearAlternativas();


    //settimeout para mudar a questao
    setTimeout(function()  {

        proxima = numeroDaQuestao+1;
        
        
        if (proxima > totalDeQuestoes) {
           
           fimDoJogo();
            console.log('mais caro pai')
            
           
        }else{
            proximaQuestao(proxima);
            console.log('errou boia muito')
        }

        
    }, 250);
    desbloquearAlternativas();

}

//criar funcao fim do jogo

function fimDoJogo() {

    

    numeroQuestao = '';
let pont = '';

pontos == 0 ? pont = 'Ponto' : pont = 'Pontos' ;

pergunta.textContent = 'Você conseguiu :' + pontos + 'Pontos';


A.textContent = '';
B.textContent = '';
C.textContent = '';
D.textContent = '';

A.setAttribute('value', '0');
B.setAttribute('value', '0');
C.setAttribute('value', '0');
D.setAttribute('value', '0');

//ocultar article da questão

articleQuestoes.style.display = 'none';


setTimeout(function() {
    pontos = 0;
    location.reload();
    
},2000);

    
}






