









var image = document.getElementById("c1");

//THINGS TO LOOK UP
//LINE 1: VANILLAJS ADDING EVENT LISTENERS TO MULTIPLE ELEMENTS
//LINE 2: FOR LOOPS
//LINE 3: ARRAYS (images is an array)

var images = document.querySelectorAll(".images1 div");
for (let i=0; i<images.length; i++) {
    images[i].addEventListener("mouseenter", increaseOpcacity);
}

function increaseOpcacity(event) {
    console.log(event.currentTarget);

    if (event.currentTarget.classList.length === 0) {
        event.currentTarget.classList.add("opacity1");
        return;

    }

    if (event.currentTarget.classList.contains("opacity1")) {
        event.currentTarget.classList.remove("opacity1");
        event.currentTarget.classList.add("opacity2");
        return;
    }

    // if (event.currentTarget.classList.contains("opacity2")) {
    //     event.currentTarget.classList.remove("opacity2");
    //     event.currentTarget.classList.add("opacity3");
    //     return;
    // }



    //  previousOpacity = event.currentTarget.style.opacity;

    // event.currentTarget.style.opacity = previousOpacity + 0.3;
    // console.log(previousOpacity);
    // console.log(event.currentTarget.style.opacity);
}




(function() {
    var elements;
    var windowWidth;
  
    function init() {
      elements = document.querySelectorAll('.text2 div');
      windowWidth = window.innerWidth;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromLeft = elements[i].getBoundingClientRect().left;
  
        if (positionFromLeft - windowWidth <= 0) {
          element.classList.add('text2');
          element.classList.remove('text2 div');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();



(function() {
    var elements;
    var windowWidth;
  
    function init() {
      elements = document.querySelectorAll('.body2 div');
      windowWidth = window.innerWidth;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromLeft = elements[i].getBoundingClientRect().left;
  
        if (positionFromLeft - windowWidth <= 0) {
          element.classList.add('text2');
          element.classList.remove('body2 div');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();



// var canvas = document.querySelector('canvas');
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
// c = canvas.getContext('2d');

// window.addEventListener('resize', function(){
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;

//     initCanvas();
// })

// var mouse = {
//     x: undefined,
//     y: undefined
// }
// window.addEventListener('mousemove',
//     function (event) {
//         mouse.x = event.x;
//         mouse.y = event.y;
//         drawCircles();
//     }
// )
// window.addEventListener("touchmove", 
//     function (event) {
//         let touch = event.touches[0];
//         mouse.x = touch.clientX;
//         mouse.y = touch.clientY;
//         drawCircles();
//     }
// )

// function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.vx = vx;
//     this.vy = vy;
//     this.birth = birth;
//     this.life = life;
//     this.opacity = opacity;

//     this.draw = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
//         c.fillStyle = 'rgba(' + rgb +','+ this.opacity +')';
//         c.fill();
//     }

//     this.update = function(){
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.vx = -this.vx;
//         }

//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.vy = -this.vy;
//         }

//         this.x += this.vx;
//         this.y += this.vy;

//         this.opacity = 1- (((frame - this.birth) * 1) / this.life);

//         if (frame > this.birth + this.life){
//             for (let i = 0; i < circleArray.length; i++){
//                 if (this.birth == circleArray[i].birth && this.life == circleArray[i].life){
//                     circleArray.splice(i, 1);
//                     break;
//                 }
//             }
//         } else{
//             this.draw();
//         }
//     }

// }

// var circleArray = [];

// function initCanvas() {
//     circleArray = [];
// }

// var colorArray = [
//     '236,236,236',
//     '220,220,220',
//     '255,255,255'
// ]

// function drawCircles(){
//     for (let i = 0; i < 6; i++) {
//         let radius = Math.floor(Math.random() * 4) + 2;
//         let vx = (Math.random() * 2) - 1;
//         let vy = (Math.random() * 2) - 1;
//         let spawnFrame = frame;
//         let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];
//         let life = 100;
//         circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));

//     }
// }

// var frame = 0;
// function animate() {
//     requestAnimationFrame(animate);
//     frame += 1;
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     for (let i = 0; i < circleArray.length; i++ ){
//         circleArray[i].update();
//     }
    
// }

// initCanvas();
// animate();