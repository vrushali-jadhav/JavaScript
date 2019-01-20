/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore;

scores = [0,0];
activePlayer = 0;
roundScore = 0;
var maxScore;

//Set the global score for both the players as 0
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

document.querySelector(".dice").style.display = "none";

document.querySelector(".submit").addEventListener('click',function(){
    maxScore = document.getElementById('score-input').value;
    console.log("Max score has been set to: "+maxScore);
});

//we are using an anonymous function as we will not be needing it later on
document.querySelector('.btn-roll').addEventListener('click',function(){
    //1. genearte random number 
    var dice = Math.floor(Math.random() * 6 + 1);

    //2. display the generated number. We have to set it to block as we hid it on line no 22 
    var diceDOM = document.querySelector(".dice");
    console.log(dice);
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. Add dice value to the global score unless rolled value is 1
    if(dice != 1)
    {
        roundScore += dice;
        document.getElementById('score-'+activePlayer).textContent = roundScore + scores[activePlayer];
        if((roundScore + scores[activePlayer])>= maxScore)
        {
            //we have to replace the players name with text 'winner'
            document.getElementById('name-'+activePlayer).textContent = "Winner!"
        }
        document.getElementById('current-'+activePlayer).textContent = dice;
    }
    else
    {
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-'+activePlayer).textContent = 0;
        roundScore = 0;
        //change the active player
        activePlayer === 1 ? activePlayer=0 : activePlayer=1;
        //also chanhe the background of the active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = "none";
    }
});

document.querySelector('.btn-hold').addEventListener("click",function(){
    //If the value is added to hold, the global score should remain the same for the player and the player should change
    if(activePlayer == 1)
    {
        scores[1]+=roundScore;
        activePlayer = 0;
        roundScore = 0;
    } 
    else{
        scores[0]+=roundScore;
        activePlayer = 1;
        roundScore = 0;
    }
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = "none";
});

document.querySelector('.btn-new').addEventListener('click',function(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    //set player 1's background as active player
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //hide the dice
    document.querySelector('.dice').style.display = "none";

    //set all the scores for all the players to 0
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    maxScore = document.getElementById('score-input').value = "";
});