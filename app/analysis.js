import React from 'react'
import { get } from './api'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from 'react-vis'

export class Analysis extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      minute: []
    }
  }

  minuteSeries(data, flag) {
    let series = [
      { x:  5, y: 0 },
      { x: 10, y: 0 },
      { x: 15, y: 0 },
      { x: 20, y: 0 },
      { x: 25, y: 0 },
      { x: 30, y: 0 },
      { x: 35, y: 0 },
      { x: 40, y: 0 },
      { x: 45, y: 0 },
      { x: 50, y: 0 }
    ]
    
    return data.reduce((m, n) => {
      if ( n[2] === flag ) {
        let minute = n[1]
        let idx = Math.floor( (minute+1) / 5 )
        let entry = m[idx]
        m[idx] = Object.assign( m[idx], {y: entry.y + 1} )
      }
      return m
    }, series )
  }

  componentDidMount() {
    let uri = this.props.season + '/scores'
    get(uri).then((data) => {
      this.setState({
        minute: [
          this.minuteSeries(data, true),
          this.minuteSeries(data, false)
        ]
      })
    })
  }

  renderStackedBarChart(series) {
    return (
        <XYPlot width={414} height={414} stackBy='y'>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        {
          series.map((data) => <VerticalBarSeries data={data} /> )
        }
        </XYPlot>
    )
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-6'>
        { this.renderStackedBarChart( this.state.minute ) }
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
})(Analysis)
