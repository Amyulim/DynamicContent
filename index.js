
var myInp = document.getElementById("num")
var numDisp = document.getElementById("numDisplay");
var answer = Math.round(Math.random()*100); //* Ths reaseon why make this number var is reduce all process when we change this value*//
var score = 100;


document.getElementById("guess").addEventListener("click", function() {
//    console.log("myInp.value");
//    console.log(myInp.value+1, 50+1);                             //*This is fake number*//
//    console.log("45", parseInt("45")+1);                          //*This become real number*//
//    document.getElementById("num").style.backgroundColor="black"; //*This is to test it*//
    
//    numDisp.innerHTML = "Hi";
    
    var myNum = parseInt(myInp.value);
    
    if(myNum == answer){
        numDisp.innerText = "You win! Score: " +score;
    } else {
        if(myNum < answer){
            numDisp.innerText = "Too small";
        } else if(myNum > answer){
            numDisp.innerText = "Too Big";        
        } else {
            numDisp.innerText = "Type the number!"
        }
        score = score - 1;
        
    }
    
    
});