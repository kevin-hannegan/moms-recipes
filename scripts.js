const init = () => {
    const searchbar = document.getElementById("searchbar");
    const recipes = Array.from(document.querySelectorAll("li"));
    const filterRecipe = async (element, searchText) => {
        if (element.textContent.toLowerCase().includes(searchText)) {
            element.style.display = null;
        } else {
            element.style.display = "none";
        }       
    };
    const search = () => {
        const searchText = document.getElementById("searchbar").value.toLowerCase();
        const promises = recipes.map( (cur) => filterRecipe(cur, searchText));
        Promise.all(promises);
    };
    searchbar.addEventListener("search", search);
};
window.onload = init;