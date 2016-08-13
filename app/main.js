import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'

class Main extends React.Component {
  render() {
    return (
        <div>
        <h2>List</h2>
        <List />
        </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'))
