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

function chunkArray2(arr) {
  const chunks = []
  let index = 0
  while (index < arr.length) {
    chunks.push(arr.slice(index, index + 2))
    index += 2
  }
  return chunks
}

export { chunkArray, chunkArray2 }
