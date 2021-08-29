/* onload() funca como un main(); Es una funcion del BOM que espera a cargar el DOM (todo el contenido de la pag) */
window.onload = () => {
    const tab = document.getElementById("mail_creation_tab");
    const body = document.getElementById("mail_creation_body");
    const minus = document.getElementById("new_mail_minus");
    const expand = document.getElementById("new_mail_expand");
    
    /*En mailOpen() hice lo de clickear 'Nuevo mail' y que se abra la verga */
  (function mailOpen(){
    const newMailButton = document.getElementById("new_mail_button");
    const crossIcon = document.getElementById("new_mail_cross");
    visibilitySwitch(newMailButton, "mail_creation");
    visibilitySwitch(crossIcon, "mail_creation");
  })();
  /*Funcion que cambia la visibilidad del style que le indiques */
  function visibilitySwitch(button, elementId) {
    button.addEventListener("click", function () {
      const element = document.getElementById(elementId);
      var cStyle = getComputedStyle(element);
      var visibility = cStyle.getPropertyValue("visibility");
      element.style.visibility =
        visibility === "visible" ? "hidden" : "visible";
    });
  }
  /* Cuando clickeas el simbolo de menos activa un style que hace cosas para que se achique y no me rompas los huevos */
  minus.addEventListener("click", function () {
    activeClass([tab, body, minus, expand], "active")
  });
  expand.addEventListener("click", function () {
    activeClass([tab, body, minus, expand], "remove")
  });
  function activeClass(element, option){
        element.forEach(x => {
            option === "active" ? x.classList.add("active") : x.classList.remove("active");
        });
  }
}

// Cosas que estaban buenas pero en realdioad no

//   function getElements(elementId){
//     const elements = elementId.map((x) => {
//         document.getElementById(x);
//     })  
//     return elements
//     }
// }

// function activeClass(element, option){
//     console.log("cosa", option)
//     element.classList.option();
// }
// function adder (clase) {
// return clase.classList.add();
// }

// activeClass("cosa", adder)