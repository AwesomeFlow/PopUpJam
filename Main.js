var firstSpot = [500,350];
var secondSpot = [600,350];
var thirdSpot = [700,350];
var backSpot = [900,500];
var bossHealth;
var damage = 5;



function setup() {
    createCanvas(960, 540);
    noCursor();
    hand = new MouseHand();
    partym1 = new PartyM(firstSpot[0],firstSpot[1], 1);
    partym2 = new PartyM(secondSpot[0],secondSpot[1], 2);
    partym3 = new PartyM(thirdSpot[0],thirdSpot[1], 3);
    partym4 = new PartyM(backSpot[0],backSpot[1], 4);
    partyArray = [partym1,partym2,partym3,partym4];
    setTimeout(bossAttack(),5000);
   }

function draw(){
    background(200);
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
    harmpos = round(random(0,2));
    partyArray[harmpos].health -= damage;
    console.log(harmpos);
    console.log(partyArray[harmpos].health);
    setTimeout(bossAttack,5000);
}

function HealPlayer(){
    hand.position();
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
          for(i = 0; i < 4; i++){
            for(j = 0; j< 4; j++){
                if(partyArray[j].position == 4){
                    if(hand.first == true && partyArray[i].position == 1){
                    hand.recovery(partyArray[i],partyArray[j]);
                    //console.log(partyArray[i].health);
                    console.log(partyArray[j].mana);
                    }
                    else if(hand.second == true && partyArray[i].position == 2){
                    hand.recovery(partyArray[i],partyArray[j]);
                    //console.log(partyArray[i].health);
                    console.log(partyArray[j].mana);
                    }
                    else if (hand.third == true && partyArray[i].position == 3){
                    hand.recovery(partyArray[i],partyArray[j]);
                    //console.log(partyArray[i].health);
                    console.log(partyArray[j].mana);
                    }
                }
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