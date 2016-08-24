import React from 'react'
import { connect } from 'react-redux'
import { get } from './api'

export class Schedule extends React.Component {

  constructor(props) {
    super(props)
    this.state = { matches: [] }
  }

  fetchData() {
    get(this.props.season + '/programma').then((data) => {
      this.setState({ matches: data })
    })
  }

  componentDidMount() {
    this.fetchData(this.props.season)
  }

  componentWillReceiveProps(next) {
    if ( this.props.season !== next.season ) {
      this.fetchData(next.season)
    }
  }

  renderMatch(m) {
    return (
      <tr key={m.date}>
        <td>{m.date}</td>
        <td>{m.time}</td>
        <td>{m.teams[0]}</td>
        <td>{m.teams[1]}</td>
        <td>{m.referee}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>programma</h2>
        <table className='table table-hover table-condensed'>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Tijdstip</th>
              <th>Thuisploeg</th>
              <th>Bezoekers</th>
              <th>Scheidsrechter</th>
            </tr>
          </thead>
          <tbody>
          { this.state.matches.map((m) => this.renderMatch(m)) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(state => {
  return {
    season: state.season
  }
})(Schedule)
