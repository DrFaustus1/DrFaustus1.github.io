const prices = {
    "val1": 9999999999999,
    "val2": 999999999999,
    "val3": 99999999999,
    "val4": 9999999999
}

let setCalculate = (value) => {
    let res = document.getElementById("result")
    res.textContent = `${value}`;
};

let getCalculate = (cost, select) => {
    if (Input(cost))
        return String(prices[select] * Number(cost));
    return "Введите другое значение";
};

let Submit = () => {
    let cost = document.getElementById("cost").value;
    let select = document.getElementById("choice").value;
    let val = getCalculate(cost, select);
    setCalculate(val);
};

let Input = (obj) => {
    const c = /^[0-9]+$/;
    return c.test(obj);
};

document.addEventListener("DOMContentLoaded", (event) =>{
    console.log("DOM");
    let a = document.getElementById("button");
    a.addEventListener("click", Submit);
});