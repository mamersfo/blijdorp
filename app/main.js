import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'

class Main extends React.Component {
  render() {
    return <List which='players'/>
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'))
