window.addEventListener('DOMContentLoaded', () => {

    // const block = document.querySelectorAll('.tabcontainer__block');
    // const swithcerParent = document.querySelector('.tabcontainer__switch');
    // const button = document.querySelectorAll('.tabcontainer__switch-button');
    // const btn = document.querySelector('.button');
    // let timerId;
    // let i = 0;



    // function hideBlock(){
    //     block.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');

    //     });

    //     button.forEach(item => {
    //         item.classList.remove('tabcontainer__switch-button_active');
    //     })
    // }

    // function showBlock(i = 0){
    //     block[i].classList.add('show');
    //     block[i].classList.remove('hide');
    //     button[i].classList.add('tabcontainer__switch-button_active');
    // }

    // hideBlock();
    // showBlock();


    // swithcerParent.addEventListener('click', (e) => {
    //     const target = e.target;

    //     if(target && target.classList.contains('tabcontainer__switch-button')){
    //         button.forEach((item, i) => {
    //             if(target === item){

    //                 hideBlock();
    //                 showBlock(i);
    //             }

    //         })
    //     }
    // })

    // function myAnim(){
    //     const box = document.querySelector('.box__block');
    //     let path = 0;
    //     const id = setInterval(frame, 10)

    //     function frame(){
    //         if(path === 400){
    //             clearInterval(id);
    //         } else {
    //             path++;
    //             box.style.top = path + 'px';
    //         }
    //     }


    // };
    // btn.addEventListener('click', myAnim);
    // let id = setTimeout(function log(){
    //     console.log('hello');
    //     id = setTimeout(log, 1000);
    // }, 500);


    // function logger(){
    //     if(i === 2){
    //         clearInterval(timerId);
    //     }
    //     i++;
    //     console.log('welldone');
    // }

    // function hideBlock(){
    //     block.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //     })

    //     button.forEach(item =>{
    //         item.classList.remove('tabcontainer__switch-button_active');
    //     })
    // };

    // function showBlock(i = 0){
    //     block[i].classList.add('show');
    //     block[i].classList.remove('hide');
    //     button[i].classList.add('tabcontainer__switch-button_active');
    // }

    // hideBlock();
    // showBlock();

    // swithcerParent.addEventListener('click', (event) =>{
    //     const target = event.target;

    //     if(target && target.classList.contains('tabcontainer__switch-button')){
    //         button.forEach((item, i) => {
    //             if(target === item){
    //                 hideBlock();
    //                 showBlock(i);
    //             }
    //         })
    //     }
    // })

    const expr = 'Lemons';

    switch (expr) {
        case 'Oranges':
            console.log('?????? ??????????????????');
            break;
        case 'Bananas':
            console.log('?????? ????????????');
            break;
        case 'Lemons':
            console.log('?????? ????????????');
            break;
        case 'Apples':
            console.log('?????? ????????????');
            break;
        default:
            console.log('???????????? ???? ??????????????');
    }

    console.log('asdsdf');
})


var foo = 3;
var output = 'Output: ';
switch (foo) {
    case 0:
        output += 'So ';
        
    case 1:
        output += 'What ';
        output += 'Is ';
        
    case 2:
        output += 'Your ';
        
    case 3:
        output += 'Name';
        
    case 4:
        output += '?';
        
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Please pick a number from 0 to 5!');
}






const startBtn = document.querySelector('.btn');
const canvas = document.querySelector('.canvasGame');

startBtn.addEventListener('click', function (){
    showGame();
    startGame();
    startBtn.classList.add('hide');
});

function showGame(){
    canvas.classList.remove('hide');
}

function  startGame () {
    
    const canvasContext = canvas.getContext('2d');
    let ballX = 50;
    let ballSpeedX = 4;
    let ballY = 50;
    let ballSpeedY = 4;   
    let score = 0;
    
    
    console.log(ballX);
    


    const framesPerSecond = 100;
    setInterval(function (){
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);

    let paddle1Y = 250;
    const paddleHeight = 70;


    //???????????????? ??????????????????

    function calculateMousePos(evt){
        const rect = canvas.getBoundingClientRect();
        const root = document.documentElement;
        const mouseX = evt.clientX - rect.left - root.scrollLeft;
        const mouseY = evt.clientY - rect.top - root.scrollTop;

        return{
            x: mouseX,
            y: mouseY
        };

    };

    
    canvas.addEventListener('mousemove', function(evt){
        const mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y -(paddleHeight/2);
    })


    //?????????? ?????????????????? ?? ????????????
    function ballReset(){
        ballSpeedX = -ballSpeedX;
        ballX = canvas.width/2;
        ballY = canvas.height/2;
    }


    function createSoundOne(){
        const soundOne = document.createElement('audio');
        soundOne.setAttribute('autoplay', 'true')
        soundOne.innerHTML = "<source src='audio/sound1.mp3' type='audio/mp3'>"
        document.body.appendChild(soundOne);
    }

    function createSoundTwo(){
        const soundTwo = document.createElement('audio');
        soundTwo.setAttribute('autoplay', 'true')
        
        soundTwo.innerHTML = "<source src='audio/sound2.mp3' type='audio/mp3'>"
        document.body.appendChild(soundTwo);
    }

//?????? ???????????????? ??????????

    function moveEverything(){
        ballX = ballX + ballSpeedX; //?????????????????? ?????? ????????????????

        //???????? ?????????? ?? ???????????? ????????
        if(ballX >= canvas.width){
            createSoundTwo();
            ballSpeedX = -ballSpeedX;
            
        }
        

        //???????? ?????????? ?? ?????????? ????????????, ???????? ???????????????? - ??????????????

        if(ballX < 0){
            if(ballY > paddle1Y && ballY < paddle1Y+paddleHeight){
                createSoundOne();
                ballSpeedX = -ballSpeedX;
                ballSpeedX++;
                score++;
                
                
            } else{ballReset()
                    ballSpeedX = 4;
                    score = 0;
            }
            
        }

        //?????????? ?? ?????????????? ?? ???????????? ???????? + ???????? ??????????????

        ballY = ballY + ballSpeedY;
        if(ballY >= canvas.height){
            ballSpeedY = -ballSpeedY;
            createSoundTwo();
        } if(ballY < (0)){
            ballSpeedY = -ballSpeedY;
            
            createSoundTwo();
            
            
        }
    }


    //?????????????? ??????????????

    function drawEverything(){
        
        colorRect(0, 0, canvas.width, canvas.height, 'black') // ????????????????????????
        
        colorRect(0, paddle1Y, 10, paddleHeight, 'white'); // ????????????

        colorCircle(ballX, ballY, 10, 'red'); //??????????


        

        canvasContext.font = '40px Times New Roman'
        canvasContext.fillText(score, canvas.width/2, 100, [40])
    };


    //????????????????????????

    function colorRect(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);
    }


    //??????????

    function colorCircle(centerX, centerY, radius, drawColor){
        canvasContext.fillStyle = drawColor;
        canvasContext.beginPath();
        canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
        canvasContext.fill();
    }
};




