/*
File: mixin.js
Author: A.Vinod Kumar
Date: 11/11/2017
Purpose: Mixin Javascript
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