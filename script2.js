









// var image = document.getElementById("c1");

// //THINGS TO LOOK UP
// //LINE 1: VANILLAJS ADDING EVENT LISTENERS TO MULTIPLE ELEMENTS
// //LINE 2: FOR LOOPS
// //LINE 3: ARRAYS (images is an array)

// var images = document.querySelectorAll(".images1 div");
// for (let i=0; i<images.length; i++) {
//     images[i].addEventListener("mouseenter", increaseOpcacity);
// }

// function increaseOpcacity(event) {
//     console.log(event.currentTarget);

//     if (event.currentTarget.classList.length === 0) {
//         event.currentTarget.classList.add("opacity1");
//         return;

//     }

//     if (event.currentTarget.classList.contains("opacity1")) {
//         event.currentTarget.classList.remove("opacity1");
//         event.currentTarget.classList.add("opacity2");
//         return;
//     }


//     if (event.currentTarget.classList.contains("opacity2")) {
//         event.currentTarget.classList.remove("opacity2");
//         event.currentTarget.classList.add("opacity3");
//         return;
//     }



//      previousOpacity = event.currentTarget.style.opacity;

//     event.currentTarget.style.opacity = previousOpacity + 0.3;
//     console.log(previousOpacity);
//     console.log(event.currentTarget.style.opacity)
//     ;}




// (function() {
//     var elements;
//     var windowWidth;
  
//     function init() {
//       elements = document.querySelectorAll('.text2 div');
//       windowWidth = window.innerWidth;
//     }
  
//     function checkPosition() {
//       for (var i = 0; i < elements.length; i++) {
//         var element = elements[i];
//         var positionFromLeft = elements[i].getBoundingClientRect().left;
  
//         if (positionFromLeft - windowWidth <= 0) {
//           element.classList.add('text2');
//           element.classList.remove('text2 div');
//         }
//       }
//     }
  
//     window.addEventListener('scroll', checkPosition);
//     window.addEventListener('resize', init);
  
//     init();
//     checkPosition();
//   })();



// (function() {
//     var elements;
//     var windowWidth;
  
//     function init() {
//       elements = document.querySelectorAll('.body2 div');
//       windowWidth = window.innerWidth;
//     }
  
//     function checkPosition() {
//       for (var i = 0; i < elements.length; i++) {
//         var element = elements[i];
//         var positionFromLeft = elements[i].getBoundingClientRect().left;
  
//         if (positionFromLeft - windowWidth <= 0) {
//           element.classList.add('text2');
//           element.classList.remove('body2 div');
//         }
//       }
//     }
  
//     window.addEventListener('scroll', checkPosition);
//     window.addEventListener('resize', init);
  
//     init();
//     checkPosition();
//   })();






var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    initCanvas();
})

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        drawCircles();
    }
)
window.addEventListener("touchmove", 
    function (event) {
        let touch = event.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        drawCircles();
    }
)

function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.vx = vx;
    this.vy = vy;
    this.birth = birth;
    this.life = life;
    this.opacity = opacity;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = 'rgba(' + rgb +','+ this.opacity +')';
        c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.vx = -this.vx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.opacity = 1- (((frame - this.birth) * 1) / this.life);

        if (frame > this.birth + this.life){
            for (let i = 0; i < circleArray.length; i++){
                if (this.birth == circleArray[i].birth && this.life == circleArray[i].life){
                    circleArray.splice(i, 1);
                    break;
                }
            }
        } else{
            this.draw();
        }
    }

}

var circleArray = [];

function initCanvas() {
    circleArray = [];
}

var colorArray = [
    '236,236,236',
    '220,220,220',
    '255,255,255'
]

function drawCircles(){
    for (let i = 0; i < 6; i++) {
        let radius = Math.floor(Math.random() * 4) + 2;
        let vx = (Math.random() * 2) - 1;
        let vy = (Math.random() * 2) - 1;
        let spawnFrame = frame;
        let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];
        let life = 100;
        circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));

    }
}

var frame = 0;
function animate() {
    requestAnimationFrame(animate);
    frame += 1;
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++ ){
        circleArray[i].update();
    }
    
}

initCanvas();
animate();






$(document).ready(function() {

    // Handler for .ready() called.
    $(".images1").offset({
        left:80,
        top:80,
    })
  });


  $( "body" ).mousemove(function( event ) {
    var currentleft = $('.images1').offset().left;
    var currenttop = $('.images1').offset().top;
    $(".images1").offset({
        left: - event.pageX,
        top: - event.pageY,
    })
    msg += event.pageX + ", " + event.pageY;


    $(".images1").offset({
        right:80,
        bottom:80,
    })
  });


  $( "body" ).mousemove(function( event ) {
    var currentright = $('.images1').offset().right;
    var currentbottom = $('.images1').offset().bottom;
    $(".images1").offset({
        right: - event.pageX,
        bottom: - event.pageY,
    })
    msg += event.pageX + ", " + event.pageY;

  
  });

  $(document).ready(function() {

    $( ".images1 div").draggable();
   
  } );

 




//   document.getElementById("cir1").onmouseover=function() {
//     document.getElementById("cir1").style.display="none";
//     document.getElementById("c1").style.display="block";
// }


// document.getElementById("cir2").onmouseover=function() {
//     document.getElementById("cir2").style.display="none";
//     document.getElementById("c2").style.display="block";
// }

// document.getElementById("cir3").onmouseover=function() {
//     document.getElementById("cir3").style.display="none";
//     document.getElementById("c3").style.display="block";
// }

// document.getElementById("cir4").onmouseover=function() {
//     document.getElementById("cir4").style.display="none";
//     document.getElementById("c4").style.display="block";
// }

// document.getElementById("cir5").onmouseover=function() {
//     document.getElementById("cir5").style.display="none";
//     document.getElementById("c5").style.display="block";
// }

// document.getElementById("cir6").onmouseover=function() {
//     document.getElementById("cir6").style.display="none";
//     document.getElementById("c6").style.display="block";
// }

// document.getElementById("cir7").onmouseover=function() {
//     document.getElementById("cir7").style.display="none";
//     document.getElementById("c7").style.display="block";
// }

// document.getElementById("cir8").onmouseover=function() {
//     document.getElementById("cir8").style.display="none";
//     document.getElementById("c8").style.display="block";
// }

// document.getElementById("cir9").onmouseover=function() {
//     document.getElementById("cir9").style.display="none";
//     document.getElementById("c9").style.display="block";
// }

// document.getElementById("cir10").onmouseover=function() {
//     document.getElementById("cir10").style.display="none";
//     document.getElementById("c10").style.display="block";
// }


// document.getElementById("cir11").onmouseover=function() {
//     document.getElementById("cir11").style.display="none";
//     document.getElementById("c11").style.display="block";
// }


// document.getElementById("cir12").onmouseover=function() {
//     document.getElementById("cir12").style.display="none";
//     document.getElementById("c12").style.display="block";
// }

// document.getElementById("cir13").onmouseover=function() {
//     document.getElementById("cir13").style.display="none";
//     document.getElementById("c13").style.display="block";
// }

// document.getElementById("cir14").onmouseover=function() {
//     document.getElementById("cir14").style.display="none";
//     document.getElementById("c14").style.display="block";
// }

// document.getElementById("cir15").onmouseover=function() {
//     document.getElementById("cir15").style.display="none";
//     document.getElementById("c15").style.display="block";
// }

// document.getElementById("cir16").onmouseover=function() {
//     document.getElementById("cir16").style.display="none";
//     document.getElementById("c16").style.display="block";
// }

// document.getElementById("cir17").onmouseover=function() {
//     document.getElementById("cir17").style.display="none";
//     document.getElementById("c17").style.display="block";
// }

// document.getElementById("cir18").onmouseover=function() {
//     document.getElementById("cir18").style.display="none";
//     document.getElementById("c18").style.display="block";
// }

// document.getElementById("cir19").onmouseover=function() {
//     document.getElementById("cir19").style.display="none";
//     document.getElementById("c19").style.display="block";
// }

// document.getElementById("cir20").onmouseover=function() {
//     document.getElementById("cir20").style.display="none";
//     document.getElementById("c20").style.display="block";

// }




// document.getElementById("ch1").onmouseover=function() {
//     document.getElementById("title").style.display="none";
//     document.getElementById("text1").style.display="block";
// }

// document.getElementById("ch1").onmouseout=function() {
//     document.getElementById("title").style.display="block";
//     document.getElementById("text1").style.display="none";
// }



// document.getElementById("ch2").onmouseover=function() {
//     document.getElementById("title").style.display="none";
//     document.getElementById("text2").style.display="block";
// }

// document.getElementById("ch2").onmouseout=function() {
//     document.getElementById("title").style.display="block";
//     document.getElementById("text2").style.display="none";
// }

document.getElementById("title").onmouseenter=function() {
    document.getElementById("title").style.display="none";
    document.getElementById("text1").style.display="block";
}

document.getElementById("text1").onmouseenter=function() {
    document.getElementById("text1").style.display="none";
    document.getElementById("text2").style.display="block";
}


document.getElementById("text2").onmouseenter=function() {
    document.getElementById("text2").style.display="none";
    document.getElementById("text3").style.display="block";
}

document.getElementById("text3").onmouseenter=function() {
    document.getElementById("text3").style.display="none";
    document.getElementById("text4").style.display="block";
}
document.getElementById("text4").onmouseenter=function() {
    document.getElementById("text4").style.display="none";
    document.getElementById("text5").style.display="block";
}




function playSound(dog) {
    document.getElementById(dog).play();
  };
  







// var container=document.getElementsByClassName("images1")[0];

//   var start=false;
//   var mouseX=0;
//   var mouseY=0;

//   window.addEventListener("mousemove",moveImages);
//   function moveImages(e){
//       if (!start){
//           mouseX=e.x;
//           mouseY=e.y;
//           start=true;
//       }
//       else{
//           var top=Number(container.style.top.replace("px",""));
//           var left=Number(container.style.left.replace("px",""));
//           if(e.x>mouseX){
//               left-=2;
//           }
//           else{
//               left+=2;
//           }

//           if(e.y>mouseY){
//             top-=2;
//         }
//             else{
//             top+=2;
//         }

//         if(left<-20){
//             left=-50;
//         }

//         if(left>20){
//             left=50;
//         }

//         if(top<-20){
//             top=-20;
//         }

//         if(top>20){
//             top=20;
//         }
//         mouseX=e.x;
//         mouseY=e.y;

//         container.style.top=top+"px";
//         container.style.left=left+"px";


//       }
//   }






// var image = document.getElementById("c1");
// var images = document.querySelectorAll(".images1 div");
// for (let i=0; i<images.length; i++) {
//     images[i].addEventListener("click", increaseOpcacity);
// }

// function increaseOpcacity(event) {
//     console.log(event.currentTarget);

//     if (event.currentTarget.classList.length === 0) {
//         event.currentTarget.classList.add("size1");
//         return;
//     }

//     if (event.currentTarget.classList.contains("size1")) {
//         event.currentTarget.classList.remove("size1");
//         event.currentTarget.classList.add("size2");
//         event.currentTarget.classList.remove("size2");
//         event.currentTarget.classList.add(".images1 div");


//     }}





//     if (event.currentTarget.classList.contains("opacity2")) {
//         event.currentTarget.classList.remove("opacity2");
//         event.currentTarget.classList.add("opacity3");
//         return;
//    }