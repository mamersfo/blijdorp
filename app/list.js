import React from 'react'
import { get } from './api'

export default class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    get(this.props.which).then((data) => {
      this.setState({ data })
    })
  }                           
  
  render() {
    var items = this.state.data.map((item) => <li key={item.id}>{item.name}</li>)
    return (
      <div className='container'>
        <h2>{this.props.which}</h2>
        <ul>{items}</ul>
      </div>
    )
  }
}
