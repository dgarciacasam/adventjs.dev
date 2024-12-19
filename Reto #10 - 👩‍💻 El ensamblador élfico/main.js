function compile(instructions) {
  let hashMap = new Map()

  for (let i = 0; i < instructions.length; i++) {
    let [fun, firstParameter, secondParameter] = instructions[i].split(' ')

    if (fun === 'MOV') {
      if (Number.isInteger(Number(firstParameter))) {
        hashMap.set(secondParameter, Number(firstParameter))
      } else {
        hashMap.set(secondParameter, hashMap.get(firstParameter) || 0)
      }
    }

    if (fun === 'JMP') {
      if ((hashMap.get(firstParameter) || 0) === 0) {
        i = Number(secondParameter) - 1
      }
    }

    if (fun === 'INC') {
      hashMap.set(firstParameter, (hashMap.get(firstParameter) || 0) + 1)
    }

    if (fun === 'DEC') {
      hashMap.set(firstParameter, (hashMap.get(firstParameter) || 0) - 1)
    }
  }
  return hashMap.has('A') ? hashMap.get('A') : undefined
}
