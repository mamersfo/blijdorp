import React from 'react'
import { connect } from 'react-redux'
import { Treemap } from 'react-vis'
import { get } from './api'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Carousel from 'nuka-carousel'

export class Players extends React.Component {

  constructor(props) {
    super(props)
    this.state = { players: [], items: []}
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
  
  fetchData(season) {
    get(season + '/' + this.props.metric).then((data) => {
      let sorted = data.sort((a, b) => b.total - a.total)
      this.setState({
        players: sorted.map((p) => {
          let avg = p.matches ? p.total / p.matches : 0
          p.average = Math.round( avg * 100) / 100
          return p
        }),
        items: this.transform(sorted.filter(player => player.total != 0))
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
  
  renderHeader() {
    return (
        <div className='row'>
          <div className='col-md-6'>
            <h2>{this.props.metric}</h2>
          </div>
          <div className='col-md-6'>
          </div>
        </div>
    )
  }

  renderTreeMap() {
    return (
        <Treemap
          data={{title: '', children: this.state.items}}
          height={400}
          width={400}
          colorDomain={this.props.colorDomain || [0, 1]}
          colorRange={this.props.colorRange || ['white', 'green']}
          colorType={this.props.colorType || 'linear'}
        />
    )
  }

  renderTable() {
    return (
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
        <TableHeaderColumn dataField='matches' dataSort={true} width='100'
          dataAlign='end'>
          Wedstrijden
        </TableHeaderColumn>
        <TableHeaderColumn dataField='average' dataSort={true} width='100'
          dataAlign='end'>
          Gemiddelde
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }

  renderCarousel() {
    return (
      <Carousel>
        <div style={{width: '400px', height: '450px', margin: '0 auto'}}>
          { this.renderTreeMap() }
        </div>
        <div style={{width: '450px', height: '450px', margin: '0 auto'}}>
          { this.renderTable() }
        </div>
      </Carousel>
    )
  }

  render() {
    return (
      <div className='container-fluid'>
        { this.renderHeader() }
        <div className='row'>
          <div className='col-md-9'>
          { this.renderCarousel() }
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
})(Players)
