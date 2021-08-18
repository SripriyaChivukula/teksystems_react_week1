const myobj={
a:"this is the property",
mysecondobj:"second object property",
"t":"this is a key property t",
"2":"this key is a number 2",
3:"this is a key 3"


}
console.log("myobj printed as js object");
console.log("my object",myobj);

const morelikejson ={
    "name":"priya",
    "birthday":10/30/82,
    "age":"2",
    "citiesyoulivedin":["Austin","Richmond","Plainsboro","Portland"],
    "isHuman":true,
    "planetsVisited":null,
    "personalInfo":{"favefood":"rasgulla","favecolor":"skyblue"}
};

   console.log("this is a JSON Obj"),
  
   console.log(morelikejson);

   console.log("this is now converted to json obj");
   const jsonobj = JSON.stringify(myobj);
   console.log(jsonobj);

   function sayHi(name,age)
   {
       return "my name is ${name} and age is ${age}";
   }
   console.log(sayHi("priya",38));
  