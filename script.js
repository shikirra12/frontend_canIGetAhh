var request = new XMLHttpRequest();
var url = "http://localhost:8080/api/customer/drink_menu";

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let drinkArray = JSON.parse(this.responseText);
    console.log("this status works");
    displayData(drinkArray);
  }
};
request.open("GET", url, true);
request.send();

function displayData(data) {
console.log(data);
  var template;
  var i;
  for(i = 0; i < data.length; i++) {
    template +=
    `<br>
    <div class="drinkCatalog">
    <h3>${data[i].strDrink}</h3>
    <img src="${data[i].strDrinkThumb}">
    <h5>${data[i].strIngredient1}
        ${data[i].strIngredient2}
        ${data[i].strIngredient3}
        ${data[i].strIngredient4}
        ${data[i].strIngredient5}
        ${data[i].strIngredient6}
        ${data[i].strIngredient7}
        ${data[i].strIngredient8}
        ${data[i].strIngredient9}
        ${data[i].strIngredient10}
        ${data[i].strIngredient11}
        ${data[i].strIngredient12}
        ${data[i].strIngredient13}
        ${data[i].strIngredient14}
        ${data[i].strIngredient15}
    </h5>
    </div>`;
  }
  document.getElementById("results").innerHTML = template;
}
