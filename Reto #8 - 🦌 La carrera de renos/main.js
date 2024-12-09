function drawRace(indices, length) {
  let resultado = ''
  let carril = ''
  let auxiliar

  for (let i = 0; i < indices.length; i++) {
    carril = '~'.repeat(length)

    if (indices[i] > 0) {
      auxiliar = carril.split('')
      auxiliar[indices[i]] = 'r'
      carril = auxiliar.join('')
    }
    if (indices[i] < 0) {
      auxiliar = carril.split('')
      auxiliar[length + indices[i]] = 'r'
      carril = auxiliar.join('')
    }

    resultado += ' '.repeat(indices.length - i - 1) + carril + ' /' + (i + 1)
    if (i < indices.length - 1) {
      resultado += '\n'
    }
  }

  return resultado
}
