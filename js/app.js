

//Selectors

let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
// let addBtn = document.querySelector("#addBtn");
let inputform = document.querySelector("#inputform");
let rows = document.querySelector("#rows");
let total = document.querySelector("#total");



//functions

function calcTotal(){
      let costs = document.querySelectorAll(".cost");
      let costTotal = [...costs].reduce(function(pv,cv){
            return pv+Number(cv.innerText);
      },0)
      total.innerText = costTotal;

}

function del(event){
  if(confirm("Are you sure to delete?")){
          // console.log(event.path[2].remove())
          event.target.parentElement.parentElement.remove();
          calcTotal();
  }
}




//process
products.forEach(function(product){
    // console.log(product)

   let newOption = new Option(product.name,product.id);
    //  console.log(newOption)
     items.append(newOption);
})

// newOption.innerText ="mango";
// newOption.value = 5;
// console.log(newOption)

inputform.addEventListener("submit",function(e){
  e.preventDefault();


  let currentProduct = products.find(product=>product.id==items.value);
  let cost = currentProduct.price*quantity.valueAsNumber;
  let newTr = document.createElement("tr");
  newTr.innerHTML =`
              <td class="">
                ${currentProduct.name}
                <p class=" small text-danger mb-0 del-btn" onclick="del(event)">Delete</p>
              </td>
              <td class="text-end">${currentProduct.price}</td>
              <td class="text-end">${quantity.valueAsNumber}</td>
              <td class="text-end cost">${cost}</td>     
                    `;
  
  
  rows.append(newTr);
  // quantity.value = items.value = null;
  inputform.reset();
  calcTotal();


  

  // console.log(costs)
  

  // console.log(newTr)
  // console.log(items.value,quantity.value,currentProduct)
});



                   