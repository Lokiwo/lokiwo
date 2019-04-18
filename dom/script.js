function square(){
    var number= document.getElementById('square-input').value
    alert("The result of squaring the number "+ number + " is "+ number**2)
}

function halfNumber(){
    var number2=document.getElementById('half-input').value 
    alert("Half of "+ number2+" is "+number2/2)
}

function percentOf(){
    var number3=document.getElementById('percent1-input').value 
    var number4=document.getElementById('percent2-input').value
    alert(number3 + " is 50% of "+number4)
}

function areaOfCirle(){
    var number5=document.getElementById('area-input').value
    alert("The area for a circle with "+number5+ " is "+ number5**2*3.14)
}
       