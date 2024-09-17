var random=0;
var ran1=0;
var ran2=0;

function playerNames() {
   
    const name1= document.getElementById("input1").value;
    const name2= document.getElementById("input2").value;
    sessionStorage.setItem('text1', name1);
    sessionStorage.setItem('text2', name2);
    window.location.href = 'GamePage.html'; 
}

window.onload = function() {
    
      const name1 = sessionStorage.getItem('text1');
      const name2 = sessionStorage.getItem('text2');
  
      // Display player names
      document.getElementById('name1').textContent = name1;
      document.getElementById('name2').textContent = name2;
}


function rollTheDice(){
    const name1 = sessionStorage.getItem('text1');
    const name2 = sessionStorage.getItem('text2');
    for(var i=0;i<2;i++){
    random=Math.random();
    random=random*6;
    random++;
    random=Math.floor(random);
    imageSelector(random, i);
    }
    if(ran1>ran2) {
        document.getElementById("result").innerHTML='Congratulations ' +name1+ '!!! You have Luck on your side this time!!!';
    }
    else if(ran1<ran2) {
        document.getElementById("result").innerHTML='Congratulations ' +name2+ '!!! You have Luck on your side this time!!!';
    }
    if(ran1==ran2) {
        document.getElementById("result").innerHTML='Ohhh!!! It looks like we have got a tie here. It is ok!!! You can try again';
    }
}

function imageSelector(random, imageNo) {
    imageNo++;
    if(imageNo==1)
    {ran1=random;}
    else if(imageNo==2)
    {ran2=random;}
    if(random==1)
    {
        var dice= 'dice_1.jpeg';
        const imageElement = document.getElementById('i'+imageNo);
        imageElement.src = dice;
    }
    else if(random==2){
        var dice= 'dice_2.jpeg';
        const imageElement = document.getElementById('i'+imageNo);
        imageElement.src = dice;
    }
    else if(random==3){
        var dice= 'dice_3.jpeg';
        const imageElement = document.getElementById('i'+imageNo);
        imageElement.src = dice;
    }
    else if(random==4){
        var dice= 'dice_4.jpeg';
        const imageElement = document.getElementById('i'+imageNo);
        imageElement.src = dice;
    }
    else if(random==5){
        var dice= 'dice_5.jpeg';
        const imageElement = document.getElementById('i'+imageNo);
        imageElement.src = dice;
    }
    else if(random==6){
        var dice= 'dice_6.jpeg';
        const imageElement = document.getElementById('i'+imageNo);
        imageElement.src = dice;
    }
}




    
    
    