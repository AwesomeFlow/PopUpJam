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

let period = 50;
let half_period = 43.75;
let third_period = 37.5;
let fourth_period = 31.25;
let fifth_period = 25;
let sixth_period = 18.75;
let seventh_period = 12.5;
let eighth_period = 6.25;


this.ability = function(partyClicked,partyBack){
    if(!this.isDead){
        if(this.mana > 0){
            if(this.name == "Lamp"){
                console.log("healing");
                partyBack.mana -= .25;
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

    if(this.health <= 0){
        this.health = 0;
    }

}

this.changeReso = function(w,h){
    if(this.position != 4){
        push();
        noSmooth();
        if(this.name == "Lamp" && this.isDead==true){
          image(lampdead,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Lamp" && this.isDead==false){
            if(frameCount % period < eighth_period)
            {
              image(lampi2,this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < seventh_period)
            {
              image(lampi3, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < sixth_period)
            {
              image(lampi4, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fifth_period)
            {
              image(lampi5, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fourth_period)
            {
              image(lampi6, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < third_period)
            {
             image(lampi7, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < half_period)
            {
             image(lampi8, this.x-40,this.y-50,w,h);
            }
          else
            {
              image(lampi1, this.x-40,this.y-50,w,h);
            }
            //image(lampmain,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Pick" && this.isDead==true){
          image(pickdead,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Pick" && this.isDead==false){
            if(frameCount % period < eighth_period)
            {
              image(picki2,this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < seventh_period)
            {
              image(picki3, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < sixth_period)
            {
              image(picki4, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fifth_period)
            {
              image(picki5, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fourth_period)
            {
              image(picki6, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < third_period)
            {
             image(picki7, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < half_period)
            {
             image(picki8, this.x-40,this.y-50,w,h);
            }
          else
            {
              image(pickmain, this.x-40,this.y-50,w,h);
            }
            //image(pickmain,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Shov" && this.isDead==true){
          image(shovdead,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Shov" && this.isDead==false){
            if(frameCount % period < eighth_period)
            {
              image(shovi2,this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < seventh_period)
            {
              image(shovi3, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < sixth_period)
            {
              image(shovi4, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fifth_period)
            {
              image(shovi5, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fourth_period)
            {
              image(shovi6, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < third_period)
            {
             image(shovi7, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < half_period)
            {
             image(shovi8, this.x-40,this.y-50,w,h);
            }
          else if (frameCount % period)
            {
              image(shovi1, this.x-40,this.y-50,w,h);
            }
            //image(shovmain,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Lamp" && this.isDead==true){
          image(dynadead,this.x-40,this.y-50,w,h);
        }
        else if(this.name == "Dyna" && this.isDead==false){
            if(frameCount % period < eighth_period)
            {
              image(dynai1,this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < seventh_period)
            {
              image(dynai2, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < sixth_period)
            {
              image(dynai3, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fifth_period)
            {
              image(dynai4, this.x-40,this.y-50,w,h);
            }
          else if(frameCount % period < fourth_period)
            {
              image(dynai5, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < third_period)
            {
             image(dynai6, this.x-40,this.y-50,w,h);
            }
        else if(frameCount % period < half_period)
            {
             image(dynai7, this.x-40,this.y-50,w,h);
            }
          else
            {
              image(dynai8, this.x-40,this.y-50,w,h);
            }
            //image(dynamain,this.x-40,this.y-50,w,h);
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