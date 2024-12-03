function organizeInventory(inventory) {
  const result = {}
  for (const object of inventory) {
    const category = object.category

    result[category] = {}

    if (!result[category][object.name]) {
      result[category][object.name] = object.quantity
    } else {
      result[category][object.name] += object.quantity
    }
  }

  return result
}
