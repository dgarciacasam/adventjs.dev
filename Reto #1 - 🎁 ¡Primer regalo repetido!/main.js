function prepareGifts(gifts) {
  gifts.sort((a, b) => a - b)
  return [...new Set(gifts)]
}
