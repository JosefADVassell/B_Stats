

var btn1 = document.querySelector('#btn-1');
var btn2 = document.querySelector('#btn-2');
var btn3 = document.querySelector('#btn-3');


btn1.addEventListener('click', () =>{
document.body.style.backgroundImage = "url('MT.jpg')";

});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('VA.jpg')";
 });

btn3.addEventListener('click', () =>{
     document.body.style.backgroundImage = "url('rivv.jpg')";
        
});

function runCode() {
    alert("hello saulito");
}
// increment fucntion and pass in the id as a parameter

function incrementValue(id)
{
    
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).value = value;
    
    
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value > 0)
    {
    value--;
    }

    document.getElementById('number').value = value;
}

function Reset()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value = 0;
    document.getElementById('number').value = value;
    
}
// fouls checker
function fouls(id)
{ 
    incrementValue(id);
    var value = parseInt(document.getElementById(id).value, 10);
   
    if(value === 4)
    {
        alert("one more foul you out");
       
    }
     
    if(value > 4)
    {
        alert("foul out");
        value = 5;
    }   

}
function TotalReb(id)
{
    incrementValue(id);
    var value = parseInt(document.getElementById(id).value, 10);  
    
}