class Bob extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);

    this.x = x;
    this.y =y;
  }

  display() {
    this.body.position.x = this.x;
    this.body.position.y = this.y;
    super.display();
  }
}
