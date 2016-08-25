import React from 'react'
import { connect } from 'react-redux'
import Seasonal from './seasonal'

export class Schedule extends Seasonal {

  constructor(props) {
    super(props)
    this.state = { filename: 'programma', data: [] }
  }

  renderTeam(teams, idx) {
    let team = <td></td>

    if ( undefined != teams && idx < teams.length ) {
      if ( "Blijdorp JO11-1" === teams[idx] ) {
        team = <td><strong>{teams[idx]}</strong></td>
      } else {
        team = <td>{teams[idx]}</td>
      }
    }

    return team
  }

  renderMatch(m) {
    return (
      <tr key={m.date}>
        <td style={{width: '100px'}}>{m.date}</td>
        <td style={{textAlign: 'right', width: '100px'}}>{m.time}</td>
        <td style={{textAlign: 'right', width: '100px'}}>{m.gather}</td>
        { this.renderTeam(m.teams, 0) }
        { this.renderTeam(m.teams, 1) }
        <td>{m.referee}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>programma</h2>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Tijdstip</th>
              <th>Verzamelen</th>
              <th>Thuisploeg</th>
              <th>Bezoekers</th>
              <th>Scheidsrechter</th>
            </tr>
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
