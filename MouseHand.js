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
        if(mouseX >= 420 && mouseX <= 730){
            ellipse(mouseX, 400, this.r * 2, this.r * 2);
            }
        else if(mouseX < 420){
            ellipse(420, 400, this.r * 2, this.r * 2);
            }
        else if(mouseX > 730){
            ellipse(730, 400, this.r * 2, this.r * 2);
            }
        }

    this.position = function(){
        if(mouseX < 530 && mouseX > 420){
            this.first = true;
            this.second = false;
            this.third = false;
        }
        else if(mouseX < 630 && mouseX > 545){
            this.first = false;
            this.second = true;
            this.third = false;
        }
        else if(mouseX < 730 && mouseX > 670){
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