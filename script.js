const inf = document.querySelector("form")
const resp = document.querySelector("h3")

inf.addEventListener("submit", (e) => {
    const peso = Number(inf.peso.value)
    const altura = Number(inf.altura.value)

    const imc = peso / (altura * altura)

    resp.innerText = `o seu IMC é ${imc.toFixed(2)}`

    e.preventDefault()
})