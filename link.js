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

const numbers = document.querySelectorAll(".numbers");

const display = document.querySelector(".display");
const clearbtn = document.querySelector(".clearbtn");

const currentOperator = document.querySelectorAll(".operators");

 function numberDisplay()
{

    numbers.forEach(number => {
       
        number.addEventListener('click',(e) =>{
            
            if (e.target.textContent == "CLR"){display.textContent = ""}
            else
           { display.textContent = display.textContent + e.target.textContent}});
        
    });
    
}

numberDisplay();

function calcDisplay()
{
    currentOperator.forEach(operator => {
        operator.addEventListener('click',(e) => 
        {
            if (e.target.textContent == "+")
            {display.textContent = add()}
        })
        
    });
}

