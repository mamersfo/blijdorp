import React from 'react'
import { get } from './api'

export default class Seasonal extends React.Component {

  fetchData(season, filename) {
    let url = season + '/' + filename
    get(url).then((data) => {
      this.setState({ data: data })
    })
  }

  componentDidMount() {
    this.fetchData(this.props.season, this.state.filename)
  }

  componentWillReceiveProps(next) {
    if ( this.props.season !== next.season ) {
      this.fetchData(next.season, this.state.filename)
    }
  }
}
