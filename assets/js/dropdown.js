function showDropdown() {
  let button = document.getElementById("dropdown-content");
  button.style.display = "flex";
  button.style.flexDirection = "column"
}

function hideDropdown() {
  let button = document.getElementById("dropdown-content");
  button.style.display = "none";
}

let games = [
  {
    name: "Sprout Lands",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
  },
  {
    name: "Fapply Plane",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
  },
];

inputSearch = document.getElementById("searchText");
inputSearch.addEventListener("change", (event) => {
  searchText = inputSearch.value;
  games.forEach((item) => {
    let name = item.name;
    if (name.includes(searchText)) {
    }
  });
});

document.querySelectorAll('.item').forEach((item) => {
  item.addEventListener('click', event => {
    let link = item.getAttribute('link')
    window.location.href = link
  })
})
