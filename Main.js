var firstSpot = [700,450];
var secondSpot = [800,450];
var thirdSpot = [900,450];
var backSpot = [1200,600];
var bossHealth;
var damage = 50;


function setup() {
    createCanvas(1280, 720);
    noCursor();
    hand = new MouseHand();
    partym1 = new PartyM(firstSpot[0],firstSpot[1], 1);
    partym2 = new PartyM(secondSpot[0],secondSpot[1], 2);
    partym3 = new PartyM(thirdSpot[0],thirdSpot[1], 3);
    partym4 = new PartyM(backSpot[0],backSpot[1], 4);
    partyArray = [partym1,partym2,partym3,partym4];
    //setTimeout(bossAttack,5000);
   }

function draw(){
    background(255);
    hand.show();
    HealPlayer();
    SummonParty();
    
    ChangeSpots();
}

function SummonParty(){
    partym1.show();
    partym2.show();
    partym3.show();
    partym4.show();
}

function bossAttack(){
    harmpos=random(0,2);
    PartyM.health[harmpos]=PartyM.health[harmpos]-damage;
    setTimeout(bossAttack,5000);
}

function HealPlayer(){
    hand.position();
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
          for(i = 0; i < 4; i++){
            if(hand.first == true && partyArray[i].position == 1){
            hand.recovery(partyArray[i]);
            console.log(partyArray[i].mana);
             }
            else if(hand.second == true && partyArray[i].position == 2){
            hand.recovery(partyArray[i]);
            console.log(partyArray[i].mana);
            }
            else if (hand.third == true && partyArray[i].position == 3){
            hand.recovery(partyArray[i]);
            console.log(partyArray[i].mana);
            }
          }  
          
        }
    }
}

function ChangeSpots(){
    if (keyIsPressed) {
        if(keyCode == 49){
            for(i = 0; i < 4; i++){
                if (partyArray[i].position == 1){
                    partyArray[i].x = backSpot[0];
                    partyArray[i].y = backSpot[1];
                    console.log(partyArray[i].x + partyArray[i.y]);
                    partyArray[i].position = 4;
                }
                else if(partyArray[i].position == 4){
                    partyArray[i].x = firstSpot[0];
                    partyArray[i].y = firstSpot[1];
                    partyArray[i].position = 1;
                    console.log(partyArray[i].x + partyArray[i.y]);
                }
            }
        }
        if(keyCode == 50){
            for(i = 0; i < 4; i++){
                if (partyArray[i].position == 2){
                    partyArray[i].x = backSpot[0];
                    partyArray[i].y = backSpot[1];
                    console.log(partyArray[i].x + partyArray[i.y]);
                    partyArray[i].position = 4;
                }
                else if(partyArray[i].position == 4){
                    partyArray[i].x = secondSpot[0];
                    partyArray[i].y = secondSpot[1];
                    partyArray[i].position = 2;
                    console.log(partyArray[i].x + partyArray[i.y]);
                }
            }
        }
        if(keyCode == 51){
            for(i = 0; i < 4; i++){
                if (partyArray[i].position == 3){
                    partyArray[i].x = backSpot[0];
                    partyArray[i].y = backSpot[1];
                    console.log(partyArray[i].x + partyArray[i.y]);
                    partyArray[i].position = 4;
                }
                else if(partyArray[i].position == 4){
                    partyArray[i].x = thirdSpot[0];
                    partyArray[i].y = thirdSpot[1];
                    partyArray[i].position = 3;
                    console.log(partyArray[i].x + partyArray[i.y]);
                }
            }
        }
    }
}