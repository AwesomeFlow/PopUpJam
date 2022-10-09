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
        ellipse(mouseX, 400, this.r * 2, this.r * 2);
        }

    this.position = function(){
        if(mouseX < 730 && mouseX > 670){
            this.first = true;
            this.second = false;
            this.third = false;
        }
        else if(mouseX < 830 && mouseX > 770){
            this.first = false;
            this.second = true;
            this.third = false;
        }
        else if(mouseX < 930 && mouseX > 870){
            this.first = false;
            this.second = false;
            this.third = true;
        }
        else{
            this.first = false;
            this.second = false;
            this.third = false;
        }
    }
    this.recovery = function(PartyM,PartyB){
        PartyM.health += 1;
        PartyB.mana -= 1;
    }
}