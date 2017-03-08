import React from 'react'
import { connect } from 'react-redux'
import { SpringGrid } from 'react-stonecutter'
import Seasonal from './seasonal'
import MediaQuery from 'react-responsive'

export class Results extends Seasonal {

  constructor(props) {
    super(props)
    this.state = { filename: 'uitslagen', data: [] }
  }

  postProcess(data) {
    return data.map((m) => {
      let date = new Date(m.date)
      return Object.assign(m, { date, date } )
    })
  }

  renderResults(d) {
    return (
      <div>
        <div style={{textAlign: 'center', paddingBottom: '5px'}}>
          <b>{d.date.toLocaleDateString('NL-nl', {day: 'numeric',  month: 'long'})}</b>
        </div>
        <table className='table' style={{width: '100%'}}>
        {
          d.fixtures.map((f) => {
            let weight = f[0] === 'Blijdorp' || f[1] === 'Blijdorp' ? 'bold' : 'normal'
            return (
              <tr style={{fontWeight: weight}}>
                <td>{f[0] + ' - ' + f[1]}</td>
                <td style={{width: 10}}></td>
                <td>{ f.length === 4 ? f[2] + '-' + f[3] : ''}</td>
              </tr>
            )
          })
        }
        </table>
      </div>
    )
  }

  renderDefault() {
    let content = this.state.data.map((d, i) => {
      return (
        <li key={i} className='grid-item'
            style={{backgroundColor: d.latest ? '#99ccff' : '#eee'}}>
          { this.renderResults(d) }
        </li>
      )
    })

    return (
      <SpringGrid
        className='grid'
        component='ul'
        columns={3}
        columnWidth={290}
        gutterWidth={10}
        gutterHeight={10}
        springConfig={{ stiffness: 170, damping: 26 }}>
        {content}
      </SpringGrid>
    )
  }

  renderCompact() {
    let latest = this.state.data.find((r) => r.latest)
    if ( latest ) return this.renderResults(latest)
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
})(Results)

