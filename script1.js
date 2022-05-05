function foo(){
    var table=document.getElementById('table')
    var row= document.createElement("tr");
    
   
    var fname=document.getElementById("fname").value;
    var t1=inner("td",fname)
     
    var lname=document.getElementById("lname").value;
    var t2=inner("td",lname)
    var addname=document.getElementById("addname").value;
    var t3=inner("td",addname)
    var pin=document.getElementById("pin").value;
    var t4=inner("td",pin)
    var gender = document.getElementsByName("male")
    var gender_value;
   
         for (let i = 0; i < gender.length; i++) {
             if(gender[i].checked){
                 gender_value = gender[i].value
             }
             
         }
         var gen=inner("td",gender_value);
         //food
            // var foodid= document.getElementById("food")
            // if ([foodid.checked].length < 2){
            //     alert("you must select two")
            // }
        //state
   var stateId= document.getElementById("state")
   var non = stateId.options[stateId.selectedIndex].text
     var state=inner("td",non);
     row.append(t1,t2,t3,t4,gen,state)
     table.append(row)
 
}
function inner(tag,value){
            var els=document.createElement(tag);
            els.innerHTML=value
            return els;
    }
