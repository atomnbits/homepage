import{Text} from './text.js';
import {Particle} from './particle.js';
import {hslToHex} from './utils.js';

export class Visual{
    constructor(){
        this.text = new Text();
        this.particles = [];
        this.mouse = {
            x:0,y:0,radius: 50
        };

        document.addEventListener('pointermove', this.onMove.bind(this),false);

    }

    show(stageWidth,stageHeight){

        //mobile check
        var mql = window.matchMedia("screen and (max-width: 768px)");
        let densityvalue = 20;
        if (mql.matches) { //mobile
            densityvalue = 3;
        } else { //desktop
            densityvalue = 20;
        }
        //mobile check end



        this.pos = this.text.setText('<a&&b>',densityvalue,stageWidth,stageHeight);
        this.posTotal = this.pos.length -1;
    }

    animate(ctx){
//        console.log(this.particles.length);
       
        if(!this.pos){
            return;
        }

        for(let i =0; i<10;i++){
            const myPos = this.pos[(Math.random()*this.posTotal) | 0 ];
            this.particles.push(new Particle(myPos, this.getColor()));

        }

        for(let i =0;i<this.particles.length;i++){
            const item =this.particles[i];
            if(item.radius<=1){
                this.particles.splice(i,1);
            }

            const dx = this.mouse.x - item.x;
            const dy = this.mouse.y -item.y;
            const dist = Math.sqrt(dx*dx+dy*dy);
            const minDist = item.radius+this.mouse.radius;

            if(dist<minDist){
                item.progress+=300;
            }

            item.draw(ctx);
        }
    }

    getColor(){ 
        const minHue =20;
        const maxHue =30;
        const minLight = 85;
        const maxLight = 92;
        const lightness = (maxLight- minLight)*Math.random()+minLight;
        const hue = (maxHue-minHue) * Math.random() + minHue;
        return hslToHex(hue,40,lightness);
        // Hue 205-210, s 63,l 60 괜찮았음   형광색: background: 70,90,73,1;;
    }

    onMove(e){
        this.mouse.x=e.clientX;
        this.mouse.y=e.clientY;
    }
}