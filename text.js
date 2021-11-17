export class Text {
    constructor() {
        this.canvas = document.createElement('canvas');
        //this.canvas.style.position ='absolute';
        //this.canvas.style.left ='0';
        //this.canvas.style.top='0';
       // document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
    }

    setText(str, density, stageWidth, stageHeight) {
        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;
        
        var mql = window.matchMedia("screen and (max-width: 768px)");

        const myText = str;
        let fontWidth = 400;
        let fontSize = 350;
        //mobile check
        if (mql.matches) { //mobile
            fontWidth =150;
            fontSize = 80;
        } else { //desktop
            fontWidth = 400;
            fontSize = 350;
        }
        //mobilecheck end
        const fontName = 'Aldrich';

        if(mql.matches){//mobile 구름표기   
            this.ctx.clearRect(0, 0, stageWidth, stageHeight);
            
           this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
            this.ctx.fillStyle = "rgba(0,0,0,1)";
            this.ctx.textBaseline = "middle";
            const fontPos = this.ctx.measureText(myText);    
                    this.ctx.fillText("<atom>",
            (stageWidth - this.ctx.measureText('<atom>').width) / 2, stageHeight/7*2+fontSize/2);
        this.ctx.fillText('&',
            (stageWidth - this.ctx.measureText('&').width) / 2, stageHeight / 7*3+fontSize/2);
        this.ctx.fillText('<bits>',
            (stageWidth - this.ctx.measureText('<bits>').width) / 2, (stageHeight) / 7 *4+fontSize/2);

        }else{//desktop 구름표기
            this.ctx.clearRect(0, 0, stageWidth, stageHeight);
            this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
            this.ctx.fillStyle = "rgba(0,0,0,1)";
            this.ctx.textBaseline = "middle";
            const fontPos = this.ctx.measureText(myText);
            /*      
                    this.ctx.fillText(myText,
                        (stageWidth- fontPos.width)/2,
                        fontPos.actualBoundingBoxAscent+fontPos.actualBoundingBoxDescent+((stageHeight-fontSize)/2)
                    );
            */
            this.ctx.fillText(myText,
                (stageWidth - fontPos.width) / 2, (stageHeight) / 2
            );
    

        }

        return this.dotPos(density, stageWidth, stageHeight);

    }

    dotPos(density, stageWidth, stageHeight) {
        const imageData = this.ctx.getImageData(0, 0, stageWidth, stageHeight).data;
        const particles = [];
        let i = 0;
        let width = 0;
        let pixel;

        for (let height = 0; height < stageHeight; height += density) {
            ++i;
            const slide = (i % 2) == 0;
            width = 0;
            if (slide == 1) {
                width += 0;
            }
            for (width; width < stageWidth; width += density) {
                pixel = imageData[((width + (height * stageWidth)) * 4) - 1]; //왜 곱하기 4일까
                if (pixel != 0 && width > 0 && width < stageWidth && height > 0 && height < stageHeight) {
                    particles.push({
                        x: width,
                        y: height,
                    });
                }


            }
        }
        return particles;
    }


}