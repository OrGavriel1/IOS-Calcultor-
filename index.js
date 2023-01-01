
const button = document.querySelectorAll('#numbers');
const operation = document.querySelectorAll("#operation");
const point = document.getElementById("point");
const equal = document.getElementById("equal");
const nagativeButton = document.getElementById("nagative");
const deleteButton = document.getElementById("delete");

const dis = document.getElementById("display");

let saveValue1 = null;
let saveOpartion = null;
let num = '';


deleteButton.addEventListener("click", clear);
nagativeButton.addEventListener("click", nagative);

function clear(){
    setDisplay("0");
    resetString();
    saveValue1 = null;
    saveOpartion = null;
    
}

function nagative(){
    if(dis.innerHTML > 0){
        dis.innerHTML *= -1;
    }else{
        dis.innerHTML *= -1;
    }
}

const getDisplay = () => dis.innerHTML;

const setDisplay = (number) => {
        dis.innerHTML = number;
    }

point.addEventListener("click", (e) => {
    const value = getDisplay();
    let po = '.';
    if (!value.includes('.')){
        num += po;
        setDisplay(num);
    }
})

button.forEach(btn =>{
    btn.addEventListener("click", function(e){
        let num = e.target.innerHTML;
        inputNumber(num);
    })
})

function inputNumber(number) {
    const value = getDisplay();
    if(value === '0'){
        num += number;
        setDisplay(num);
    } else{
        num += number;
        setDisplay(num);
    }
    
}
function resetString(){
    num = '';
}

operation.forEach(ope =>{
    ope.addEventListener("click", function(e){
        let op = e.target.innerHTML;
        ope.classList.add("operatorClick");
        funcOpartion(op);
    })
})

equal.addEventListener("click", () =>{
    if(saveValue1){
        setDisplay(calculator());
        saveValue1 = null;
        saveOpartion = null;
        num = '';
    }
})

function funcOpartion(sign){
    const value = getDisplay();
    if (!saveValue1 || num === '') {
        saveValue1 = value;
        saveOpartion = sign;
        resetString();
        return;
    }
        saveValue1 = calculator();
        setDisplay(saveValue1);
        saveOpartion = sign;
        resetString();
    
}




function calculator (){
    const value = getDisplay();
    let result;
    let final;
    if(saveOpartion === '+'){
        result = parseFloat (saveValue1) + parseFloat(value)
    }else if(saveOpartion === '-'){
        result = parseFloat(saveValue1) - parseFloat(value)
    }else if(saveOpartion === '*'){
        result = parseFloat(saveValue1) * parseFloat(value)
    }else if(saveOpartion === '/'){
        result = parseFloat(saveValue1) / parseFloat(value)
    }
    final = checkNumAfterP(result);
    return final;
}

function checkNumAfterP(num){
    num = num.toString();
    for(let i = 0; i < num.length; i++){
        if(num[i] === '.'){
            num = parseFloat(num).toFixed(2)   
            return num;
        }
    }
    return num;
}

