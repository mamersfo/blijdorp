import React from 'react'
import { connect } from 'react-redux'
import {Treemap} from 'react-vis'
import { get } from './api'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

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
        players: sorted,
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
          height={414}
          width={414}
          colorDomain={this.props.colorDomain || [0, 1]}
          colorRange={this.props.colorRange || ['white', 'green']}
          colorType={this.props.colorType || 'linear'}
        />      
    )
  }

  renderTable() {
    return (
        <BootstrapTable tableStyle={{margin: 0}} height={414} data={this.state.players} striped={true}>
        <TableHeaderColumn isKey={true} dataField='id' hidden={true}>
          Id
        </TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataSort={true} width='100'>
          Player
        </TableHeaderColumn>
        <TableHeaderColumn dataField='total' dataSort={true} width='100'
          dataAlign='end'>
          Total
        </TableHeaderColumn>
        <TableHeaderColumn dataField='matches' dataSort={true} width='100'
          dataAlign='end'>
          Matches
        </TableHeaderColumn>
        <TableHeaderColumn dataField='average' dataSort={true} width='100'
          dataAlign='end'>
          Average
        </TableHeaderColumn>
      </BootstrapTable>      
    )
  }
  
  render() {
    return (
      <div className='container-fluid'>
        { this.renderHeader() }
        <div className='row'>
          <div className='col-md-6'>
            { this.renderTable() }
          </div>
          <div className='col-md-6'>
            { this.renderTreeMap() }
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
