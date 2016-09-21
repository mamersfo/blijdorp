
export function range(from, to) {
  let a = Array(to - from)
  let idx = 0
  do { a[idx++] = from++ } while ( from <= to )
  return a
}
