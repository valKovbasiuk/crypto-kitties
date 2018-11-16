// fetch("https://ma-cats-api.herokuapp.com/api/cats")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.parse(myJson));
//   }).catch(error) {console.log(error)};

var cats = (function getCats() {
  fetch("https://ma-cats-api.herokuapp.com/api/cats")
    .then(resp => resp.json())
    .then(function(data) {
      return data;
    });
})();
console.log(cats);

let catArray = [
  {
    img:
      "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1082340.svg",
    price: 0.1234
  },
  {
    img:
      "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1075399.svg",
    price: 0.2222
  },
  {
    img:
      "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1072111.svg",
    price: 0.3333
  },
  {
    img:
      "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/493457.svg",
    price: 0.4444
  }
];

document.querySelector(".js-add-cat").addEventListener("click", addCat);

let catTemplate = document.importNode(
  document.querySelector("#cat").content,
  true
);
let gridContainer = document.querySelector(".grid__container");

var i = 0;

function addCat() {
  let catFromTemplate = catTemplate.cloneNode(true);

  catFromTemplate.querySelector(".item__image").src = catArray[i].img;
  catFromTemplate.querySelector(".item__price-value").innerHTML =
    catArray[i].price;

  gridContainer.appendChild(catFromTemplate);

  i++;

  if (i === catArray.length) {
    i = 0;
  }
}
