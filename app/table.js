import React from 'react'
import { connect } from 'react-redux'
import Seasonal from './seasonal'
import { get } from './api'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'

export class Table extends Seasonal {

  constructor(props) {
    super(props)
    this.state = { filename: 'stand', data: [] }
  }

  renderHead(cols) {
    let headers = cols.map((c) => {
      return (
        <th style={{width: '8%', textAlign: 'right'}}>{c}</th>
      )
    })

    return (
      <tr>
        <th style={{width: '10px'}}>#</th>
        <th></th>
        {headers}
        <th></th>
      </tr>
    )
  }

  renderCompact() {
    return (
      <table className='table' style={{margin: '0px'}}>
        <thead>
        { this.renderHead(['G', 'P']) }
        </thead>
        <tbody>
        {
          this.state.data.map((t, idx) => {
            return (
              <tr key={idx} className={t.team === 'Blijdorp' ? 'active' : ''}>
                <td style={{textAlign: 'right'}}>{idx + 1 + '.'}</td>
                <td>{t.team === 'Blijdorp' ? <b>{t.team}</b> : t.team}</td>
                <td style={{textAlign: 'right'}}>{t.total}</td>
                <td style={{textAlign: 'right'}}>{t.points}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }

  renderForm(form) {
    let parts = form.reverse().map((f,i) => {
      return (
        <span className={'box '+f.result}>
          <a href='#' data-toggle='tooltip' title={f.text}>
          {f.result.substring(0,1)}
          </a>
        </span>
      )
    })
    return <div>{parts}</div>
  }

  renderCompetitions() {
    return (
      <div style={{marginBottom: '20px'}}> 
        {
          this.state.data.map((o, idx) => {
            return (
              <span>
                { idx > 0 ? ' | ' : '' }
                <Link to={`/blijdorp/stand/${idx}`}
                      activeClassName='active'>{o.competition}</Link>
              </span>
            )
          })
      }
      </div>
    )
  }

  renderDefault() {
    if ( this.state.data.length > 0 ) {
      let idx = this.props.params.competition
      if ( idx === undefined ) idx = 0
      return (
        <div>
          {this.renderCompetitions()}
          <table className='table' style={{margin: '0px'}}>
            <thead>
              {
                this.renderHead(['G', 'W', 'GL', 'V', 'P', 'DPV', 'DPT', 'DS'])
              }
            </thead>
            <tbody>
              {
                this.state.data[idx] && this.state.data[idx].teams.map((t, idx) => {
                  let diff = t.diff > 0 ? '+' + t.diff : t.diff
                  return (
                    <tr key={idx} className={t.team === 'Blijdorp' ? 'active' : ''}>
                      <td style={{textAlign: 'right'}}>{idx + 1 + '.'}</td>
                      <td>{t.team === 'Blijdorp' ? <b>{t.team}</b> : t.team}</td>
                      <td style={{textAlign: 'right'}}>{t.total}</td>
                      <td style={{textAlign: 'right'}}>{t.matches.wins}</td>
                      <td style={{textAlign: 'right'}}>{t.matches.draws}</td>
                      <td style={{textAlign: 'right'}}>{t.matches.losses}</td>
                      <td style={{textAlign: 'right'}}><b>{t.points}</b></td>
                      <td style={{textAlign: 'right'}}>{t.goals.for}</td>
                      <td style={{textAlign: 'right'}}>{t.goals.against}</td>
                      <td style={{textAlign: 'right'}}>{diff}</td>
                      <td>{this.renderForm(t.form)}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      )
    }

    return null
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
})(Table)
