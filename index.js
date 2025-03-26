


const inputBox = document.querySelector(".input-box");
inputBox.addEventListener("input", (e) => {
    var reg = /^[\d+\-*/%^]+$/;
    if(!reg.test((e.target.value))){
        console.log("chirag")
        e.target.value= e.target.value.slice(0, -1)
        }

});


const clearButton = document.querySelector(".btn");
clearButton.addEventListener("click", () => {
    let storeData = document.querySelector(".store")
    storeData.textContent = inputBox.value;
    inputBox.value="";
    

    
});

document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
    var reg = /^[\d+\-*/%^]+$/;
    if(!reg.test((event.key))){
        console.log("chirag")
        return;
        }
        else{
            
            inputBox.value = inputBox.value+event.key 
        }
  
});



const buttonData = document.querySelectorAll("button")

// inputBox.addEventListener("input",(key)=>{


// })

buttonData.forEach((data)=>{
    data.addEventListener('click',()=>{
        console.log(data)
   
    
        if(data.textContent=="="){
          inputBox.value = eval(inputBox.value)
        }
        else if (data.textContent=="C"){

            return
            
                    }
        else{
            
            inputBox.value = inputBox.value + data.textContent;
            
        }
        
       
    
       
    })



})





      


// 1.hr ek button p event listner lgana h to loop lgake hr
// 2.jo console kra rhe ho usko input box main dalna h
// 3. jo daloge input box m vo replace nhi hona chhaye
// 4. eval use krke = 



