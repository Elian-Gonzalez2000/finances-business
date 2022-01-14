/* Menu de hamburguesa, funciona dinamicamente llamando la funcion con los selectores correctos. El primer parametro recibe el menu completo, el segundo recibe el boton qu activa el menu y el tercero recibe el algun efecto que se desee darle al boton pero no es obligatorio */

export default function hamburguerMenu(menu, menubtn, menuLink) {
	document.addEventListener("click", (e) => {
  	if (e.target.matches(menubtn) || e.target.matches(`${menubtn} *`)) {
    	document.querySelector(menu).classList.toggle("menu-active");
    	document.querySelector(menubtn).classList.toggle("btn-effect");
  	}

  	if (e.target.matches(menuLink)) {
    	document.querySelector(menu).classList.remove("menu-active");
    	document.querySelector(menubtn).classList.remove("btn-effect");
  	}
	});
}