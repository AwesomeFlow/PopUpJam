function PartyM(x,y,p,name){
this.health = 100;
this.mana = 100;
this.atk = 5;
this.doubldATK = 10;
this.x = x;
this.y = y;
this.r = 30;
this.position = p;
this.SpriteColor = color(random(25,255), random(25, 255) , random(25, 255), 128);
this.name = name;
this.dynaTaunt = false;
this.shovTank = false;
this.pickATK = false;
this.isDead = false;

this.ability = function(partyClicked,partyBack){
    if(!isDead){
        if(this.mana > 0){
            partyBack.mana -= 1;
            if(this.name == "Lamp"){
                console.log("healing");
                if(partyClicked.health < 100)
                partyClicked.health += 1;
                else
                console.log("All healed!");
                }
            else if(this.name == "Pick"){
                this.pickATK = true;
                //console.log("fighting"); 
                //console.log(partyClicked.pickAtk);
            }
            else if(this.name == "Shov"){
                this.shovTank = true;
                console.log("tanking");
            }
            else if(this.name == "Dyna"){
                this.dynaTaunt = true;
                console.log("maging");
            }
        }
        else{
            console.log("Out of tabacco!");
        }
    }
    else
        console.log("ye dead!");
}

this.show = function(){
    push();
    noStroke();
    fill(this.SpriteColor);
    ellipse(this.x,this.y, this.r * 2, this.r * 2);
    pop();
    
    push();
    noStroke();
    fill(this.SpriteColor);
    rect(this.x - 30, this.y - 65, this.health, 10);
    pop();

    push();
    noStroke();
    fill(this.SpriteColor);
    rect(this.x - 30, this.y - 50, this.mana, 10);
    pop();

    if(this.position != 4 && this.mana <= 100){
        this.mana += .1;
        }
    else if(this.position == 4 && this.health <= 100){
        this.health += .1;
        }
    }
}