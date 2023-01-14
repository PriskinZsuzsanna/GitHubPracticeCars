const btn = document.getElementById("btn");
const result = document.querySelector(".result")

btn.addEventListener("click", async () => {
    const res = await fetch("cars.json");
    const data = await res.json();

    console.log(data);

    let output = "";

    data.map(car => {
        output += `
            <div class="car">
                <h2>${car.Márka}</h2>
                <h3>${car.Típus}</h3>
                <h4>${car.Évjárat}</h4>
            </div>
        `
    })

    result.innerHTML = output
})