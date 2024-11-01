
let all_button = document.querySelectorAll(".all_button button")
let all_display_area = document.querySelector(".all_display_area input")


 for (let i = 0; i< all_button.length; i++) {

         let button = all_button[i]


    button.addEventListener('click', (event)=>{

       let text = event.target.innerText

       if(text == "AC"){

        all_display_area.value = '';

       }else if(text == "="){

        let result = eval(all_display_area.value)
        all_display_area.value = result

       }else{

        all_display_area.value += text

       }
         
         
         
         })

  
     }

