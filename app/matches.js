import React from 'react'
import { connect } from 'react-redux'
import { Accordion, AccordionItem } from 'react-sanfona'
import { get } from './api'

export class Matches extends React.Component {

  constructor(props) {
    super(props)
    this.state = { matches: [] }
  }

  fetchData(season) {
    get(season + '/matches').then((data) => {
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
  
  renderMap(m) {
    return m ? Object.keys(m).map((k) => k + ' (' + m[k] + ') ') : 'geen'
  }

  renderReport(m) {
    if ( m && m.report ) {
      return (
        <div>
          <div style={{color: '#ababab'}}>
            { m.report.content ? m.report.content.map((p) => <p>{p}</p> ) : null }
          </div>
          <div>(verslag: { m.report.author })</div>
        </div>
      )
    }

    return null
  }

  renderTable(m) {
    return (
      <table className='table'>
        <tr><td style={{width: '100px'}} >Datum:</td><td>{m.date}</td></tr>
        <tr><td>Competitie:</td><td>{m.league}</td></tr>
        <tr><td>Uitslag:</td><td>{m.result[0] + ' - ' + m.result[1]}</td></tr>
        <tr><td>Doelpunten:</td><td>{this.renderMap(m.goals)}</td></tr>
        <tr><td>Assists:</td><td>{this.renderMap(m.assists)}</td></tr>
      </table>
    )
  }

  renderItems() {
    return this.state.matches.map((m) => {
      let title = m.teams[0] + ' - ' + m.teams[1]
      return (
        <AccordionItem title={title} slug={m.date} key={m.date}>
          <div>
            { this.renderTable(m) }
            { this.renderReport(m) }
          </div>
        </AccordionItem>  
      )
    })
  }
  
  render() {
    return (
      <div className='container-fluid'>
        <h2>wedstrijden</h2>
        <div className='row'>
        <div className='col-md-10'>
        <Accordion>
        { this.renderItems() }
        </Accordion>
        </div>
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    season: state.season
  }
})(Matches)
