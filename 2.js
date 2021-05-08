 let canv = document.querySelector("canvas");
let context = canv.getContext("2d");
// let logo = document.getElementById("logo");

// context.font = "10px Arial";
// context.fillText("hello", 10, 50);
//let img = "img.png";
// context.fillStyle="Purple";
// context.fillRect(20,20,100,100);

// context.fillStyle='green';
// context.fillRect(140,20,100,100);


//context.beginPath();
//context.moveTo(300,0);
//context.lineTo(200,200);
//context.moveTo(400,0);
// context.lineTo(400,400);
// context.lineTo(480,100);
// context.lineTo(300,0);
// context.moveTo(108, 0.0);
        //  context.lineTo(141, 70);
        //  context.lineTo(218, 78.3);
        //  context.lineTo(162, 131);
        //  context.lineTo(175, 205);
        //  context.lineTo(108, 170);
        //  context.lineTo(41.2, 205);
        //  context.lineTo(55, 131);
        //  context.lineTo(1, 78);
        //  context.lineTo(75, 68);
        //  context.lineTo(108, 0);
// context.moveTo(0,100);
// context.lineTo(600,100);
// context.stroke();
// let img = new Image()
// img.src="img.png";
// img.onload= () => {
//     context.drawImage(img, 100, 100);
//     context.font = "30px Arial";
// context.fillText("Company.", 400 , 80)
// }
//context.drawImage(logo, 100, 100);
//context.moveTo(1,1)x§

//  for(let i = 0; i < 300; i++)
// {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     context.beginPath()
//     context.arc(x, y, 30, 0 , Math.PI * 2);
//     context.stroke();
// }
// context.beginPath()
// context.arc(300,300, 100, 0 , Math.PI * 2);
// context.stroke();

let circle = {
        x : 200, 
        y : 150, 
        size : 50, 
        dx : 6, 
        dy : 8
};
function drawCircle() {
        context.beginPath();
        context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        context.fillStyle="purple";
        context.fill();
}
function update()
{
        context.clearRect(0,0,canv.width, canv.height);
        circle.x += circle.dx;
        circle.y += circle.dy;
        
        if((circle.x + circle.size )> canv.width || (circle.x - circle.size) < 0)
        {
                circle.dx = -circle.dx;
                let color = Math.random() * 255;
                let color2 = Math.random() * 255;
                let color3 = Math.random() * 255;
                context.fillStyle="#"+color+color2+color3;
                //context.fill();
        }
        if(circle.y + circle.size > canv.height || circle.y - circle.size < 0)
        {
                circle.dy *= -1 
                let color = Math.random() * 255;
                let color2 = Math.random() * 255;
                let color3 = Math.random() * 255;
                context.fillStyle="#"+color+color2+color3;
                //context.fillStyle="Purple";
                //context.fill();
        }
        drawCircle();
        requestAnimationFrame(update)
        // if((circle.x+circle.y)> canv.height)
        // {
        //         circle.y -= 2;
        // }
}
update()