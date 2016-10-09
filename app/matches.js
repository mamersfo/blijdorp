import React from 'react'
import { connect } from 'react-redux'
import { Accordion, AccordionItem } from 'react-sanfona'
import Seasonal from './seasonal'
import { get } from './api'
import MediaQuery from 'react-responsive'

export class Matches extends Seasonal {

  constructor(props) {
    super(props)
    this.state = { filename: 'matches', data: [] }
    this.handleChange = this.handleChange.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.renderVideo = this.renderVideo.bind(this)
  }

  renderMap(m) {
    return m ? Object.keys(m).map((k) => k + ' (' + m[k] + ') ') : 'geen'
  }

  renderVideo(id) {
    const src = 'https://www.youtube.com/embed/' + id

    return (
      <div>
        <MediaQuery query='(min-device-width: 768px)'>
          <iframe width={420} height={235} src={src}></iframe>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 667px)'>
          <iframe width={275} height={154} src={src}></iframe>
        </MediaQuery>      
      </div>
    )
  }

  renderContent(m, idx) {
    let content = ''
    
    switch( m.type ) {
      case 'text':
        content = m.text
        break
      case 'youtube':
        content = this.renderVideo(m.videoId)
        break
      case 'image':
        content = m.download ? <a href={m.download} target='_blank'><img src={m.src}></img></a> : <img src={m.src}></img>
        break
      default:
        break
    }

    return <p key={m.date + '-' + idx}>{content}</p>
  }

  renderReport(m) {
    if ( m && m.report ) {
      return (
        <div>
          <div style={{color: '#333'}}>
            { m.report.content ? m.report.content.map(this.renderContent) : null }
          </div>
          { m.report.author && ( <div>Verslag: { m.report.author }</div> ) }
        </div>
      )
    }

    return null
  }

  renderTable(m) {
    return (
      <table className='table'>
        <tbody>
        <tr><td style={{width: '100px'}} >Datum:</td><td>{m.date}</td></tr>
        <tr><td>Competitie:</td><td>{m.league}</td></tr>
        <tr><td>Uitslag:</td><td>{m.result[0] + ' - ' + m.result[1]}</td></tr>
        <tr><td>Aanvoerder:</td><td>{m.captain}</td></tr>
        <tr><td>Doelpunten:</td><td>{this.renderMap(m.goals)}</td></tr>
        <tr><td>Assists:</td><td>{this.renderMap(m.assists)}</td></tr>
        </tbody>
      </table>
    )
  }

  postProcess(data) {
    return data.reduce((a,b) => { a[b.date] = b; return a }, {})
  }

  handleChange(a) {
    let key = a.activeItems[0]
    if ( key ) {
      let { data } = this.state
      let match = data[key]
      if ( undefined === match.report ) {
        get( 'reports/' + key ).then( json => {
          match.report = json
          data[key] = match
          this.setState({data: data})
        })
      }
    }
  }

  renderItems() {
    let { data } = this.state
    return Object.keys(data).map((k) => {
      let m = data[k]
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
      <div className='row-fluid'>
        <div className='col-xs-12 col-md-12'>
          <Accordion style={{margin: '0px'}} onChange={this.handleChange}>
          { this.renderItems() }
          </Accordion>
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
