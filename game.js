var Player1=prompt("player 1 choose rock, paper, scissors?");
var Player2=prompt("player 2 choose rock, paper, scissors?");
console.log("Player 1",Player1);
console.log("Player 2",Player2);

var pps= function(Player1,Player2){
    
    if(Player1=="rock"){
        if(Player2=="scissors"){
            return "you win.!! player 1";            
            }else if(Player2=="paper"){
            return"you win!! player 2";  
            }else
            return"play again";  
            }
      if(Player1=="paper"){
        if(Player2=="scissors"){
            return "you win.!! player 2";            
            }else if(Player2=="paper"){
            return"play again";    
            }else
            return "you win.!! player 1"; 
            }  
            
      if(Player1=="scissors"){
        if(Player2=="scissors"){
            return"play again"; 
            }else if(Player2=="paper"){
            return "you win.!! player 1"; 
            }else
            return "you win.!! player 2"; 
            }  
    
    }
pps(Player1,Player2);
    
