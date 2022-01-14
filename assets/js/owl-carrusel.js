/* const d = document;

export default function owlCarrusel(){
   const $carrusel = d.querySelector(".partners-container"),
      $carruselContainer = d.querySelector(".partners-wrapper"),
      $carruselItems = d.querySelectorAll(".partner-item");

   let pressed = false,
   active = false,
   startX,
   x;

   $carrusel.addEventListener("mouseover", (e)=>{
      $carrusel.style.cursor = "grab";
   });

   $carrusel.addEventListener("mousedown", (e)=>{
      e.preventDefault();
      pressed = true;
      startX = e.offsetX - $carruselContainer.offsetLeft;
      $carrusel.style.cursor = "grabbing";
   });

   $carrusel.addEventListener("mouseup", (e)=>{
      $carrusel.style.cursor = "grab";
   });

   window.addEventListener("mouseup", (e)=>{
      pressed = false;
      //console.log(e);
      grabOff();
   });

   $carrusel.addEventListener("mousemove", (e)=>{
      if(!pressed) return;
         e.preventDefault();
         x = e.offsetX;
         $carruselContainer.style.left = `${parseInt(x - startX)}px`;

         checkboundary();
   });

   function checkboundary(){
      let outer = $carrusel.getBoundingClientRect(),
         inner = $carruselContainer.getBoundingClientRect();

      if(parseInt($carruselContainer.style.left) > 0){
         $carruselContainer.style.left = "0px";
      } else if (inner.right < outer.right){
         $carruselContainer.style.left = `-${inner.width - outer.width}px`;
      }
      
      //console.log("inner", inner, inner.width * 2);
      //console.log("outer", outer);
      //console.log("last", last);
   }

   function grabOff (){
      let outer = $carrusel.getBoundingClientRect(),
         inner = $carruselContainer.getBoundingClientRect(),
         count = 1,
         s = 0,
         breakpoint = $carruselItems[count].getBoundingClientRect().left * 0.2,
         carruselItem = $carruselItems[s].getBoundingClientRect();

         $carruselItems[s].classList.add("active");
         console.log(outer, inner);
      $carruselItems.forEach((el)=>{
         console.log(el.getBoundingClientRect());
         if((carruselItem.left) <= breakpoint){
             $carruselItems[s].style.left = `${$carruselItems[2].style.width * count}px`;
             console.log($carruselItems[2].style.left, "listo");
            count += 1;
            s += 1;
            
         }
      })
   }
   
} */
export default function owlCarrusel() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      578: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  console.log("Yes");
}
