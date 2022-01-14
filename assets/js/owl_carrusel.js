const d = document;

export default function owlCarrusel(){
   const $carrusel = d.querySelector(".partners-container"),
      $carruselItems = d.querySelectorAll(".partner-item");

      let i = 0,
       width = 0;
       
      $carruselItems.forEach((el)=>{
         //console.log(el.getBoundingClientRect());
         $carruselItems[i].style.transform = `translateX(${width}px)`;
         width = width + $carruselItems[i].clientWidth;
         i++;
      });

   d.addEventListener("dragstart", (e)=>{
      e.preventDefault();
      if(e.target.matches(".partner-item img")){
      //console.log(e);
      $carrusel.classList.add(".owl-grab");
      }
   });
   
   d.addEventListener("mouseover", (e)=>{
      if(e.target.matches(".partner-item img")){
      $carrusel.classList.remove("grab-off");
      //console.log(e);
      $carrusel.classList.add(".owl-grab");
      //console.log($carrusel.getBoundingClientRect().width);
      }
   });

   let transform = 0;
   d.addEventListener("mouseout", (e)=>{
      if(e.target.matches(".partner-item img")){
      //console.log(e);
      $carrusel.classList.remove(".owl-grab");
      $carrusel.classList.add("grab-off");
      $carrusel.style.transform = `translateX(${0}px)`;
      transform = 0
      }
   });

   d.addEventListener("mousemove", (e)=>{
      if($carrusel.classList.contains(".owl-grab")){
         transform = transform + e.movementX;
         //console.log(e);
         $carrusel.style.setProperty("transform", `translateX(${transform}px)`);

         $carruselItems.forEach((el)=>{});
      }
   });
   
}