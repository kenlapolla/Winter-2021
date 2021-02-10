function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color); //leveraging the Object call method to bind this
    this.radius = radius;
}

function extend(Child, Parent){
    //Reset the prototype
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}


function Square(size) {
    this.size = size;
}
extend(Square, Shape);

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}