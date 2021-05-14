class BaseClass {
  constructor(x, y ,width, height, angle){
    const options = {
      "restitution": 0.8,
      "density": 1,
      "friction": 1
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height
    this.image = loadImage("sprites/base.png")
    World.add(world, this.body)
  }

  display(){
    const body = this.body
    const angle = body.angle
    push()
    translate(body.position.x, body.position.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop()
  }
}