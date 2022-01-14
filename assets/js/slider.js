const d = document;

/* Slider dinamico que funciona con dos escuchas a los botones que desencadenan los eventos */
export default function sliderResponsive(){
   const $nextbtn = d.querySelector(".slider .slider-btn.next-btn img"),
      $prevbtn = d.querySelector(".slider .prev-btn img"),
      $sliderItems = d.querySelectorAll(".slider .slider-item");

         let i = 0;
   d.addEventListener("click", (e)=>{
      if(e.target === $prevbtn){
         e.preventDefault();
         i--;

         if (i<0) {
            i = $sliderItems.length -1;
         }
         
         $sliderItems.forEach((el)=>{
            /* Valida y elimina una clase para alternar los clicks en los botones */
            if(el.classList.contains("slide-active-right")){
               el.classList.remove("slide-active-right");
            }
            el.classList.remove("slide-active");
            el.classList.remove("slide-active-left");
            if(i == $sliderItems.length - 1){
               $sliderItems[0].classList.add("slide-out-left");
            } else {
               $sliderItems[i + 1].classList.add("slide-out-left");
            }
            /* Añade clase que mueve el siguiente elemento principal */
            $sliderItems[i].classList.add("slide-active-left");
            $prevbtn.style.pointerEvents = "none";

            /* Remueve clase que hace desaparecer a los elementos hacia la izquierda */
            setTimeout(() => {
               el.classList.remove("slide-out-left");
               $prevbtn.style.pointerEvents = "auto";
            }, 800);
         });
      } 
      if(e.target === $nextbtn){
         e.preventDefault();
         i++;

         if (i>$sliderItems.length - 1) {
            i = 0;
         }
         
         $sliderItems.forEach((el)=>{
            /* Valida y elimina una clase para alternar los clicks en los botones */
            if(el.classList.contains("slide-active-left")){
               el.classList.remove("slide-active-left");
            }
            el.classList.remove("slide-active");
            el.classList.remove("slide-active-right");
            if(i == 0){
               $sliderItems[$sliderItems.length - 1].classList.add("slide-out-right");
            } else {
               $sliderItems[i - 1].classList.add("slide-out-right");
            }
            /* Añade clase que mueve el siguiente elemento principal */
            $sliderItems[i].classList.add("slide-active-right");
            $nextbtn.style.pointerEvents = "none";

            /* Remueve clase que hace desaparecer a los elementos hacia la derecha */
            setTimeout(() => {
               el.classList.remove("slide-out-right");
               $nextbtn.style.pointerEvents = "auto"
            }, 800);
         });
      } 
   });
}