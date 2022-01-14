const d = document;

export default function(header, menuLinks){
   const $header = d.querySelector(header),
      $menuLinks = d.querySelectorAll(menuLinks);

   window.addEventListener("scroll", (e)=>{
      let scrollY = window.pageYOffset;
      if (scrollY > 700) {
         $header.classList.add("active");
         $menuLinks.forEach((el)=>{
            el.classList.add("active");
         });
      } else {
         $header.classList.remove("active");
         $menuLinks.forEach((el)=>{
            el.classList.remove("active");
         });
      }
   })
}