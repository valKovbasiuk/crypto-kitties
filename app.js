var pageNum = 1;

let catTemplate = document.importNode(
  document.querySelector("#cat").content,
  true
);

let gridContainer = document.querySelector(".grid__container");

document.querySelector(".js-add-cat").addEventListener("click", loadMoreCats);

function addCat(element) {
  let catFromTemplate = catTemplate.cloneNode(true);

  catFromTemplate.querySelector(".item__image").src = element.img_url;
  catFromTemplate.querySelector(".item__price-value").innerHTML = element.price;

  gridContainer.appendChild(catFromTemplate);
}

function loadCats(page = 1, per_page = 50) {
  fetch(
    `https://ma-cats-api.herokuapp.com/api/cats?page=${page}&per_page=${per_page}`
  )
    .then(response => response.json())
    .then(data => data.cats)
    .then(catArray =>
      catArray.forEach(cat => {
        addCat(cat);
      })
    );
}

function loadMoreCats(page, per_page) {
  console.log(pageNum);
  pageNum++;
  console.log(pageNum);
  loadCats(pageNum, per_page);
}

(function() {
  loadCats();
})();
