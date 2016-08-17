import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona'
import { get } from './api'

export default class Matches extends React.Component {

  constructor(props) {
    super(props)
    this.state = { matches: [] }
  }

  componentDidMount() {
    get('matches').then((data) => {
      this.setState({ matches: data })
    })
  }

  renderMap(m) {
    return m ? Object.keys(m).map((k) => k + ' (' + m[k] + ') ') : 'none'
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
        <tr><td style={{width: '100px'}} >Date:</td><td>{m.date}</td></tr>
        <tr><td>Result:</td><td>{m.result[0] + ' - ' + m.result[1]}</td></tr>
        <tr><td>Goals:</td><td>{this.renderMap(m.goals)}</td></tr>
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
      <div className='container'>
        <h2>matches</h2>
        <Accordion>
        { this.renderItems() }
        </Accordion>
      </div>
    )
  }
}
