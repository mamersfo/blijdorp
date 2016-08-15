import React from 'react'
import {Treemap} from 'react-vis'
import { get } from './api'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

export default class Goals extends React.Component {

  constructor(props) {
    super(props)
    this.state = { players: [], items: []}
  }

  transform(data) {
    let color = 1
    return data.map((player) => {
      return {
        title: player.name,
        size: player.total,
        color: color++
      }
    })
  }

  componentDidMount() {
    get('goals').then((data) => {
      let sorted = data.sort((a, b) => b.total - a.total)
      this.setState({
        players: sorted,
        items: this.transform(sorted.filter(player => player.total != 0))
      })
    })
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2>goals</h2>
          </div>
          <div className='col-md-6'>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Treemap
              data={{title: '', children: this.state.items}}
              height={435}
              width={435}/>
          </div>
          <div className='col-md-6'>
            <BootstrapTable data={this.state.players}striped={true} headerStyle={{'margin-bottom': '0px'}}>
              <TableHeaderColumn isKey={true} dataField='id' hidden='true'>Id</TableHeaderColumn>
              <TableHeaderColumn dataField='name' dataSort='true' width={100}>Player</TableHeaderColumn>
              <TableHeaderColumn dataField='total' dataSort={true} dataAlign='end' width={100}>Total</TableHeaderColumn>
              <TableHeaderColumn dataField='matches' dataSort={true} dataAlign='end' width={100}>Matches</TableHeaderColumn>
              <TableHeaderColumn dataField='average' dataSort={true} dataAlign='end' width={100}>Average</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    )
  }
}
