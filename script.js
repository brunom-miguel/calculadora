function insere(valor) {
  let resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado + valor
}

function back() {
  let resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

function erase() {
  document.getElementById('resultado').innerHTML = ''
}

function calcular() {
  let resultado = document.getElementById('resultado').innerHTML
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
  } else {
    document.getElementById('resultado').innerHTML = 'Error...'
  }
}
