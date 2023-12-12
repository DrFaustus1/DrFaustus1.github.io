const food_prices = {
    "Булгур": 30,
    "Рис": 35,
    "Морковь": 23,
};

const rice_prices = {
    "Бурый": 25,
    "Обычный": 0
};

function updatePrice() {
    let VALUE = 0;
    let radios = document.getElementsByName("r");
    let radio_val = "Булгур";

    radios.forEach((radio) => {
        if(radio.checked) {
            radio_val = radio.value;
            let radio_price = food_prices[radio.value];

            if (radio_price !== undefined) {
                VALUE += radio_price;
            }
        }
    });

    let sel = document.getElementById("add");
    sel.style.display = (radio_val == "Рис") ? "block" : "none";
    let selection = document.getElementById("additional");

    VALUE += rice_prices[selection.value];

    let check = document.getElementById("check");
    check.style.display = (radio_val == "Морковь" ? "block" : "none");

    document.getElementById("checkbox").checked ? VALUE += 25 : null; 

    let input = document.getElementById("summa-usl");
    (input.value !== undefined) ?
        /^[0-9]+$/.test(input.value) ? VALUE *= Number(input.value) : null : null;

    document.getElementById("result-usl").innerHTML = `${VALUE} Рублей`;
}

function reset() {
    document.getElementById("additional").value = "Обычный";
    document.getElementById("checkbox").checked = false;
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    reset();
    let radios = document.getElementsByName("r");

    let additionals = document.getElementById("add");
    let additional_select = document.getElementById("additional");
    let check = document.getElementById("check");
    let input = document.getElementById("summa-usl");

    additional_select.value="Обычный";

    additionals.style.display = "none";
    check.style.display = "none";

    input.addEventListener("input", () => {
        updatePrice();
    })

    additional_select.addEventListener("change", (event) => {
        updatePrice();
    });

    radios.forEach((radio) => {
        radio.checked = false;
        radio.addEventListener("change", (event) => {
            reset();
            updatePrice();
        })
    });

    document.getElementById("checkbox").addEventListener("change", (event) => {
        updatePrice();
    });
});