
const showHiddenInput = (inputOverlay, inputPass, inputIcon) => {
    const overlay = document.getElementById(inputOverlay),
          input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon);
    
    iconEye.addEventListener("click", (e)=>{
        setTimeout(() => {
            if(input.type === 'password'){
                input.type = 'text';
                iconEye.classList.remove("bx-hide")
                iconEye.classList.add("bx-show")
                overlay.classList.add("active")
            }else{
                input.type = 'password'
                iconEye.classList.add("bx-hide")
                iconEye.classList.remove("bx-show")
                overlay.classList.remove("active")
            }        
        }, 400);
    })
}

showHiddenInput('input_overlay','input_pass','input_icon');