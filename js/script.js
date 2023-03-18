const taskall = document.querySelector(".taskall");

const taskitem = document.querySelector(".taskitem");
const button = document.getElementById("button");
const inputvalue = document.getElementById("inputText");
const form = document.getElementById("form");


// Delete task item 

taskall.addEventListener("click", (eo) => {

   switch (eo.target.className) {
      case "icon-bin icons":
         const xx = eo.target.parentElement.parentElement.parentElement;
         xx.remove();
         break;

      case "icon-star icons":
         eo.target.classList.add("icon-star-select");
         const ff = eo.target.parentElement;
         taskall.prepend(ff);
         break;

      case "icon-check-circle icons":
         const text = eo.target.parentElement.parentElement.parentElement;
         eo.target.parentElement.parentElement.innerHTML = `<div><span class="icon-bin icons"></span></div>
         <div><span class="icon-heart icons"></span> </div>`;

         const tasktext = text.getElementsByClassName("task")[0];
         tasktext.classList.add("finish");
         break;

      case "icon-heart icons":
         eo.target.parentElement.parentElement.parentElement.getElementsByClassName("task")[0].classList.remove("finish");
         
         eo.target.parentElement.parentElement.innerHTML = `<div><span class="icon-bin icons"></span></div>
            <div><span class="icon-check-circle icons"></span> </div>`;

         break;


      default:
         break;

   }
}

)

// Input task item 

form.addEventListener("submit", (eo) => {
if (inputvalue.value!="") {
   
   eo.preventDefault();
   taskall.innerHTML += `
    <div class="taskitem">
    <span class="icon-star icons"></span>
    <h3 class="task">${inputvalue.value}</h3>
     
    <div class="twoicons">
    <div><span class="icon-bin icons"></span></div>
    <div> <span class="icon-check-circle icons"></span> </div>
    </div>
 </div>`;

   inputvalue.value = "";
   
}
}

)

