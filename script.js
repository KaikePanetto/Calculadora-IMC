function calcular(){
    const peso = document.getElementById("peso").value.trim()
    const altura = document.getElementById("altura").value.trim()
    const resultado = document.getElementById("resultado")

    resultado.className = ""

    if (!peso || !altura) {
        resultado.innerHTML = "Por favor, preencha peso e altura antes de calcular."
        resultado.classList.add("aviso")
        return
    }

    const IMC = peso / altura**2
    if (IMC < 18.5) {
        resultado.innerHTML = "Abaixo do peso"
    } else if (IMC < 25) {
        resultado.innerHTML = "Peso normal"
    } else if (IMC < 30) {
        resultado.innerHTML = "Acima do peso"
    } else {
        resultado.innerHTML = "Obeso"
    }
}