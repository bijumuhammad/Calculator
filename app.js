class Calculator{
constructor(previousOperandTextElement,currentOperandTextElement)
{
    this.previousOperandTextElement=previousOperandTextElement
    this.currentOperandTextElement=currentOperandTextElement
    this.clear()

}

clear(){
this.currentOperand=''
this.previousOperand=''
this.operation=undefined
}

delete(){
  this.currentOperand=this.currentOperand.toString().slice(0,-1)


}
appendNumber(number){ 
  if(number=='.' && this.currentOperand.includes('.'))return
  
  this.currentOperand= this.currentOperand.toString()+number.toString()
  
}


chooseOperation(operation) {
  if(this.currentOperand==='')return;
  if(this.previousOperand !== ''){this.compute()}
  this.operation=operation
  this.previousOperand=this.currentOperand
  this.currentOperand=''


}

compute(){
 let comp;
 const prev =  parseFloat(this.previousOperand)
 const curr = parseFloat(this.currentOperand)
if(isNaN(prev)||isNaN(curr))return


 switch(this.operation)
{
 case '+': comp= prev+curr
            break;
case '-': comp= prev-curr
            break;
case '*': comp= prev*curr
            break;
 case '/': comp= prev/curr
            break;
  default: return
}
this.currentOperand=comp
this.previousOperand=''
this.operation=undefined
}
getDisplayNumber(number) {
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`
  } else {
    return integerDisplay
  }
}



updateDisplay(){
  this.currentOperandTextElement.innerText =this.getDisplayNumber(this.currentOperand)
  if(this.operation !=null)
   this.previousOperandTextElement.innerText =`${this.getDisplayNumber(this.previousOperand)}${this.operation}`
  else
  this.previousOperandTextElement.innerText=''


   console.log(this.currentOperandTextElement)

}





}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation]')
const deleteButtons = document.querySelector('[data-delete]')
const equalButtons= document.querySelector('[data-equal]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalButtons.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButtons.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButtons.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

/*
equalButtons.addEventListener('click',button =>{
  calculator.compute()
  calculator.updateDisplay()
})


/*const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  numberButtons.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

/*
const calculator= new Calculator(previousScreenText,currentScreenText)

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()


    })
    
})*/