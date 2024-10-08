const botoes = document.querySelectorAll(".selecionado")
const containers = document.querySelectorAll(".container")
const setas = document.querySelectorAll(".span")
let botaoAtivo = null

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    if (botao === botaoAtivo) {
      containers[index].classList.remove("ativo")
      setas[index].classList.remove("girar")
      botaoAtivo = null
    } else {
      if (botaoAtivo) {
        const containerAnterior = containers[botaoAtivo.dataset.index]
        const setaAnterior = setas[botaoAtivo.dataset.index]
        containerAnterior.classList.remove("ativo")
        setaAnterior.classList.remove("girar")
      }

      botaoAtivo = botao
      botao.dataset.index = index
      containers[index].classList.toggle("ativo")
      setas[index].classList.toggle("girar")
    }
  })
})
