const showButton = document.getElementById("buton1");
const number = document.getElementById("nbr");

function get_random_int() {
    let nbr = Math.floor(Math.random() * (101))
    return nbr
}

showButton.addEventListener("click", () => {
    number.innerText = get_random_int()
})

number.innerText = get_random_int()