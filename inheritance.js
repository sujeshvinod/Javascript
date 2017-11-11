/*
File: inheritance.js
Author: A.Vinod Kumar
Date: 11/11/2017
Purpose: Inheritance sample javascript
*/

// copies the properties from source object into destination
function mixin(destination, source) {
    if(Object.getOwnPropertyDescriptor) {
        Object.keys(source).forEach(function (property) {
            var descriptor = Object.getOwnPropertyDescriptor(source, property);
            Object.defineProperty(destination, property, descriptor);
        });
    } else {
        for(var property in source) {
            if(source.hasOwnProperty(property)) {
                destination[property] = source[property];
            }
        }
    }
}

// Shape
function Shape() {
    if(!(this instanceof Shape)) {
        return new Shape();
    }
}

Shape.prototype = Object.create(Object.prototype);
mixin(Shape.prototype, {
    constructor: Shape,
    draw: function() {
        console.log("Shape");
    }
});

// Circle
function Circle(r) {
    if(!(this instanceof Circle)) {
        return new Circle(r);
    }
}

Circle.prototype = Object.create(Shape.prototype);
mixin(Circle.prototype, {
    constructor: Circle,
    draw: function() {
        console.log("Circle");
    }
});