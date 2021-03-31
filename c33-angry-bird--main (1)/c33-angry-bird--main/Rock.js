class Rock{
    constructor(x,y,width,height){
this.body=Bodies.rectangle(x,y,width,height,{ isStatic: false})
this.width=width 
this.height=height
this.image=loadImage("images/rock1.png")
World.add(world,this.body)
    }
    show(){
        var p = this.body.position
        imageMode(CENTER)
        image(this.image,p.x,p.y,this.width,this.height)
    }
}