import React from 'react'
import { connect } from 'react-redux'
import { get } from './api'
import { TreeMap } from './charts'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Carousel from 'nuka-carousel'
import MediaQuery from 'react-responsive'
import 'react-bootstrap-table/css/react-bootstrap-table.min.css!'

export class Players extends React.Component {

  constructor(props) {
    super(props)
    this.state = { players: [], items: [], positions: []}
  }

  transform(data) {
    return data.map((player) => {
      return {
        title: player.name,
        size: player.total,
        color: Math.random()
      }
    })
  }

  average(data) {
    return data.map((p) => {
      let avg = p.matches ? p.total / p.matches : 0
      p.average = Math.round( avg * 100) / 100
      return p
    })
  }

  aggregate(data) {
    let result = data.reduce((m, p) => {
      if ( m[p.position] === undefined ) {
        m[p.position] = {
          name: p.position,
          matches: p.matches,
          total: p.total
        }
      } else {
        m[p.position].matches += p.matches
        m[p.position].total += p.total
      }
      return m
    }, {})
    return this.average(Object.values(result))
  }
  
  fetchData(season) {
    get(season + '/' + this.props.metric).then((data) => {
      let sorted = data.sort((a, b) => b.total - a.total)
      this.setState({
        players: this.average(sorted),
        items: this.transform(sorted.filter(player => player.total != 0)),
        positions: this.aggregate(sorted)
      })
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

  renderTable(which, data) {
    return (
      <div>
      <h4>{this.props.metric + ' per ' + which}</h4>
      <BootstrapTable tableStyle={{margin: 0}} data={data} striped={true}>
        <TableHeaderColumn isKey={true} dataField='id' hidden={true}>
          id
        </TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataSort={true} width='100'>
          {which}
        </TableHeaderColumn>
        <TableHeaderColumn dataField='total' dataSort={true} width='100' dataAlign='end'>
          totaal
        </TableHeaderColumn>
        <TableHeaderColumn dataField='matches' dataSort={true} width='100' dataAlign='end'>
          gespeeld
        </TableHeaderColumn>
        <TableHeaderColumn dataField='average' dataSort={true} width='100' dataAlign='end'>
          gemiddeld
        </TableHeaderColumn>
      </BootstrapTable>
      </div>
    )
  }
  
  renderCarousel() {
    return (
      <Carousel>
        <div style={{width: '450px', height: '500px', margin: '0 auto'}}>
          { this.renderTable('speler', this.state.players) }
        </div>
        <div style={{width: '450px', height: '500px', margin: '0 auto'}}>
          <TreeMap title={this.props.metric} children={this.state.items} colorDomain={this.props.colorDomain} colorRange={this.props.colorRange} colorType={this.props.colorType} />
        </div>
        <div style={{width: '450px', height: '500px', margin: '0 auto'}}>
          { this.renderTable('positie', this.state.positions) }
        </div>
      </Carousel>
    )
  }

  renderCompact() {
    return (
      <div>
        <h4>{this.props.metric}</h4>
        <BootstrapTable tableStyle={{margin: 0}} data={this.state.players} striped={true}>
          <TableHeaderColumn isKey={true} dataField='id' hidden={true}>
            Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={true} width='100'>
            Speler
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total' dataSort={true} width='100'
            dataAlign='end'>
            Totaal
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }

  render() {
    return (
      <div className='row-fluid'>
        <div className='col-xs-12 col-md-12'>
          <MediaQuery query='(min-device-width: 768px)'>
            { this.renderCarousel() }
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
})(Players)
