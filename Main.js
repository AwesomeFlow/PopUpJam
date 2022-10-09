var firstSpot = [410,350];
var secondSpot = [555,350];
var thirdSpot = [700,350];
var backSpot = [850,500];
var names = ["Shov","Pick","Dyna","Lamp"];
var isClickedPos = 0;
var bossTotalHealth = 2000;
var bossHealth = 2000;
var isTaunted = false;
var dmgDown = false;
var atkUp = false;
var gameover = false;
var harmpos;
var playerhit;
var damage = 40;
var totalAttack = 0;

function preload(){
    backmap = loadImage("assets/Background.png");
    dynamain = loadImage("assets/characters/dyna.png");
    lampmain = loadImage("assets/characters/lamp.png");
    pickmain = loadImage("assets/characters/pick.png");
    shovmain = loadImage("assets/characters/shov.png");
    //dyna
    dynai1= loadImage("assets/anim/dyna_idle_1.png");
    dynai2= loadImage("assets/anim/dyna_idle_2.png");
    dynai3= loadImage("assets/anim/dyna_idle_3.png");
    dynai4= loadImage("assets/anim/dyna_idle_4.png");
    dynai5= loadImage("assets/anim/dyna_idle_5.png");
    dynai6= loadImage("assets/anim/dyna_idle_6.png");
    dynai7= loadImage("assets/anim/dyna_idle_7.png");
    dynai8= loadImage("assets/anim/dyna_idle_8.png");
    //lamp
    lampi1= loadImage("assets/anim/lamp_idle_1.png");
    lampi2= loadImage("assets/anim/lamp_idle_2.png");
    lampi3= loadImage("assets/anim/lamp_idle_3.png");
    lampi4= loadImage("assets/anim/lamp_idle_4.png");
    lampi5= loadImage("assets/anim/lamp_idle_5.png");
    lampi6= loadImage("assets/anim/lamp_idle_6.png");
    lampi7= loadImage("assets/anim/lamp_idle_7.png");
    lampi8= loadImage("assets/anim/lamp_idle_8.png");
    //pick
    picki1= loadImage("assets/anim/pick_idle_1.png");
    picki2= loadImage("assets/anim/pick_idle_2.png");
    picki3= loadImage("assets/anim/pick_idle_3.png");
    picki4= loadImage("assets/anim/pick_idle_4.png");
    picki5= loadImage("assets/anim/pick_idle_5.png");
    picki6= loadImage("assets/anim/pick_idle_6.png");
    picki7= loadImage("assets/anim/pick_idle_7.png");
    picki8= loadImage("assets/anim/pick_idle_8.png");
    //shov
    shovi1= loadImage("assets/anim/shov_idle_1.png");
    shovi2= loadImage("assets/anim/shov_idle_2.png");
    shovi3= loadImage("assets/anim/shov_idle_3.png");
    shovi4= loadImage("assets/anim/shov_idle_4.png");
    shovi5= loadImage("assets/anim/shov_idle_5.png");
    shovi6= loadImage("assets/anim/shov_idle_6.png");
    shovi7= loadImage("assets/anim/shov_idle_7.png");
    shovi8= loadImage("assets/anim/shov_idle_8.png");
}

function setup() {
    createCanvas(960, 540);
    noCursor();
    hand = new MouseHand();
    partym1 = new PartyM(firstSpot[0],firstSpot[1], 1, names[0]);
    partym2 = new PartyM(secondSpot[0],secondSpot[1], 2, names[1]);
    partym3 = new PartyM(thirdSpot[0],thirdSpot[1], 3, names[2]);
    partym4 = new PartyM(backSpot[0],backSpot[1], 4, names[3]);
    partyArray = [partym1,partym2,partym3,partym4];
    setTimeout(bossAttack(),3000);
    setTimeout(teamAttack(),6000);
   }

function draw(){
    background(backmap);
    console.log(playerhit);
    hand.show();
    PlayerPower();
    SummonParty();
    ResourceBars(bossHealth);
    //console.log(isTaunted + "taunt is on");
    gameover = Lose();
    if(gameover){
        
    }
}

function SummonParty(){
    partym1.show();
    partym2.show();
    partym3.show();
    partym4.show();
}

function bossAttack(){
    if(!isTaunted){
        harmpos = round(random(0,3));
        playerhit = CheckTheLoop(harmpos);
        if(partyArray[playerhit].health <= 0){
            SwitchPlayer(playerhit);
            partyArray[playerhit].health = 0;
            partyArray[playerhit].isDead = true;
        }
        else{
        partyArray[playerhit].health -= damage;
        }
        console.log(harmpos);
        console.log(partyArray[playerhit].health);
        setTimeout(bossAttack,3000);
    }
    else if(isTaunted){
        playerhit = isClickedPos;
        console.log("hit him!");
        if(partyArray[playerhit].health <= 0){
            SwitchPlayer(playerhit);
            partyArray[playerhit].health = 0;
            partyArray[playerhit].isDead = true;
        }
        else{
        partyArray[playerhit].health -= damage;
        }
        console.log(playerhit);
        console.log(partyArray[playerhit].health);
        setTimeout(bossAttack,4000);
    }
    if(dmgDown){
        harmpos = round(random(0,3));
        playerhit = CheckTheLoop(harmpos);
        if(playerhit == isClickedPos){
        console.log(playerhit);
        console.log(isClickedPos);
        console.log(partyArray[playerhit].health);
        setTimeout(bossAttack,4000);
        }
        else{
            if(partyArray[playerhit].health <= 0){
                SwitchPlayer(playerhit);
                partyArray[playerhit].health = 0;
                partyArray[playerhit].isDead = true;
            }
            else{
            partyArray[playerhit].health -= damage;
            }
        console.log(playerhit);
        console.log(partyArray[playerhit].health);
        setTimeout(bossAttack,5000);
        }
    }
}

function teamAttack(){
    for(i = 0; i < 4; i++){
        if(partyArray[i].position != 4){
            if(!partyArray[i].isDead && atkUp){
                totalAttack += 25;
            }
            else if(!partyArray[i].isDead && !atkUp){
                totalAttack += 20;
            }
            else{
                totalAttack += 0;
            }
        }
    }    
    bossHealth -= totalAttack;
    console.log (bossHealth + " is losing" + totalAttack + "health");
    totalAttack = 0;
    setTimeout(teamAttack,6000);
}

function PlayerPower(){
    hand.position();
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
          for(i = 0; i < 4; i++){
            for(j = 0; j< 4; j++){
                if(partyArray[j].position == 4){
                    if(hand.first == true && partyArray[i].position == 1){
                    partyArray[j].ability(partyArray[i],partyArray[j]);
                    isTaunted = partyArray[j].dynaTaunt;
                    dmgDown = partyArray[j].shovTank;
                    atkUp = partyArray[j].pickATK;
                    isClickedPos = 0;
                    //console.log(partyArray[i].health);
                    //console.log(partyArray[j].mana);
                    //console.log(partyArray[j].pickATK);
                    }
                    else if(hand.second == true && partyArray[i].position == 2){
                    partyArray[j].ability(partyArray[i],partyArray[j]);
                    isClickedPos = 1;
                    isTaunted = partyArray[j].dynaTaunt;
                    dmgDown = partyArray[j].shovTank;
                    atkUp = partyArray[j].pickATK;
                    //console.log(partyArray[i].health);
                    //console.log(partyArray[j].mana);
                    //console.log(partyArray[j].pickATK);
                    }
                    else if (hand.third == true && partyArray[i].position == 3){
                    partyArray[j].ability(partyArray[i],partyArray[j]);
                    isClickedPos = 2
                    isTaunted = partyArray[j].dynaTaunt;
                    dmgDown = partyArray[j].shovTank;
                    atkUp = partyArray[j].pickATK;
                    //console.log(partyArray[i].health);
                    //console.log(partyArray[j].mana);
                    //console.log(partyArray[j].pickATK);
                    }
                }
            }
          }  
          
        }
    }
    else{
        isTaunted = false;
        dmgDown = false;
        atkUp = false;
    }
}

function ResourceBars(Bhealth){
    fill('red');
    rect(200, 200, Bhealth / 4, 10);
}

function CheckTheLoop(number){
    for(i = 0; i < 4; i++){
        if(number == partyArray[i].position)
            return i;
    }
    return 0;
}

function keyReleased(){
    if(keyCode === 49){
        for(i = 0; i < 4; i++){
            if (partyArray[i].position == 1){
                partyArray[i].x = backSpot[0];
                partyArray[i].y = backSpot[1];
                console.log(partyArray[i].x + partyArray[i].y);
                partyArray[i].position = 4;
                console.log(partyArray[i].name);
            }
            else if(partyArray[i].position == 4){
                partyArray[i].x = firstSpot[0];
                partyArray[i].y = firstSpot[1];
                partyArray[i].position = 1;
                console.log(partyArray[i].x + partyArray[i].y);
            }
        }
    }
    if(keyCode === 50){
        for(i = 0; i < 4; i++){
            if (partyArray[i].position == 2){
                partyArray[i].x = backSpot[0];
                partyArray[i].y = backSpot[1];
                console.log(partyArray[i].x + partyArray[i].y);
                partyArray[i].position = 4;
                console.log(partyArray[i].name);
            }
            else if(partyArray[i].position == 4){
                partyArray[i].x = secondSpot[0];
                partyArray[i].y = secondSpot[1];
                partyArray[i].position = 2;
                console.log(partyArray[i].x + partyArray[i].y);
            }
        }
    }
    if(keyCode === 51){
        for(i = 0; i < 4; i++){
            if (partyArray[i].position == 3){
                partyArray[i].x = backSpot[0];
                partyArray[i].y = backSpot[1];
                console.log(partyArray[i].x + partyArray[i].y);
                partyArray[i].position = 4;
                console.log(partyArray[i].name);
            }
            else if(partyArray[i].position == 4){
                partyArray[i].x = thirdSpot[0];
                partyArray[i].y = thirdSpot[1];
                partyArray[i].position = 3;
                console.log(partyArray[i].x + partyArray[i].y);
            }
        }
    }
}

function SwitchPlayer(bossPush){
    for(i = 0; i < 4; i++){    
        if (partyArray[i].position == bossPush && bossPush == 1){
            partyArray[i].x = backSpot[0];
            partyArray[i].y = backSpot[1];
            partyArray[i].position = 4;
        }
        else if(partyArray[i].position == 4 && bossPush == 1){
            partyArray[i].x = firstSpot[0];
            partyArray[i].y = firstSpot[1];
            partyArray[i].position = 1;
        }
        else if (partyArray[i].position == bossPush && bossPush == 2){
            partyArray[i].x = backSpot[0];
            partyArray[i].y = backSpot[1];
            partyArray[i].position = 4;
        }
        else if(partyArray[i].position == 4 && bossPush == 2){
            partyArray[i].x = secondSpot[0];
            partyArray[i].y = secondSpot[1];
            partyArray[i].position = 2;
        }
        else if (partyArray[i].position == bossPush && bossPush == 3){
            partyArray[i].x = backSpot[0];
            partyArray[i].y = backSpot[1];
            partyArray[i].position = 4;
        }
        else if(partyArray[i].position == 4 && bossPush == 3){
            partyArray[i].x = thirdSpot[0];
            partyArray[i].y = thirdSpot[1];
            partyArray[i].position = 3;
        }
    }
}

function Lose(){
    for(i = 0; i < 4; i++){
        if(partyArray[i].isDead == false)
            return false;
    }
    return true;
}