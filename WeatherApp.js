
 
 function f1(){
    var coo =document.getElementById("d").value;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
     
         var api_key='&appid=106a2e096818d8962a6e43b32eeeb84d&units=metric'
         var url = api+coo+api_key;
     
        fetch(url).then(
            res=>{
                res.json().then(
                    data=>{
                        
                     console.log(data);
                    
                         var temp="";

                        
                           
                             temp+="<tr class='table-success'>";
                             temp+="<td>"+data.name+"</td>";
                              temp+="<td>"+data.sys.country+"</td>";
                             temp+="<td>"+data.weather[0].description+"</td>";
                             temp+="<td>"+data.main.temp+"</td>";
                            
                             temp+="<td>"+data.main.temp_min+"</td>";
                             temp+="<td>"+data.main.temp_max+"</td>";
                           temp+="</tr>"
                           

                        

                        
                         document.getElementById("data").innerHTML += temp;
                     
                    
                    }
                )
            }
        ) }
   