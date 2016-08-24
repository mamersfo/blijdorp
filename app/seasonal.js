import React from 'react'
import { get } from './api'

export default class Seasonal extends React.Component {

  fetchData(which) {
    get(this.props.season + '/' + this.state.filename).then((data) => {
      this.setState({ data: data })
    })
  }

  componentDidMount() {
    this.fetchData(this.state.filename)
  }

  componentWillReceiveProps(next) {
    if ( this.props.season !== next.season ) {
      this.fetchData(this.state.filename)
    }
  }
}
