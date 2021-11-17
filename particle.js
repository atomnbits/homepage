const FRICTION = 0.8; //기본 0.98
const MOVE_SPEED = 0.75; //기본 0.88

export class Particle {

    constructor(pos, color) {

        //mobile check

        var mql = window.matchMedia("screen and (max-width: 768px)");
        let maxsize = 30;
        let minsize =15;
        if (mql.matches) { //mobile
            maxsize = 8;
            minsize = 5;
        } else { //desktop
            maxsize = 30;
            minsize = 15;
        }
        //mobile check end

        this.color = color;
        this.maxRadious = Math.random()*(maxsize-minsize)+minsize; //최대크기 8 최소크기 2 괜찮았음

        this.savedX =pos.x;
        this.savedY =pos.y;
        this.x = pos.x;
        this.y = pos.y;

        this.progress=0;
        this.radius =2;
        this.vr =0;
        this.vx =0;
        this.vy =0;

        this.fps =30;
        this.fpsTime =1000/this.fps;
    }

    draw(ctx){

        if(this.progress<130){
            this.vr += (this.maxRadious - this.radius)/this.fpsTime;
            this.vr *= MOVE_SPEED;
        }else{
            this.vr -= 1;
        }


        this.progress += 1;
        this.radius += this.vr;

        this.x +=(this.savedX-this.x)*MOVE_SPEED;
        this.y +=(this.savedY-this.y)*MOVE_SPEED;

        this.vx *= FRICTION;
        this.vy *= FRICTION;

        this.x += this.vx;
        this.y += this.vy;

        if(this.radius>1){

            const g = ctx.createRadialGradient(
                this.x,this.y,this.radius/2,
                this.x,this.y,this.radius
            );
            g.addColorStop(0,this.color);
            g.addColorStop(1,`rgba(255,255,255,0)`);


            ctx.beginPath();
            ctx.fillStyle = this.color;
            //ctx.fillStyle = g; //가장자리 블러
            ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
            ctx.fill();
        }
    }
}