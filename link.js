function operator(op,first,second)
{
    if (op == "+")
        add(first,second);

    if (op == "-")
        sub(first,second) ;

    if (op == "*")
        mul(first,second) ;

    if (op == "/")
        div(first,second) ;
}

function add(first,second){ return first + second };
function sub(first,second) {return first - second};
function mul(first,second) { return first * second};
function div(first,second) {return first / second};


let currentInput ="";
let BOP = "";
let AOP = "";
let currentOp = ""
let result;
const numbers = document.querySelectorAll('button');

const display = document.querySelector(".display");
const clearbtn = document.querySelector(".clearbtn");

// const currentOperator = document.querySelectorAll(".operators");

 function numberDisplay()
{

    numbers.forEach(number => {
        
       
        number.addEventListener('click',(e) =>{
            
            if (e.target.textContent == "CLR") 
                {display.textContent = ""}
          
        
            else if (e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "*"  || e.target.textContent == "/" )
            { 
                currentOp = e.target.textContent
                BOP = Number(currentInput);
                currentInput = "";
                display.textContent = "";
            

            }

            else if (e.target.textContent == "=")
            {
                AOP = Number(currentInput) 
                    if (currentOp == "+") 
                        
                    {
                        result =  add(BOP,AOP)
                        display.textContent = result.toFixed(2)
                        
                        
                    }

                     if (currentOp =="*") 
                     {
                        result =  mul(BOP,AOP)
                        display.textContent = result.toFixed(2)
                        
                    }

                      if (currentOp == "-") 
                     {
                        result =  sub(BOP,AOP)
                        display.textContent = result.toFixed(2)
                        
                    }

                       if (currentOp == "/") 
                    {
                        result =  div(BOP,AOP)
                        display.textContent = result.toFixed(2)
                        
                    }

                    
                    AOP = "";
                    currentInput = result;
            }
              else
           { display.textContent = display.textContent + e.target.textContent
            console.log(e.target.textContent)
            currentInput = currentInput + e.target.textContent
           }
        });
        
    });
    
}

numberDisplay();

// function calcDisplay()
// {
//     currentOperator.forEach(operator => {
//         operator.addEventListener('click',(e) => 
//         {
//             if (e.target.textContent == "+")
//             {display.textContent = add()}
//         })
        
//     });
// }

