import React from 'react'
import { connect } from 'react-redux'
import Seasonal from './seasonal'
import { get } from './api'

export class Table extends Seasonal {

  constructor(props) {
    super(props)
    this.state = { filename: 'stand', data: [] }
  }

  transform(t) {
    t.matches['total'] = Object.values(t.matches).reduce((a,b) => a+b, 0)
    t['points'] = t.matches.wins * 3 + t.matches.draws
    t.goals['diff'] = t.goals.for - t.goals.against
    return t
  }

  compare(a, b) {
    let diff = a.points - b.points
    if ( diff === 0 ) {
      diff = b.matches.total - a.matches.total
      if ( diff === 0 ) {
        diff = a.goals.diff - b.goals.diff
        if ( diff === 0 ) {
          diff = a.team - b.team
        }
      }
    }

    return diff > 0 ? -1 : 1
  }

  fetchData(season, filename) {
    get(season + '/' + filename).then((data) => {
      this.setState({data: data.map(this.transform).sort(this.compare)})
    })
  }

  renderTeam(t, idx) {
    return (
      <tr key={idx} className={t.team === 'Blijdorp' ? 'active' : ''}>
        <td style={{textAlign: 'right'}}>{idx + 1 + '.'}</td>
        <td>{t.team === 'Blijdorp' ? <b>{t.team}</b> : t.team}</td>
        <td style={{textAlign: 'right'}}>{t.matches.total}</td>
        <td style={{textAlign: 'right'}}>{t.matches.wins}</td>
        <td style={{textAlign: 'right'}}>{t.matches.draws}</td>
        <td style={{textAlign: 'right'}}>{t.matches.losses}</td>
        <td style={{textAlign: 'right'}}>{t.points}</td>
        <td style={{textAlign: 'right'}}>{t.goals.for}</td>
        <td style={{textAlign: 'right'}}>{t.goals.against}</td>
        <td style={{textAlign: 'right'}}>{t.goals.diff > 0 ? '+' + t.goals.diff : t.goals.diff}</td>
      </tr>
    )
  }

  renderHead() {
    let cols = ['G', 'W', 'GL', 'V', 'P', 'DPV', 'DPT', 'DS']
    let headers = cols.map((c) => {
      return (
        <th style={{width: '10%', textAlign: 'right'}}>{c}</th>
      )
    })

    return (
      <tr>
        <th style={{width: '10px'}}>#</th>
        <th></th>
        {headers}
      </tr>
    )
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>stand</h2>
        <table className='table' style={{margin: '0px'}}>
          <thead>
            { this.renderHead() }
          </thead>
          <tbody>
            { this.state.data.map((t, idx) => this.renderTeam(t, idx)) }
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
})(Table)
