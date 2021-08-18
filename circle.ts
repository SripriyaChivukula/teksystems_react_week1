/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
 ​
 function getArea(radius: number): number
 {
​     const area: number  = 3.14159*radius**2; 
     return area;
 }
​
 function getDiameter(radius: number): number {

    const diameter: number = radius*2;
    return diameter;
​
 }
​
 function getCircumfrence(radius: number) :number
 {
​    const circumference: number = 2*3.14159*radius;
    return circumference
​
 }

 console.log("area of the circle"+getArea);
 console.log("diameter of the circle"+getDiameter);
 console.log("circumfrence of the circle"+getCircumfrence);




