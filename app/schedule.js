import React from 'react'
import { connect } from 'react-redux'
import Seasonal from './seasonal'

export class Schedule extends Seasonal {

  constructor(props) {
    super(props)
    this.state = { filename: 'programma', data: [] }
  }

  postProcess(data) {
    return data.map((m) => {
      let date = new Date(m.date)
      return Object.assign(m, { date, date } )
    })
  }

  gatheringTime(m) {
    if ( undefined !== m.teams ) {
      const clone = new Date(m.date.getTime())
      if ( "Blijdorp (1)" === m.teams[0] ) {
        clone.setMinutes(m.date.getMinutes() - 45)
      } else {
        clone.setMinutes(m.date.getMinutes() - 75)
      }
      return clone.toLocaleTimeString(
        'NL-nl', { hour: '2-digit', minute: '2-digit' } )
    }
    return ''
  }

  renderTeam(teams, idx) {
    let team = <td></td>

    if ( undefined != teams && idx < teams.length ) {
      if ( "Blijdorp (1)" === teams[idx] ) {
        team = <strong>{teams[idx]}</strong>
      } else {
        team = teams[idx]
      }
    }

    return <td>{team}</td>
  }

  renderMatch(m) {
    return (
      <tr key={m.date}>
        <td>
          {m.date.toLocaleDateString(
            'NL-nl', {day: 'numeric', month: 'long'})}
        </td>
        <td>
        {m.teams ? m.date.toLocaleTimeString(
          'Nl-nl', {hour: '2-digit', minute: '2-digit'}) : 'vrij'}
        </td>
        <td>{this.gatheringTime(m)}</td>
        { this.renderTeam(m.teams, 0) }
        { this.renderTeam(m.teams, 1) }
        <td>{m.absent}</td>
        <td>{m.referee}</td>
      </tr>
    )
  }

  renderHead() {
    return (
      <tr>
        <th style={{width: '15%'}}>Datum</th>
        <th style={{width: '10%'}}>Aftrap</th>
        <th style={{width: '10%'}}>Verzamelen</th>
        <th style={{width: '20%'}}>Thuisploeg</th>
        <th style={{width: '20%'}}>Bezoekers</th>
        <th>Afmeldingen</th>
        <th>Scheidsrechter</th>
      </tr>
    )
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>programma</h2>
        <table className='table table-hover'>
          <thead>
          {this.renderHead()}
          </thead>
          <tbody>
          { this.state.data.map((m) => this.renderMatch(m)) }
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
