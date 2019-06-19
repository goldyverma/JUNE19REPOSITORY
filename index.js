//basic way to create an object

/*function createCircle(radius){
return {
    radius,
    draw: function(){
        console.log('draw');
    }
};
}
const circle = createCircle(1);
circle.draw();*/

//consturctor Fuction
function Circle(radius){
  
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    
}



const circle1 = new Function('radius',
`this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }`);
    const orange = new Circle(1);

    const another = new Circle(1);