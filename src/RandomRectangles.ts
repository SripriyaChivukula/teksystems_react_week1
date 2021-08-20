//let name: string = "Priti";
//export {}
let myName = "Priti";
console.log(myName);

// <HTMLCanvasElement>
// var canvas = <HTMLCanvasElement> document.getElementById("canvas");

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = canvas.getContext("2d");




function drawRect(){
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log("In DrawRect");
    let num = document.getElementById('numofrect').value;
    console.log(document.getElementById('numofrect').value);
  
    for (var i=0; i<num; i++){

        const red = Math.floor((Math.random() * 256));
        const green = Math.floor((Math.random() * 256));
        const blue = Math.floor((Math.random() * 256));

        const x = Math.floor((Math.random() * canvas.width)) ;
        const y = Math.floor((Math.random() * canvas.height));

            
        //    const x = instanceOfMouseEvent.offsetX;
          //  const y = instanceOfMouseEvent.offsetX.offsetY;

            
        
          

        //Math.random() * (max - min) + min;


        const width = Math.floor((Math.random() * 19+1))*10;
        const height = Math.floor((Math.random() * 19+1))*10;

        //console.log ("Red : " +red +"Green : " + green + "Blue : " + blue);
        
        ctx.fillStyle = `rgb(${red},${green},${blue})`;
        ctx.fillRect(x, y, width, width);
    }
    
}

const size = 20;
//let x = Math.floor((Math.random() * canvas.width)) ;
//let y = Math.floor((Math.random() * canvas.height));

let drawing = false;
function drawSnack1()
{
    drawing=true;
    let x = Math.floor((Math.random() * canvas.width)) ;
    let y = Math.floor((Math.random() * canvas.height));
    drawSnack(x,y);
}
function drawSnack(x: number,y: number)
{
   if(drawing)
   {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
    let num = document.getElementById('numofrect').value;
    

  //  let x = Math.floor((Math.random() * canvas.width)) ;
   // let y = Math.floor((Math.random() * canvas.height));
    
    for (var i=0; i<num; i++)
   {

        const red = Math.floor((Math.random() * 256));
        const green = Math.floor((Math.random() * 256));
        const blue = Math.floor((Math.random() * 256));

       

        
        ctx.fillStyle = `rgb(${red},${green},${blue})`;
        ctx.fillRect(x, y, size, size);
        x+=size;

        let random = Math.random();

        if (random < 0.5)
            y-=size;
        else
            y+=size;   
        
        
    }
   }
}

    function moveSnake()
    {
        
        canvas.addEventListener('mousemove', e => 
        {
        
            console.log(e.target);
          
            const x = e.offsetX;
            const y = e.offsetY;
          // ctx.fillStyle = "green";
          // ctx.fillRect(x, y, size, size);
          drawSnack(x,y);
           console.log(x);
           console.log(y);
        }


    }
 
    
    
        

  
    


export = {}