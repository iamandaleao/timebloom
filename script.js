function verificar() {
  const dataAtual = new Date()
  const anoAtual = dataAtual.getFullYear()
  const inputAno = document.getElementById("txtano")
  const res = document.getElementById("res")

  if (inputAno.value.length == 0 || Number(inputAno.value) > anoAtual) {
    alert("[ERRO] Verifique o ano e tente novamente.")
    return
  }

  const idade = anoAtual - Number(inputAno.value)
  const tipoIdade = document.getElementById("idade").checked
  const img = document.createElement("img")
  img.setAttribute("id", "foto")

  let estacao = ""

  if (idade >= 0 && idade <= 12) {
    estacao = "Primavera (Infância)"
    img.setAttribute("src", "primavera.png")
  } else if (idade <= 25) {
    estacao = "Verão (Juventude)"
    img.setAttribute("src", "verao.png")
  } else if (idade <= 59) {
    estacao = "Outono (Adulto)"
    img.setAttribute("src", "outono.png")
  } else {
    estacao = "Inverno (Idoso)"
    img.setAttribute("src", "inverno.png")
  }

  res.innerHTML = ""

  if (tipoIdade) {
    res.innerHTML = `Você tem ${idade} anos.`
  } else {
    res.innerHTML = `Você está na estação da vida: <strong>${estacao}</strong>.`
  }

  res.appendChild(img)
}
