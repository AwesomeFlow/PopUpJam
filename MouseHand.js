function MouseHand(){
    this.x = mouseX;
    this.y = mouseY;
    this.r = 20;
    this.SpriteColor = color(random(25,255), random(25, 255) , random(25, 255), 128);
    this.first = false;
    this.second = false;
    this.third = false;

    this.show = function(){
        noStroke();
        fill(this.SpriteColor);
        ellipse(mouseX, 500, this.r * 2, this.r * 2);
        }

    this.position = function(){
        if(mouseX < 750){
            this.first = true;
            console.log(this.first);
        }
    }
    this.recovery = function(PartyM){
        PartyM.mana +1;
        console.log(PartyM.mana);
    }
}