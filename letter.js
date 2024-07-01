class Letter{
    constructor(){
        this.t = random(alphabets);
        this.x0 = width/2;
        this.y0 = 0;
        this.size = 50;

        let bbox = font.textBounds(this.t, this.x0, this.y0, this.size);
        this.x = bbox.x;
        this.y = bbox.y;
        this.w = bbox.w;
        this.h = bbox.h;
        this.dy = 1;
    }

    update(x, y ,w, h){ 
        if (this.collide(x, y, w, h) == false){
            this.y += this.dy;
        }
    }
    
    display(){
        noFill();
        stroke(0);
        rect(this.x, this.y , this.w, this.h);

        fill(0);
        textFont(font);
        textSize(this.size);
        text(this.t, this.x, this.y + this.h);
    }

    collide(x, y, w, h){
        let right = x + w;
        let left = x;
        let top = y;
        let bottom = y + h;
        if (right >= this.x && 
            left <= this.w + this.h && 
            top <= this.y + this.h && 
            bottom >=  this.y + this.h){
            return true;
        }
        else{
            return false;
        }
    }
}