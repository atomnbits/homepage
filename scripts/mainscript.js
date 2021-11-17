
let loading_finished =0;
let intervalrefresh;
let video_firsttime =0;
const imagestaggdelay = 700;

var mql = window.matchMedia("screen and (max-width: 768px)");


setTimeout(function () {
  var laodingpage= document.getElementsByClassName('loading');
  laodingpage[0].style.display = 'none';
  document.getElementById('fullpage').style.display = 'inline-block';

}, 300);




var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#0A3CD1', '#0A3CD1', '#E4F87A','#E4F87A','#E4F87A', '#0A3CD1'],
    anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage','6thPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['atom&bits', 'what we do', 'members','works','what we experienced','contact'],
    afterLoad: function (origin, destination, direction) {

        if (destination.index == 0 &&loading_finished ==1) {
            aboutus_in_animation.play();
        }
        if (destination.index == 1) {
          if(video_firsttime==0){
            video_in_animation.play();
            keywords_in_animation.play();
            video_firsttime =1;
          }
          else {
            keywords_in_animation_after.play();
          }
          if(mql.matches)
          {
            FirstmouseOver();
          }
      }
        if (destination.index == 2) {}
        if (destination.index ==3){
          document.getElementById("secondgardenvid").play();
        }
        if (destination.index == 4) {
          randompicturepsotion();
          experience_in_animation.restart();

          intervalrefresh = setInterval(function () {
            experience_in_animation.play();
            randompicturepsotion();
          }, document.getElementsByClassName("ex-img").length*imagestaggdelay);
        }
    },
    onLeave: function (origin, destination, dirction) {
      if (origin.index == 0) {
        aboutus_out_animation.play();
        loading_finished = 1;
      }
      if (origin.index == 1) {
        keywords_out_animation.play();        
      }
      if (origin.index == 3) {
        clearInterval(intervalrefresh);
        experience_out_animation.play();
      }
    }
});

//영상 마우스 오버 일시정지 및 색 변화
if(mql.matches)
{document.querySelector("#firstvideo > source").src = "/resources/videos/Horizontal_kinetic.mp4";
document.querySelector("#secondvideo > source").src = "/resources/videos/Horizontal_immersive.mp4";
document.querySelector("#thirdvideo > source").src = "/resources/videos/Horizontal_interactive.mp4";
document.querySelector("#secondgardenvid > source").src="/resources/videos/SecondGarden_Web.mp4";

document.querySelector("#firstvideo").poster="/resources/kineticThumbnail.png";
document.querySelector("#secondvideo").poster="/resources/immersiveThumbnail.png";
document.querySelector("#thirdvideo").poster="/resources/interactiveThumbnail.png";
}
else{
  document.querySelector("#firstvideo > source").src = "/resources/videos/vertical_kinetic.mp4";
  document.querySelector("#secondvideo > source").src = "/resources/videos/vertical_immersive.mp4";
  document.querySelector("#thirdvideo > source").src = "/resources/videos/vertical_interactive.mp4";
}
for( var i =0 ; i<document.getElementsByTagName("video").length;i++)
{
  document.getElementsByTagName("video")[i].load();
}

document.getElementsByClassName("firstvideo-over")[0].addEventListener("mouseover", FirstmouseOver);
document.getElementsByClassName("firstvideo-over")[0].addEventListener("mouseout", FirstmouseOut);
document.getElementsByClassName("secondvideo-over")[0].addEventListener("mouseover", SecondmouseOver);
document.getElementsByClassName("secondvideo-over")[0].addEventListener("mouseout", SecondmouseOut);
document.getElementsByClassName("thirdvideo-over")[0].addEventListener("mouseover", ThirdmouseOver);
document.getElementsByClassName("thirdvideo-over")[0].addEventListener("mouseout", ThirdmouseOut);

function FirstmouseOver() {
 document.getElementById("firstvideo").play();
 document.getElementsByClassName("firstvideocover")[0].style.background= 'rgba(10, 60, 209, 0)';
 var letters= document.getElementsByClassName("letters-1")[0];
 letters.style.background= 'rgba(10,60,209,0.77)';
 letters.style.color='rgba(228,248,122,1)';
 if(mql.matches){
 letters.style.border = '2px solid rgba(228,248,122,1)';}
 else{
  letters.style.border = '4px solid rgba(228,248,122,1)';
 }
 SecondmouseOut();
 ThirdmouseOut();
}
function FirstmouseOut() {
 document.getElementById("firstvideo").pause();
 document.getElementsByClassName("firstvideocover")[0].style.background= 'rgba(10, 60, 209, 0.85)';
 var letters= document.getElementsByClassName("letters-1")[0];
 letters.style.background= 'rgba(228,248,122,1)';
 letters.style.color='rgba(11,54,188,1)';
 letters.style.border = 'none';
}
function SecondmouseOver() {
 document.getElementById("secondvideo").play();
 document.getElementsByClassName("secondvideocover")[0].style.background= 'rgba(10, 60, 209, 0.0)';
 var letters= document.getElementsByClassName("letters-2")[0];
 letters.style.background= 'rgba(10,60,209,0.77)';
 letters.style.color='rgba(228,248,122,1)';
 if(mql.matches){
  letters.style.border = '2px solid rgba(228,248,122,1)';}
  else{
   letters.style.border = '4px solid rgba(228,248,122,1)';
  }


 FirstmouseOut();
 ThirdmouseOut();
}
function SecondmouseOut() {
 document.getElementById("secondvideo").pause();
 document.getElementsByClassName("secondvideocover")[0].style.background= 'rgba(10, 60, 209, 0.85)';
 var letters= document.getElementsByClassName("letters-2")[0];
 letters.style.background= 'rgba(228,248,122,1)';
 letters.style.color='rgba(11,54,188,1)';
 letters.style.border = 'none';
}
function ThirdmouseOver() {
 document.getElementById("thirdvideo").play();
 document.getElementsByClassName("thirdvideocover")[0].style.background= 'rgba(10, 60, 209, 0)';
 var letters= document.getElementsByClassName("letters-3")[0];
 letters.style.background= 'rgba(10,60,209,0.77)';
 letters.style.color='rgba(228,248,122,1)';
 if(mql.matches){
  letters.style.border = '2px solid rgba(228,248,122,1)';}
  else{
   letters.style.border = '4px solid rgba(228,248,122,1)';
  }
 FirstmouseOut();
 SecondmouseOut();
}
function ThirdmouseOut() {
  document.getElementById("thirdvideo").pause();
  document.getElementsByClassName("thirdvideocover")[0].style.background= 'rgba(10, 60, 209, 0.85)';
  var letters= document.getElementsByClassName("letters-3")[0];
  letters.style.background= 'rgba(228,248,122,1)';
  letters.style.color='rgba(11,54,188,1)';
  letters.style.border = 'none';
}


//video

var video_in_animation = anime({ 
  targets: '.video-container',
 // scale:[0.2,1],
  easing: 'easeOutQuad',
  translateY:[200,0],
  opacity: [0,1],
  duration: 500,
  delay: anime.stagger(500),
  autoplay:false
});


//keywords
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = [1,3];
ml4.durationIn = 500;
ml4.durationOut = 200;
ml4.delay = 500;

var keywords_out_animation = anime.timeline({loop: false,autoplay:false}) //사라짐 애니메이션( 이게 위로가야함, 초기셋팅으로 준비하게되는듯)
.add({
  targets: '.keywords .letter-wrapper',
  opacity: [1,0],
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",

});


var keywords_in_animation = anime.timeline({loop: false,autoplay:false})
  .add({
    targets: ['.keywords .letter-wrapper','.videx-wrap'],
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    delay:1500,
    duration:500
});


var keywords_in_animation_after = anime.timeline({loop: false, autoplay:false})
  .add({
    targets: '.keywords .letter-wrapper',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration:500
});


//aboutus

var aboutus_out_animation = anime({ //destination index1, aboutus out 애니메이션
  targets: '.aboutus-contents',
//  color: ['rgba(0,0,0,1)','rgba(0, 0, 0, 0)'],
  easing: 'easeOutQuad',
  duration: 300,
  autoplay: true,
  opacity: [1,0],
  delay: anime.stagger(50)
});

var aboutus_in_animation = anime({ //destination index1, aboutus in 애니메이션
  targets: '.aboutus-contents',
  opacity: [0,1],
  translateX: [-window.innerWidth*0.3,0],
  easing: 'easeInQuad',
  duration: 800,
//  color: 'rgba(0, 0, 0, 1)',
  autoplay: true,
  delay: anime.stagger(600)
});


//what we experienced



var pictureorigin = [];
let firstimeloop =0;

function randompicturepsotion() {
  let pictures = document.getElementsByClassName("ex-img");

  for (var i = 0; i < pictures.length; i++) {
  
    pictures[i].style.position = "absolute";
  
    if (firstimeloop ==0){
      pictureorigin.push({width:pictures[i].width,height:pictures[i].height});
      if(i==pictures.length-1){
        firstimeloop++;
      }
    }
    let randomscale;
    if(mql.matches){
      randomscale = (Math.random() * (0.5 - 0.2) + 0.2);
    }
    else{
      randomscale = (Math.random() * (1 - 0.5) + 0.5);  
    }
    let picturewidth = pictureorigin[i].width*randomscale;
    let pictureheight = pictureorigin[i].height*randomscale;
    let randompositionX = Math.random() * (window.innerWidth - picturewidth);
    //let randompositionY = Math.random() * ((window.innerHeight -pictureheight)-(window.innerHeight*0.25))+(window.innerHeight*0.25);
    let randompositionY = Math.random() * ((window.innerHeight -pictureheight));
    let randomrotation = Math.random() * (60)-30;
    pictures[i].style.width = `${picturewidth}px`;
    pictures[i].style.height = `${pictureheight}px`;
    pictures[i].style.left=`${randompositionX}px`;
    pictures[i].style.top=`${randompositionY}px`;
    pictures[i].style.transform =`rotate(45deg)`;

  }
}

var experience_out_animation = anime({ //destination index1, aboutus out 애니메이션
  targets: '.ex-img',
  opacity: [1,0],
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  duration:1,
  autoplay:false
});

var experience_in_animation = anime({ //destination index1, aboutus in 애니메이션
  targets: '.ex-img',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  easing: 'linear',
  duration:1,
  delay: anime.stagger(imagestaggdelay),
  autoplay:false
});











/*

var keywords_in_animation = anime.timeline({loop: false})
  .add({
    targets: '.keywords .wrapper1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
    delay:1500,
  //  backgroundColor:ml4.bcolorin,
    duration: ml4.durationIn
  }).add({
    targets: '.keywords .wrapper2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
  //  backgroundColor:ml4.bcolorin,
    duration: ml4.durationIn
  }).add({
    targets: '.keywords .wrapper3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
   // backgroundColor:ml4.bcolorin,
    duration: ml4.durationIn
  });
*/
