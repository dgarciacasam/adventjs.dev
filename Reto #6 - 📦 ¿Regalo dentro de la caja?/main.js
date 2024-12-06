function inBox(box) {
  const filas = box[0].length

  const index = box
    .map((str) => str.split(''))
    .flat()
    .indexOf('*')

  if (index === -1) {
    return false
  }

  const posicionRegalo = [Math.floor(index / filas), index % filas]
  const [fila, columna] = posicionRegalo

  if (
    box[0][columna] !== '#' ||
    box[box.length - 1][columna] !== '#' ||
    box[fila][0] !== '#' ||
    box[fila][filas - 1] !== '#'
  )
    return false

  return true
}
