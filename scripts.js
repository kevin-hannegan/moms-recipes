let recipes = [];
let searchbar = null;

const filterRecipe = async (element, searchText) => {
    if (element.textContent.toLowerCase().includes(searchText)) {
        element.style.display = null;
    } else {
        element.style.display = "none";
    }       
};
const search = () => {
        let searchText = document.getElementById("searchbar").value.toLowerCase();
        let promises = recipes.map( (cur) => filterRecipe(cur, searchText));
        Promise.all(promises);
};

const init = () => {
    searchbar = document.getElementById("searchbar");
    recipes = Array.from(document.querySelectorAll("li"));
    searchbar.addEventListener("search", search);
};
window.onload = init;