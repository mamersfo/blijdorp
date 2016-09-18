import React from 'react'
import { connect } from 'react-redux'
import Seasonal from './seasonal'
import { LocalDate, LocalTime } from './datetime'
import MediaQuery from 'react-responsive'

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
      if ( "Blijdorp" === m.teams[0] ) {
        clone.setMinutes(m.date.getMinutes() - 45)
      } else {
        
        clone.setMinutes(m.date.getMinutes() - 75)
      }
      return <LocalTime date={clone} />
    }
    return ''
  }

  renderTeam(m, idx) {
    if ( m && m.teams && idx < m.teams.length ) {
      let team = m.teams[idx]
      if ( "Blijdorp" === team ) {
        return <td><strong>{team}</strong></td>
      } else {
        return (
          <td>
            <a href={m.website} data-toggle='tooltip' title={m.location} target='_blank'>
              {team}
            </a>
          </td>
        )
      }
    } else {
      return <td></td>
    }
  }

  renderDefault() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr key={0}>
            <th style={{width: '15%'}}>Datum</th>
            <th style={{width: '10%'}}>Aftrap</th>
            <th style={{width: '10%'}}>Verzamelen</th>
            <th style={{width: '20%'}}>Thuisploeg</th>
            <th style={{width: '20%'}}>Bezoekers</th>
            <th>Afmeldingen</th>
            <th>Scheidsrechter</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.data.map((m) => {
            return (
              <tr key={m.matchday}>
                <td><LocalDate date={m.date} month='long'/></td>
                <td><LocalTime date={m.date} /></td>
                <td>{this.gatheringTime(m)}</td>
                { this.renderTeam(m, 0) }
                { this.renderTeam(m, 1) }
                <td>{m.absent}</td>
                <td>{m.referee}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )      
  }
  
  renderCompact() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr key={0}>
            <th style={{width: '20%'}}>Datum</th>
            <th style={{width: '20%'}}>Aftrap</th>
            <th style={{width: '30%'}}>Thuisploeg</th>
            <th style={{width: '30%'}}>Bezoekers</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.data.map((m) => {
            return (
              <tr key={m.matchday}>
                <td><LocalDate date={m.date} month='numeric' /></td>
                <td><LocalTime date={m.date} /></td>
                { this.renderTeam(m, 0) }
                { this.renderTeam(m, 1) }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )      
  }

  render() {
    return (
      <div className='row-fluid'>
        <div className='col-xs-12 col-md-12'>
          <MediaQuery query='(min-device-width: 768px)'>
            { this.renderDefault() }
          </MediaQuery>
          <MediaQuery query='(max-device-width: 667px)'>
            { this.renderCompact() }
          </MediaQuery>
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    season: state.season
  }
})(Schedule)
