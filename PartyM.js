function PartyM(x,y){
this.health = 0;
this.mana = 0;
this.x = x;
this.y = y;
this.r = 30;
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