import React from 'react'
import { get } from './api'
import { connect } from 'react-redux'
import Carousel from 'nuka-carousel'
import MediaQuery from 'react-responsive'
import { frequencies, range, series } from './util'
import { Barchart, Heatmap } from './charts'

export class Analysis extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      charts: [
        {
          idx: 0,
          title: 'Tactische situatie',
          options: ['aanval', 'counter', 'standaard'],
          column: 5,
          xType: 'ordinal'
        },
        {
          idx: 1,
          title: 'Standaardsituatie',
          options: ['hoekschop', 'vrije trap'],
          column: 6,
          xType: 'ordinal'
        },
        {
          idx: 2,
          title: 'Aanval ingezet',
          options: ['links', 'centrum', 'rechts'],
          column: 7,
          xType: 'ordinal'
        },
        {
          idx: 3,
          title: 'Wijze van scoren',
          options: ['schot', 'shoot-out', 'intikker', 'kopbal'],
          column: 8,
          xType: 'ordinal'
        },
        {
          idx: 4,
          title: 'Wedstrijdverloop',
          column: 2,
          stackBy: 'y',
          type: 'minute'
        },
        {
          idx: 5,
          title: 'Scoringspositie',
          type: 'heatmap'
        }
      ],
      selectedChart: 0,
      selectedTeams: new Set(['blijdorp', 'opponent']),
      teams: [
        {
          key: 'blijdorp',
          title: 'Blijdorp',
          color: '#339933'
        },
        {
          key: 'opponent',
          title: 'Tegenstander',
          color: '#99ccff'
        }
      ],
      players: new Set(['Fadi', 'Jonas', 'Luc', 'Quincy', 'Stijn'])
    }
  }

  heatmapSeries(data, flag) {
    let xs = range(-6, 6)
    let ys = range( 1, 9)

    let series = xs.map((x) => {
      return ys.map((y) => {
        return { x: x, y: y, color: 0 }
      })
    })

    let filtered = data.filter((d) => d[2] === flag)

    series = filtered.reduce((m, n) => {
      let xIdx = n[9] + 6
      let yIdx = n[10] - 1
      let x = m[xIdx]
      let y = x[yIdx]
      y.color++
      return m
    }, series)

    return series.reduce((x, y) => x.concat(y), [])
  }

  minuteSeries(data, flag) {
    let series = range(5, 50, 5).map((n) => { return {x: n, y: 0} })
    let filtered = data.filter((d) => d[2] === flag)
    return filtered.reduce((m, n) => {
      let minute = n[1]
      let idx = Math.min( Math.floor( (minute+1) / 5 ), 9 )
      let entry = m[idx]
      m[idx] = Object.assign( m[idx], {y: entry.y + 1} )
      return m
    }, series )
  }

  componentDidMount() {
    let uri = this.props.season + '/scores'
    get(uri).then((data) => {
      this.setState({
        data: data
      })
    })
  }

  handleChartChange(e) {
    this.setState({selectedChart: e.target.value})
  }

  renderChartSelect() {
    return (
      <div className='form-group'>
        <label for='chartSelect'>Grafiek</label>
        <select id='chartSelect'
          className='form-control'
          defaultValue={this.state.selectedChart}
          onChange={this.handleChartChange.bind(this)}>
        {
          this.state.charts.map((o) => {
            return (
              <option key={o.idx} value={o.idx}>{o.title}</option>
            )
          })
        }
        </select>
      </div>
    )
  }

  handleTeamChange(team) {
    let teams = this.state.selectedTeams
    if ( teams.has( team ) ) teams.delete( team )
    else teams.add( team )
    this.setState({selectedTeams: teams})
  }

  renderTeamSelect() {
    return (
      <div className='form-group'>
        <label for='teamSelect'>Team</label>
        {
          this.state.teams.map((t) => {
            return (
              <div>
                <input type='checkbox' checked={this.state.selectedTeams.has(t.key)}
                  onChange={this.handleTeamChange.bind(this, t.key)} />
                <span style={{marginLeft: '10px'}}>{t.title}</span>
                <span style={{width: '50px', backgroundColor: t.color, float: 'right'}} ><br/></span>
              </div>
            )        
          })
        }
      </div>
    )
  }

  handlePlayerChange(player) {
    let players = this.state.players
    if ( players.has( player ) ) players.delete( player )
    else players.add( player )
    this.setState({players: players})
  }

  renderPlayerSelect() {
    let players = new Set()
    this.state.data.map((d) => { if (d[3]) players.add(d[3]) })
    players = Array.from(players).sort()
    
    return (
      <div className='form-group'>
        <label for='playerSelect'>Speler</label>
        {
          players.map((p) => {
            return (
              <div>
              <input type='checkbox' checked={this.state.players.has(p)}
                onChange={this.handlePlayerChange.bind(this, p)} />
                <span style={{marginLeft: '10px'}}>{p}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderForm() {
    return (
      <form>
        { this.renderChartSelect() }
        { this.renderTeamSelect() }
        { this.renderPlayerSelect() }
      </form>
    )
  }

  makeSeries(data, flag, m) {
    switch ( m.type ) {
    case 'minute':
      return this.minuteSeries(data, flag)
    case 'heatmap':
      return this.heatmapSeries(data, flag)
    default:
      let filtered = data.filter((d) => d[2] === flag)
      let values = filtered.map((d) => d[m.column])
      let freqs = frequencies(values)
      return series(freqs, m.options)
    }
  }

  renderChart(size) {
    let chart = this.state.charts[this.state.selectedChart]
    let colors = []
    let series = []
    let idx = 0

    let data = this.state.data.filter((d) => !d[2] || this.state.players.has(d[3]))

    if ( this.state.selectedTeams.has('blijdorp') ) {
      series[idx] = this.makeSeries(data, true, chart)
      colors[idx] = this.state.teams[0].color
      idx++
    }

    if ( this.state.selectedTeams.has('opponent') ) {
      series[idx] = this.makeSeries(data, false, chart)
      colors[idx] = this.state.teams[1].color
    }

    if ( 'heatmap' === chart.type ) {
      let colorRange = [colors[colors.length-1], 'white']
      return <Heatmap {...chart} series={series} colorRange={colorRange} width={size} height={size * 0.6932}/>
    } else {
      return <Barchart {...chart} series={series} colors={colors} width={size} height={size} />
    }
  }

  render() {    
    return (
      <div className='row-fluid'>

        <MediaQuery query='(min-device-width: 768px)'>
          <div className='col-xs-3 col-md-3'>
            { this.renderForm() }
          </div>
          <div className='col-xs-9 col-md-9'>
            { this.renderChart(400) }
          </div>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 667px)'>
          <div className='col-xs-12 col-md-12'>
            { this.renderForm() }
          </div>
          <div className='col-xs-12 col-md-12'>
            { this.renderChart(300) }
          </div>
        </MediaQuery>

      </div>
    )
  }
}

export default connect(state => {
  return {
    season: state.season
  }
})(Analysis)
