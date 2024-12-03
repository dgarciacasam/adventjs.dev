function createFrame(names) {
  const longestName = names.reduce((a, b) => (a.length <= b.length ? b : a))

  let resultado = `**${'*'.repeat(longestName.length)}**\n`
  for (const name of names) {
    resultado = resultado.concat(
      `* ${name} ${' '.repeat(longestName.length - name.length)}*\n`
    )
  }
  return resultado.concat(`**${'*'.repeat(longestName.length)}**`)
}
