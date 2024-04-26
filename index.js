const form = document.getElementById("form");
const movie = document.getElementById("movie");
const movieTitle = document.querySelectorAll(".movie-title");
const searchIcon = document.getElementById("search-icon");



form['form__input'].addEventListener('input', (e) => {
    const inputVal = form['form__input'].value.toLowerCase();
   movieTitle.forEach((item) => {
    if (item.textContent.toLowerCase().includes(inputVal)) {
        item.parentElement.classList.remove("hidden");
        console.log(movieTitle);
    } else {
        item.parentElement.classList.add('hidden')
    }


    searchIcon.classList.add("hidden")
   })
})

console.log(form);