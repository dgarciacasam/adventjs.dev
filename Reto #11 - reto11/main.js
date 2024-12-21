function decodeFilename(filename) {
  const regex = /^[0-9]+_([a-zA-Z0-9_.-]+\.[a-zA-Z0-9]+)\./
  return filename.match(regex)[1]
}
