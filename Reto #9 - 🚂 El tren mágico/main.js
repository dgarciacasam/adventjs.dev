function moveTrain(board, mov) {
  const tablero = []
  const posicionLocomotora = []
  let indice
  for (const [index, lane] of board.entries()) {
    tablero.push(lane.split(''))
    indice = lane.indexOf('@')
    if (indice !== -1) {
      posicionLocomotora.push(index, indice)
    }
  }

  if (mov === 'U') posicionLocomotora[0]--
  if (mov === 'D') posicionLocomotora[0]++
  if (mov === 'L') posicionLocomotora[1]--
  if (mov === 'R') posicionLocomotora[1]++

  if (
    posicionLocomotora[0] < 0 ||
    posicionLocomotora[0] >= tablero.length ||
    posicionLocomotora[1] < 0 ||
    posicionLocomotora[1] >= tablero[0].length
  ) {
    return 'crash'
  }

  const movimiento = tablero[posicionLocomotora[0]][posicionLocomotora[1]]
  if (movimiento === 'o') return 'crash'
  if (movimiento === '*') return 'eat'
  return 'none'
}
