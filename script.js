var level = 1;
var userHasLost;
var correctMoves = [];
var gameHasStarted = false;
var buttonColors = ["green", "red", "yellow", "blue"];
var moveInd = 0;
//var dispInd;


var buttons = document.querySelectorAll(".btn"); 

for(var i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function(e){

        // console.log("Here");
        // console.log(correctMoves);
        // console.log(moveInd);
        // console.log("Here");

        
        var correctMove = correctMoves[moveInd];
        var userMove = e.target.id;

        // console.log(`Correct move ${correctMove}`)
        // console.log(`User move ${userMove}`)


        pressButton(userMove);
        moveInd++;

        if(correctMove === userMove){

            
            
            if(moveInd === correctMoves.length){
    
    
                setTimeout(function(){
                    
                    
                    level++;
                    startLevel();
    
                },1000);
                
            }

        }
        else{
    
            losingSettings();
        
        }
        
    })

}



document.addEventListener("keydown", function(){

    if(!gameHasStarted)
    {
        gameHasStarted = true;
        startGame();
    }

    // startGame();
});




function startGame(){

    //console.log("Game has started");
    level = 1;
    userHasLost = false;
    correctMoves = [];
    moveInd = 0;
    //console.log(correctMoves);
    startLevel();


    
    
}

    
    

    




function startLevel(){

    //console.log("Level has started");

    document.querySelector('#level-title').innerText = `Level ${level}`;
    var ind = Math.floor(Math.random()*4);
    var color = buttonColors[ind];
    correctMoves.push(color);

    //pressButton(color);

    //console.log(correctMoves);

    // for(let i = 0; i < correctMoves.length; i++) {


    //     setTimeout(() => {
    //       pressButton(correctMoves[i]);
    //     }, 2000);


    //   }

    
    
    moveInd = 0;
    pressButton(color);


    // dispInd = 0;
    // displayColors();

    // correctMoves.forEach(ele => {

    //     setTimeout(() => {

    //         pressButton(ele);
    //     }, 1000);
    // })

    
    


}



// function displayColors(){

//     setTimeout(function(){

//         pressButton(correctMoves[dispInd]);
//         dispInd++;
//         if(dispInd < correctMoves.length){

//             displayColors();
//         }
//     }, 1000);

// }


function pressButton(color){


    
    //console.log(color);
    document.querySelector(`#${color}`).classList.add('pressed');


    if(gameHasStarted){

        var sound = new Audio(`sounds/${color}.mp3`);
        sound.play();

    }
    
 
    setTimeout(function(){
 
     document.querySelector(`#${color}`).classList.remove('pressed');
     
    }, 300);


}


function losingSettings(){

    
    gameHasStarted = false;
    level = 1;
    correctMoves = [];
    moveInd = 0;
    //console.log("Game has ended");

    loadLosingScreen();


}
function loadLosingScreen(){

    document.querySelector("body").classList.add('game-over');
    
    document.querySelector('#level-title').innerText = 'Game Over, Press Any Key to Restart';

    var sound = new Audio(`sounds/wrong.mp3`);
    sound.play();

    setTimeout(function(){

        document.querySelector("body").classList.remove('game-over');

    }, 500);

    

}