

var btn1 = document.querySelector('#btn-1');
var btn2 = document.querySelector('#btn-2');
var btn3 = document.querySelector('#btn-3');
var btn4 = document.querySelector('#btn-4');
var number = document.querySelector('#number');



btn1.addEventListener('click', () =>{
document.body.style.backgroundImage = "url('MT.jpg')";

});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('VA.jpg')";
 });

btn3.addEventListener('click', () =>{
     document.body.style.backgroundImage = "url('rivv.jpg')";
      
});

btn4.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url('lightblue.jpg')";
});

// for total score




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

// total rebound function

function TotalReb(id)
{
    incrementValue(id);
    
    var Dreb_value = parseInt(document.getElementById("D_Rebound").value, 10);  
    var Oreb_value = parseInt(document.getElementById("O_Rebound").value, 10);  
    // get defense rebound value and add it to offense rebound to total rebound
    document.getElementById("Total_Rebound").value = Dreb_value + Oreb_value;
   
}

function ThreeFieldGoal(id)
{   
    // and if i clcik on 3FGM then 3FGA goes up also

    incrementValue(id);
    var FGM_number = parseInt(document.getElementById("3FGM_number").value, 10);
    var FGA_number = parseInt(document.getElementById("3FGA_number").value, 10);
   
    if(id==="3FGM_number")
    {
      document.getElementById("3FGA_number").value = FGA_number + 1;
      
    FGA_number++;
    //var TP_value = document.getElementById("TP").value = FGM_number+2;
    update(id);
    } 

    // get three field goal  percentage 
  
    
   var valuee= document.getElementById("3Percent").value = Math.round((FGM_number) / (FGA_number)*100) +'%';

  
}

function FieldGoal(id)
{
    incrementValue(id);
    var FGM_number = parseInt(document.getElementById("FGM_number").value, 10);
    var FGA_number = parseInt(document.getElementById("FGA_number").value, 10);
   
    if(id==="FGM_number")
    {
      document.getElementById("FGA_number").value = FGA_number + 1;
    //  var TP_value = document.getElementById("TP").value = FGM_number+1
    FGA_number++;
    update(id);
    } 

    // get three field goal  percentage 
  
    
   var valuee= document.getElementById("2Percent").value = Math.round((FGM_number) / (FGA_number)*100) +'%';

}
function FreeThrows(id)
{
    incrementValue(id);
    var FTM_number = parseInt(document.getElementById("FTM_number").value, 10);
    var FTA_number = parseInt(document.getElementById("FTA_number").value, 10);
   
    if(id==="FTM_number")
    {
      document.getElementById("FTA_number").value = FTA_number + 1;
    
    FTA_number++;
   // var TP_value = document.getElementById("TP").value = FTM_number;
   update(id);
    }


    // get three field goal  percentage 
  
    
   var valuee= document.getElementById("FTPercent").value = Math.round((FTM_number) / (FTA_number)*100) +'%';
}
// update the total score 
// step 1 get the value id for total points 
//check if you can change nummber
// 
function update(id)
{
    var FTM_number = parseInt(document.getElementById("FTM_number").value, 10);
    //var TP_value = parseInt(document.getElementById("TP").value,10);
   // var FGM_number = parseInt(document.getElementById("FGM_number").value, 10);
   // var Three_FGM = parseInt(document.getElementById("3FGM_number").value, 10);
   
    //TP_value= document.getElementById("TP").value = FTM_number;
    //console.log(TP_value);

   if(id === "FTM_number")
    { 
    var value =  parseInt(document.getElementById("TP").value,10);
    value++;
    document.getElementById("TP").value = value;
    
       
    }
    if(id === "FGM_number")
    {
    var value =  parseInt(document.getElementById("TP").value,10);
    value= value + 2;
    document.getElementById("TP").value = value;
      
     
    }
    if(id ==="3FGM_number")
    {
        var value =  parseInt(document.getElementById("TP").value,10);
        value= value + 3;
        document.getElementById("TP").value = value;
          
    }
    
}


