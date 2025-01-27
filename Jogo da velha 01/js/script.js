
/* Global var */

draw = 0;
contador = 0;
vitorias1 = 0;
vitorias2 = 0;

matriz = document.querySelector('.tabuleiro');
coluna = matriz.querySelectorAll('.itemColuna');
pontosJogador = document.querySelectorAll(".pontoPlacar");
reiniciarButton = document.querySelector("#reiniciarButton");

/* Function para Limpar o Tabuleiro */

function limparTabuleiro(coluna) 
{
    coluna.forEach(function(event) 
    {
        event.classList.remove('x');
        event.classList.remove('o');
   });
}

/* Botão de Reset */

reiniciarButton.addEventListener('click', function() 
{
    draw = 0;
    contador = 0;
    vitorias1 = 0;
    vitorias2 = 0;
    limparTabuleiro(coluna);
    pontosJogador[0].textContent = vitorias1;
    pontosJogador[1].textContent = vitorias2;
});

/* Main */

coluna.forEach(function(event) 
{
    event.addEventListener('click',function() 
    {
        if(contador%2 == 0 && this.classList == 'itemColuna') 
        {
            draw++;
            contador++;
            this.classList.add('x');
        }
        else if(this.classList == 'itemColuna') 
        {
            draw++;
            contador++;
            this.classList.add('o');
        }

        if((coluna[0].classList[1] == 'x' && coluna[1].classList[1] == 'x' && coluna[2].classList[1]== 'x') || (coluna[3].classList[1] == 'x' && coluna[4].classList[1] == 'x' && coluna[5].classList[1] == 'x') || (coluna[6].classList[1] == 'x' && coluna[7].classList[1] == 'x' && coluna[8].classList[1] == 'x') || (coluna[0].classList[1] == 'x' && coluna[3].classList[1] == 'x' && coluna[6].classList[1] == 'x') || (coluna[1].classList[1] == 'x' && coluna[4].classList[1] == 'x' && coluna[7].classList[1] =='x') || (coluna[2].classList[1] == 'x' && coluna[5].classList[1] == 'x' && coluna[8].classList[1] == 'x') || (coluna[0].classList[1] == 'x' && coluna[4].classList[1] == 'x' && coluna[8].classList[1] == 'x') || (coluna[2].classList[1] == 'x' && coluna[4].classList[1] == 'x' && coluna[6].classList[1] == 'x')) 
        {
            draw = 0;
            vitorias1++;
            limparTabuleiro(coluna);
            pontosJogador[0].textContent = vitorias1;
        }

        if((coluna[0].classList[1] == 'o' && coluna[1].classList[1] == 'o' && coluna[2].classList[1]== 'o') || (coluna[3].classList[1] == 'o' && coluna[4].classList[1] == 'o' && coluna[5].classList[1] == 'o') || (coluna[6].classList[1] == 'o' && coluna[7].classList[1] == 'o' && coluna[8].classList[1] == 'o') || (coluna[0].classList[1] == 'o' && coluna[3].classList[1] == 'o' && coluna[6].classList[1] == 'o') || (coluna[1].classList[1] == 'o' && coluna[4].classList[1] == 'o' && coluna[7].classList[1] == 'o') || (coluna[2].classList[1] == 'o' && coluna[5].classList[1] == 'o' && coluna[8].classList[1] == 'o') || (coluna[0].classList[1] == 'o' && coluna[4].classList[1] == 'o' && coluna[8].classList[1] == 'o') || (coluna[2].classList[1] == 'o' && coluna[4].classList[1] == 'o' && coluna[6].classList[1] == 'o')) 
        {
            draw = 0;
            vitorias2++;
            limparTabuleiro(coluna);
            pontosJogador[1].textContent = vitorias2;
        }

        if(draw == 9) 
        {
            draw = 0;
            alert("Hum, empate!");
            limparTabuleiro(coluna);
        }
    });
});

