
export function range(from, to, step) {
  if ( !step) step = 1
  let a = Array(Math.ceil((to - from) / step))
  let idx = 0
  do {
    a[idx++] = from
    from = from + step
  } while ( from <= to )
  return a
}

export function frequencies(ms) {
  return ms.reduce((m,n) => {
    let count = m[n]
    if ( count ) m[n] = count+1
    else m[n] = 1
    return m
  }, {})
}

export function series(m, ks) {
  if ( !ks ) ks = Object.keys(m)
  return ks.map((k) => {
    return { x: k, y: m[k] ? m[k] : 0 }
  })
}

