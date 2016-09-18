import React from 'react'

export default class Update extends React.Component {

  constructor(props) {
    super(props)
    this.state = { updated: 'undefined', message: 'undefined' }
  }
  
  componentDidMount() {
    let baseUrl = 'https://api.github.com'
    let url = `${baseUrl}/repos/mamersfo/blijdorp/commits?path=data`

    this.serverRequest = $.get(url, (result) => {
      let commit = result[0].commit
      this.setState({
        updated: new Date(commit.author.date),
        message: commit.message
      })
    }.bind(this))
  }

  componentWillUnmount() {
    this.serverRequest.abort()
  }

  render() {
    return (
      <div
        style={{fontSize: 'x-small', marginTop: '50px'}}>
        Laatste update {this.state.updated.toLocaleString('NL-nl')}: {this.state.message}
      </div>
    )
  }
}
