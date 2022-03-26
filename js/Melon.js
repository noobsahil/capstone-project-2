class Melon{

constructor(x,y,r){

    var options={
        restitution: 0.5,
        friction:1,
        density:1,
        isStatic:false

    }

    this.x=x,
    this.y=y,
    this.r=r

    this.melon= Bodies.circle(this.x,this.y,this.r,options)
    this.image= loadImage("melon.png")
    World.add(world,this.melon)
}

display(){

push()
translate(this.melon.position.x,this.melon.position.y)
// ellipseMode(RADIUS)
// ellipse(0,0,this.r,this.r)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)

pop()

}



}

