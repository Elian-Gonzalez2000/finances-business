const d = document;

export default function showTabs(){
   const $tabs = d.querySelectorAll("[data-tab] *"),
      $content = d.querySelectorAll("[data-content]");

      let i = 0;
      $tabs.forEach((el)=>{
         el.setAttribute("data-tab", `${el.parentElement.dataset.tab}`)
      });
   d.addEventListener("click", (e)=>{
      if(e.target.matches("[data-tab]") || e.target.matches("[data-tab] *")){
         let tabValue = e.target.dataset.tab;
         $tabs.forEach((el)=>{
         el.parentElement.classList.remove("active")
         });
         e.target.classList.add("active") || e.target.parentElement.classList.add("active");
         $content.forEach((el)=>{
            el.classList.remove("active");
            let contentValue = el.dataset.content;
            if (tabValue === contentValue) {
               el.classList.add("active");
            }
         })
      }
   });
}