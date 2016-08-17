import 'fetch'

// const baseUrl = "http://localhost:3000"
const baseUrl = "https://mamersfo.github.io"

var get = function(which) {
  let url = `${baseUrl}/blijdorp/data/${which}.json`
  return fetch(url).then(response => response.json())
}

export { get }
