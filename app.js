import {Visual} from './visual.js';

//this kinetic typography is inpired by "Interactive Developer" Jongmin-Kim https://www.youtube.com/c/cmiscm 

class App{
  constructor(){
    this.canvas =document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio >1 ? 2:1;


    WebFont.load({
      google: {
        families: ['Hind:700','Aldrich']
      },
      fontactive:() =>{
        this.visual = new Visual();

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
      }
    });
  }
  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth*this.pixelRatio;
    this.canvas.height =this.stageHeight*this.pixelRatio;
    this.ctx.scale(this.pixelRatio,this.pixelRatio);

    //this.ctx.globalCompositeOperation = 'screen';

    this.visual.show(this.stageWidth,this.stageHeight);
  }

  animate(){

    this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
    this.visual.animate(this.ctx);


     requestAnimationFrame(this.animate.bind(this));

  }
}

window.onload = () => {
  new App();
};