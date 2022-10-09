function PartyM(x,y,p,name){
this.health = 100;
this.mana = 100;
this.atk = 5;
this.doubldATK = 10;
this.x = x;
this.y = y;
this.resolution = 1;
this.position = p;
this.SpriteColor = color(random(25,255), random(25, 255) , random(25, 255), 128);
this.name = name;
this.dynaTaunt = false;
this.shovTank = false;
this.pickATK = false;
this.isDead = false;


this.ability = function(partyClicked,partyBack){
    if(!this.isDead){
        if(this.mana > 0){
            if(this.name == "Lamp"){
                console.log("healing");
                partyBack.mana -= .5;
                if(partyClicked.health < 100)
                partyClicked.health += 1;
                else
                console.log("All healed!");
                }
            else if(this.name == "Pick"){
                console.log("fighting");
                partyBack.mana -= .25;
                this.pickATK = true;
            }
            else if(this.name == "Shov"){
                this.shovTank = true;
                console.log("tanking");
                partyBack.mana -= .25;
            }
            else if(this.name == "Dyna"){
                this.dynaTaunt = true;
                console.log("maging");
                partyBack.mana -= .25;
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
    if(this.position != 4){
        this.changeReso(144,144);
        push();
        noStroke();
        fill('red');
        rect(this.x - 30, this.y - 65, this.health, 10);
        pop();
    
        push();
        noStroke();
        fill('blue');
        rect(this.x - 30, this.y - 50, this.mana, 10);
        pop();
    }
    else if(this.position == 4){
        this.changeReso(288,288);
        
        push();
        noStroke();
        fill('red');
        rect(this.x, this.y - 150, this.health, 10);
        pop();
    
        push();
        noStroke();
        fill('blue');
        rect(this.x, this.y - 135, this.mana, 10);
        pop();
    }
    
    if(this.position != 4 && this.mana <= 100 && !this.isDead){
        this.mana += .1;
        }
    else if(this.position == 4 && this.health <= 100 && !this.isDead){
        this.health += .1;
        }

}

this.changeReso = function(w,h){
    if(this.position != 4){
        push();
        if(this.name == "Lamp"){
            image(lampmain,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Pick"){
            image(pickmain,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Shov"){
            image(shovmain,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Dyna"){
            image(dynamain,this.x-40,this.y-50,w,h);
        }
        pop();
        }
    else if(this.position == 4){
        push();
        if(this.name == "Lamp"){
            image(lampmain,this.x-100,this.y-150,w,h);
        }
        else if(this.name == "Pick"){
            image(pickmain,this.x-100,this.y-150,w,h);
        }
        else if(this.name == "Shov"){
            image(shovmain,this.x-100,this.y-150,w,h);
        }
        else if(this.name == "Dyna"){
            image(dynamain,this.x-100,this.y-150,w,h);
        }
        pop();
        }
    }
}