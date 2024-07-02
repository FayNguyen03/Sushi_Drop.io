class Letter{
    constructor(){
        this.t = random(alphabets);
        this.reset();
    }

    update(x, y ,w, h, py, px){ 
        if (this.collide(x, y, w, h) == false){
            this.y += this.dy;
            this.c = 0;
        }
        else{
            this.c = color(255,100,0);

        }
        if (this.y + this.h > height){
            this.reset();
        }
    }
    
    reset(){
        this.x0 = random(width);
        this.y0 = random(-50, -10);
        this.size = random(15,30);
        this.c = color(0)
        let bbox = font.textBounds(this.t, this.x0, this.y0, this.size);
        this.x = bbox.x;
        this.y = bbox.y;
        this.w = bbox.w;
        this.h = bbox.h;
        this.dy = map(this.size, 15, 30, 0.4, 2);
    }
    display(){
        noFill();
        noStroke();
        //rect(this.x, this.y , this.w, this.h);

        fill(this.c);
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
            left <= this.w + this.x && 
            top <= this.y + this.h && 
            bottom >=  this.y + this.h){
            return true;
        }
        else{
            return false;
        }
    }
}