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
        if(mouseX >= 380 && mouseX <= 760){
            ellipse(mouseX, 500, this.r * 2, this.r * 2);
            }
        else if(mouseX < 380){
            ellipse(380, 500, this.r * 2, this.r * 2);
            }
        else if(mouseX > 760){
            ellipse(760, 500, this.r * 2, this.r * 2);
            }
        }

    this.position = function(){
        if(mouseX < 470 && mouseX > 410){
            this.first = true;
            this.second = false;
            this.third = false;
        }
        else if(mouseX < 615 && mouseX > 555){
            this.first = false;
            this.second = true;
            this.third = false;
        }
        else if(mouseX < 760 && mouseX > 700){
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
}