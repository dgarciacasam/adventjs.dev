function organizeShoes(shoes) {
  const shoeCounts = {}
  const pairedShoes = []

  for (let shoe of shoes) {
    const key = `${shoe.size}-${shoe.type}`
    shoeCounts[key] = (shoeCounts[key] || 0) + 1

    const pairKey = `${shoe.size}-${shoe.type === 'I' ? 'R' : 'I'}`
    if (shoeCounts[pairKey]) {
      pairedShoes.push(shoe.size)
      shoeCounts[key]--
      shoeCounts[pairKey]--
    }
  }

  return pairedShoes
}
