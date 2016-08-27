import React from 'react'
import { connect } from 'react-redux'
import Seasonal from './seasonal'

export class Results extends Seasonal {

  constructor(props) {
    super(props)
    this.state = { filename: 'uitslagen', data: [] }
  }

  renderResults() {
    return this.state.data.map((d) => {
      return (
        <div>
        <b>{d.date}</b>
        <table className='table' style={{width: '300px'}}>
          {
            d.fixtures.map((f) => {
              return (
              <tr>
                <td>{f[0] + ' - ' + f[1]}</td>
                <td>{ f.length === 4 ? f[2] + '-' + f[3] : ''}</td>
              </tr>
              )
            }
          )
          }
        </table>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>uitslagen</h2>
        { this.renderResults() }
      </div>
    )
  }
}

export default connect(state => {
  return {
    season: state.season
  }
})(Results)

