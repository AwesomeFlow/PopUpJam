function MouseHand(){
    this.x = mouseX;
    this.y = mouseY;
    this.r = 20;
    this.SpriteColor = color(random(25,255), random(25, 255) , random(25, 255), 128);

    this.show = function(){
        noStroke();
        fill(this.SpriteColor);
        ellipse(mouseX, mouseY, this.r * 2, this.r * 2);
        }
}