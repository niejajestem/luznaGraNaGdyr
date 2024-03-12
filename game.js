import { Player } from "./player.js";

const canvas = document.getElementById('game');
canvas.width = 1000;
canvas.height = 1000;

const ctx = canvas.getContext('2d');
const player = new Player();

let up, right, down, left = false;

//Main logic
function update()
{
    if(up && player.x >= 5)
    player.Jump();
    if(left && player.x >= 5)
    player.Walk(false);
    if(right &&	player.x <=	canvas.height)
    player.Walk(true);

    player.update();
}

//Redraw canvas
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
}

window.addEventListener('keydown', Move);
window.addEventListener('keyup', MoveStop);

function MoveStop(event)
{
    let keyCode = event.keyCode;
    // console.log(keyCode);
    switch (keyCode)
    {
        case 65:
            left = false;
            break;
        case 87:
            up = false;
            player.groundCheck = 0;
            break;
        case 68:
            right = false;
            break;
    }
};

function Move(event)
{
    let keyCode = event.keyCode;
    // console.log(keyCode);
    switch (keyCode)
    {
        case 65:
            left = true;
            break;
        case 87:
            up = true;
            break;
        case 68:
            right = true;
            break;  
    }
    event.preventDefault();
}

//Main game loop
function mainLoop()
{
    if(down)
	player.forward();
    if(right)
	player.right();
    if(left)
	player.left();

    update();
    draw(ctx);
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);