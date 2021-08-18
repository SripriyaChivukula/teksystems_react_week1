/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true

const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
*/

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
/*function greeting(name, gender, isSelf)
 {
  const greetingWords = ["hello","hi","hey"];
  const prefixes = ["my", "his", "her", "their"];
 // const gender =["male","female","nonbinary"];



  // do stuff here ...
  for(let i=0;i<greetingWords.length;i++)
  {
    if(gender =="male")
    {
       if(isSelf==true)
    {
      return  `${greetingWords[i]} , ${prefixes[0]} name is ${name},i'm a ${gender}`; 
    }
      else
    {
      return  `${greetingWords[i]}  name is ${name},is a ${gender} (${prefixes[1]})`; 
    }
    }
    
  if(gender =="female")
  {
  
     if(isSelf==true)
  {
    return  `${greetingWords[i]} , ${prefixes[0]} name is ${name},i'm a ${gender}`; 
  }
    else
  {
    return  `${greetingWords[i]}  name is ${name},is a ${gender} (${prefixes[2]})`; 
  }
}
   
  if(gender =="nonbinary")
  {
  
     if(isSelf==true)
  {
    return  `${greetingWords[i]} , ${prefixes[0]} name is ${name},i'm a ${gender}`; 
  }
    else
  {
    return  `${greetingWords[i]}  name is ${name},is a ${gender} (${prefixes[3]})`; 
  }
  }
   
}

   };
 

  
  console.log(greeting("priya","female",true));*/


//  function turnUpperCase(name)
  {
  //  return name.toLowerCase().charAt(0).toUpperCase();
  }

function greeting(name, gender, isSelf) 
{
  const greetingWords = ["hello", "hi", "hey"];
  const prefixes = ["my", "his", "her", "their"];
  // const gender =["male","female","nonbinary"];
 const newname1 = name.toLowerCase().charAt(0).toUpperCase();
 const restofword = name.slice(1);
 const newname = newname1+restofword;
  for (let i = 0; i < greetingWords.length; i++) {
    if (gender == "male") {
      if (isSelf == true) {
        console.log(
          `${greetingWords[i]} , ${prefixes[0]} name is ${newname},i'm a ${gender}`
        );
      } else {
        console.log(
          `${greetingWords[i]}  name is ${newname},is a ${gender} (${prefixes[1]})`
        );
      }
    }

    if (gender == "female") {
      if (isSelf == true) {
        console.log(
          `${greetingWords[i]} , ${prefixes[0]} name is ${newname},i'm a ${gender}`
        );
      } else {
        console.log(
          `${greetingWords[i]}  name is ${newname},is a ${gender} (${prefixes[2]})`
        );
      }
    }

    if (gender == "nonbinary") {
      if (isSelf == true) {
        console.log(
          `${greetingWords[i]} , ${prefixes[0]} name is ${newname},i'm a ${gender}`
        );
      } else {
        console.log(
          `${greetingWords[i]}  name is ${newname},is a ${gender} (${prefixes[3]})`
        );
      }
    }
  }
}
greeting("priya", "female", true);
greeting("siva","male",false);
greeting("amik","nonbinary",false);
