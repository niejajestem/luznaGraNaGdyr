function Player()
{
    this.img = new Image();

    this.img.onload = () =>{
        console.log("loaded");
    }

    this.img.src = "sprite.png";
    
    this.x = 300;
    this.y = 400;
    this.velocity = 2;
    this.limit = 300;
    this.counter = 0;
    this.delay = 5;

    this.column	= 0;	
	this.row = 0;	
	this.frameWidth	= 64;	
	this.frameHeight = 64;

    //logika sterująca obiektem
    this.update = function()
    {

    }

    this.forward = function()
    {
        console.log(this.counter);
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
        console.log(this.counter);
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
        console.log(this.counter);
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
        console.log(this.counter);
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