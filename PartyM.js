function PartyM(x,y,p){
this.health = 100;
this.mana = 100;
this.x = x;
this.y = y;
this.r = 30;
this.position = p;
this.SpriteColor = color(random(25,255), random(25, 255) , random(25, 255), 128);

this.SwitchSpot = function(xValue, yValue){

    }

this.Ability = function(){
    console.log("it's something")
    }

this.show = function(){
    noStroke();
    fill(this.SpriteColor);
    ellipse(this.x,this.y, this.r * 2, this.r * 2);
    
    }
}