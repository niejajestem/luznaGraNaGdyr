function Player()
{
    const canvas = document.getElementById('game');

    this.img = new Image();

    this.img.onload = () =>{
        console.log("loaded");
    }

    this.img.src = "sprite.png";
    
    this.x = 300;
    this.y = 400;
    this.size = 64;
    this.velocityX = 0;
    this.velocityY = 0;
    this.counter = 0;
    this.delay = 5;
    this.gravity = 4;
    this.speed = 2;
    this.friction = 0.3;
    this.jumpPower = 10;
    this.groundCheck = true;

    this.column	= 0;	
	this.row = 0;	
	this.frameWidth	= 64;	
	this.frameHeight = 64;

    //logika sterująca obiektem
    this.update = function()
    {
        this.velocityY += this.gravity;
        this.y += this.velocityY;
        this.x += this.velocityX;

        this.velocityX /= this.friction + 1;
        this.velocityY /= this.friction + 1;

        this.WallColision();
    }

    this.WallColision = function()
    {
        if (this.x + this.frameWidth < this.frameWidth)
        {
            this.x = 0;
        }

        if (this.y + this.frameHeight < this.frameHeight)
        {
            this.y = 0;
        }

        if (this.x + this.frameWidth > canvas.width)
        {
            this.x = canvas.width - this.frameWidth;
        }

        if (this.y + this.frameHeight > canvas.height)
        {
            this.y = canvas.height - this.frameHeight;
        }
    }

    this.forward = function()
    {
        // console.log(this.counter);
        this.row = 0;
        this.counter++;
        if(this.counter	> this.delay)
        {
            this.counter = 0;
            this.column++;
            if(this.column	> 3)
            {
                this.column	= 0;
            }
        }
    }

    this.backwards = function()
    {
        // console.log(this.counter);
        this.row = 3;
        this.counter++;
        if(this.counter	> this.delay)
        {
            this.counter = 0;
            this.column++;
            if(this.column	> 3)
            {
                this.column	= 0;
            }
        }
    }

    this.right = function()
    {
        // console.log(this.counter);
        this.row = 2;
        this.counter++;
        if(this.counter	> this.delay)
        {
            this.counter = 0;
            this.column++;
            if(this.column	> 3)
            {
                this.column	= 0;
            }
        }
    }

    this.left = function()
    {
        // console.log(this.counter);
        this.row = 1;
        this.counter++;
        if(this.counter	> this.delay)
        {
            this.counter = 0;
            this.column++;
            if(this.column	> 3)
            {
                this.column	= 0;
            }
        }
    }


    //funkcją rysująca obiekt
    this.draw = function(ctx)
    {
        // console.log(this.img);
        ctx.drawImage(this.img, this.column*this.frameWidth, this.row*this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
    }
}

export { Player }