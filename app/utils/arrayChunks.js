function chunkArray(arr) {
  const chunks = []
  let index = 0
  while (index < arr.length) {
    const chunkSize = index % 7 < 4 ? 4 : 3
    chunks.push(arr.slice(index, index + chunkSize))
    index += chunkSize
  }
  return chunks
}

export { chunkArray }
