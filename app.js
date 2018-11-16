document.querySelector(".js-add-cat").addEventListener("click", addCat);

let catTemplate = document.importNode(
  document.querySelector("#cat").content,
  true
);
let gridContainer = document.querySelector(".grid__container");

function addCat(element) {
  let catFromTemplate = catTemplate.cloneNode(true);

  catFromTemplate.querySelector(".item__image").src = element.img_url;
  catFromTemplate.querySelector(".item__price-value").innerHTML = element.price;

  gridContainer.appendChild(catFromTemplate);
}

fetch("https://ma-cats-api.herokuapp.com/api/cats")
  .then(response => response.json())
  .then(data => data.cats)
  .then(catArray =>
    catArray.forEach(cat => {
      console.log(cat);
      addCat(cat);
    })
  );
