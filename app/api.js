import 'fetch'

var get = function(which) {
  let url = `https://mamersfo.github.io/blijdorp/data/${which}.json`
  return fetch(url).then(response => response.json())
}

export { get }
