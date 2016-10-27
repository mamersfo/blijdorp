import 'fetch'

// const baseUrl = "http://localhost:3000"
const baseUrl = "https://mamersfo.github.io"

var get = function(which) {
  let url = `${baseUrl}/blijdorp/data/${which}.json`
  return fetch(url).then(response => response.json())
}

var query = function(q) {
  let body = JSON.stringify({query: q})
  console.log('body', body)
  return fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body,
    mode: 'cors'
  }).then(response => response.json())
}

export { get, query }
