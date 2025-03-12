


const inputBox = document.querySelector(".input-box");
inputBox.addEventListener("input", () => {
 
    console.log(inputBox.value);
});


const clearButton = document.querySelector(".btn");
clearButton.addEventListener("click", () => {
    let storeData = document.querySelector(".store")
    storeData.textContent = inputBox.value;
    inputBox.value="";
    

    
});


const buttonData = document.querySelectorAll("button")

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



