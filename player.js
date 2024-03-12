function Player()
{
    const canvas = document.getElementById('game');

    this.img = new Image();

    this.img.onload = () =>{
        // console.log("loaded");
    }

    this.img.src = "sprite.png";
    
    this.x = 300;
    this.y = 400;
    this.size = 64;
    this.velocityX = 0;
    this.velocityY = 0;
    this.counter = 0;
    this.delay = 10;
    this.gravityPower = 0.2;
    this.gravity = 0;
    this.maxGravity = 3;
    this.acceleration = 1;
    this.maxSpeed = 10;
    this.frictionX = 0.2;
    this.frictionY = 0.01;
    this.jumpPower = 2.5;
    this.maxJump = 20;
    this.groundCheck = 0;

    this.column	= 0;	
	this.row = 0;	
	this.frameWidth	= 64;	
	this.frameHeight = 64;

    this.update = function()
    {
        this.gravity += this.gravityPower;

        if(this.velocityX > this.maxSpeed)
        {
            this.velocityX = this.maxSpeed;
        }else if(-this.velocityX > this.maxSpeed)
        {
            this.velocityX = -this.maxSpeed;
        }

        if(this.gravity > this.maxGravity)
        {
            this.gravity = this.maxGravity;
        }

        this.velocityY += this.gravity;
        
        this.Move();

        this.velocityX /= this.frictionX + 1;
        this.velocityY /= this.frictionY + 1;

        this.WallColision();

    }

    this.Walk = function(right)
    {
        if(right)
        {
            this.velocityX += this.acceleration;
        }
        else
        {
            this.velocityX -= this.acceleration;
        }
    }

    this.Jump = function()
    {
        if(this.groundCheck > 0)
        {
            this.velocityY -= this.jumpPower;
            this.groundCheck--;
            console.log("cos");
        }
    }
    
    this.Move = function()
    {
        this.y += this.velocityY;
        this.x += this.velocityX;
    }

    this.WallColision = function()
    {
        if (this.x + this.frameWidth < this.frameWidth)
        {
            this.x = 0;
            this.velocityX = 0;
        }

        if (this.y + this.frameHeight < this.frameHeight)
        {
            this.y = 0;
            this.velocityY = 0;
        }

        if (this.x + this.frameWidth > canvas.width)
        {
            this.x = canvas.width - this.frameWidth;
            this.velocityX = 0;
        }

        if (this.y + this.frameHeight > canvas.height)
        {
            this.y = canvas.height - this.frameHeight;
            this.velocityY = 0;
            this.gravity = 0;
            this.groundCheck = this.maxJump;
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