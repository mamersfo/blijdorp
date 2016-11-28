import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import { query } from './api'
import { stringify } from './util'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/css/react-bootstrap-table.min.css!'

class Match extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      match: {
        date: '',
        teams: ['', ''],
        goals: [
        ]
      }
    }
  }

  componentDidMount() {
    let date = this.props.params.date
    if ( date !== 'new' ) {
      let q = `query { match(date: \"${date}\") { date teams goals { score minute goal assist situation standard origin type}} }`
      query(q).then((json) => {
        this.setState({
          match: json.data.match
        })
      })
    }
  }

  handleChange(which, e) {
    let { match } = this.state
  }
  
  renderInput(title, key, value) {
    return (
      <div key={key} className="form-group">
        <label for={key}>{title}</label>
        <input type='text' className="form-control" id={key} value={value} style={{width: '100%'}}
          onChange={this.handleChange.bind(this, key)} />
      </div>
    )
  }

  save(e) {
    e.preventDefault()
    let { match } = this.state
    let q = `mutation { upsertMatch(match: ${stringify(match)}) { date } }`
    query(q).then((json) => {
      console.log('json', json)
    })
  }

  handleSaveCell(goal, column, value) {
    console.log('goal', goal, 'column', column, 'value', value)
  }

  handleInsert(row) {
    console.log('handleInsertRow', row)
  }

  renderTable() {
    let goals = this.state.match.goals
    let cellEdit = {
      mode: 'click',
      blurToSave: true,
      afterSaveCell: this.handleSaveCell.bind(this)
    }
    let selectRow = {
      mode: 'checkbox',
      clickToSelect: true
    }
    let options = {
      afterInsertRow: this.handleInsert.bind(this)
    }
    return (
      <div>
        <BootstrapTable data={goals} cellEdit={cellEdit} options={options}
          selectRow={selectRow} insertRow={true} deleteRow={true}>
        <TableHeaderColumn width={75} dataField='score' isKey={true}>Score</TableHeaderColumn>
        <TableHeaderColumn width={75} dataField='minute'>Minute</TableHeaderColumn>
        <TableHeaderColumn dataField='goal'>Goal</TableHeaderColumn>
        <TableHeaderColumn dataField='assist'>Assist</TableHeaderColumn>
        <TableHeaderColumn dataField='situation'>Situation</TableHeaderColumn>
        <TableHeaderColumn dataField='standard'>Standard</TableHeaderColumn>
        <TableHeaderColumn dataField='origin'>Origin</TableHeaderColumn>
        <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
      
      </BootstrapTable>
      </div>
    )
  }
  
  render() {
    let { match } = this.state
    return (
      <div className='container-fluid'>
        <div className='row-fluid'>
          <div className='col-md-12'>
            <form>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Match</h3>
              </div>
              <div className="panel-body">
                { this.renderInput('Date', 'date', match.date) }
                { this.renderInput('Home', 'home', match.teams[0]) }
                { this.renderInput('Away', 'away', match.teams[1]) }
              </div>
              { this.renderTable() }
              <div>
                <a className="btn btn-default" href="#" role="button"><Link to='/'>Back</Link></a>
                <a className="btn btn-default" href="#" role="button" onClick={this.save.bind(this)}>Save</a>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = { matches: [] }
  }

  componentDidMount() {
    query('query { matches { date teams } }').then((json) => {
      this.setState({matches: json.data.matches})
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row-fluid'>
          <div className='col-md-12'>
            <h2>Matches</h2>
            {
            this.state.matches.map((s) => {
            return (
              <div key={s.date}>
                <Link to={`/match/${s.date}`}>
                {s.teams[0] + ' - ' + s.teams[1]}
                </Link>
              </div>
            )
            })
            }
            <div style={{marginTop: '20px'}}>
              <Link className="btn btn-default" to={`/match/new`}>Create</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={List} />
    <Route path="/match" component={Match} />
    <Route path="/match/:date" component={Match} />
  </Router>
), document.getElementById('app'))
