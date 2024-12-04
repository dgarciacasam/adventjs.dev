function createXmasTree(height, ornament) {
  let result = ''

  //Pintamos las hojas del árbol
  for (let i = 0; i < height; i++) {
    for (let x = height - 1; x > i; x--) {
      result += '_'
    }
    for (let x = 0; x <= 2 * i; x++) {
      result += ornament
    }
    for (let x = height - 1; x > i; x--) {
      result += '_'
    }

    result += '\n'
  }

  //Pintamos la base del árbol
  result += `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}\n${'_'.repeat(
    height - 1
  )}#${'_'.repeat(height - 1)}`
  return result
}

//Solución más óptima
function createXmasTree(height, ornament) {
  let result = ''

  // Pintamos las hojas del árbol
  for (let i = 0; i < height; i++) {
    const spaces = '_'.repeat(height - 1 - i) // Espacios a los lados
    const ornaments = ornament.repeat(2 * i + 1) // Ornamentos centrales
    result += `${spaces}${ornaments}${spaces}\n` // Línea completa
  }

  // Pintamos la base del árbol
  const base = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}\n`.repeat(2)
  result += base.trim() // Eliminamos el salto de línea final

  return result
}
