import { Player } from "./player.js";

const canvas = document.getElementById('game');
canvas.width = 1000;
canvas.height = 800;

const ctx = canvas.getContext('2d');
const player = new Player();

let up, right, down, left = false;

//Main logic
function update()
{
    if(up && player.x >= 5)
    player.y -= 2;	
    if(down	&&	player.y <=	canvas.height-15)
    player.y += 2;
    if(left && player.x >= 5)
    player.x -= 2;	
    if(right &&	player.x <=	canvas.height-15)
    player.x += 2;
    
}

//Redraw canvas
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
}

window.addEventListener('keydown', Move);
window.addEventListener('keyup', () => {
    let keyCode = event.keyCode;
    console.log(keyCode);
    switch (keyCode)
    {
        case 65:
            left = false;
            break;
        case 87:
            up = false;
            break;
        case 68:
            right = false;
            break;
        case 83:
            down = false;
            break;
    }
});

function Move(event)
{
    let keyCode = event.keyCode;
    console.log(keyCode);
    switch (keyCode)
    {
        case 65:
            left = true;
			right = false;
			up = false;
			down = false;
            break;
        case 87:
            left = false;
            right = false;
            up = true;
            down = false;
            break;
        case 68:
            left = false;
            right = true;
            up = false;
            down = false;
            break;
        case 83:
            left = false;
            right = false;
            up = false;
            down = true;
            break;
    }
    event.preventDefault();
}

//Main game loop
function mainLoop()
{
    if(down)
	player.forward();
    if(up)
	player.backwards();
    if(right)
	player.right();
    if(left)
	player.left();

    update();
    draw(ctx);
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);