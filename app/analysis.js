import React from 'react'
import { get } from './api'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, HeatmapSeries } from 'react-vis'
import Carousel from 'nuka-carousel'

export class Analysis extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      minute: [],
      situation: [],
      flank: [],
      standard: [],
      shots: []
    }
  }

  flankSeries(data, flag, idx) {
    let series = [
      { x: 'links',   y: 0 },
      { x: 'centrum', y: 0 },
      { x: 'rechts',  y: 0 }
    ]

    return data.reduce((m,n) => {
      if ( n[2] === flag ) {
        let entry = m.find((e) => e.x === n[idx])
        if (entry ) entry.y += 1
      }
      return m
    }, series)
  }

  standardSeries(data, flag) {
    let series = [
      { x: 'hoekschop',   y: 0 },
      { x: 'vrije trap',  y: 0 }
    ]
  
    return data.reduce((m, n) => {
      if ( n[2] === flag ) {
        let entry = m.find((e) => e.x === n[6])
        if ( entry ) entry.y += 1
      }
      return m
    }, series )
  }

  shotSeries(data, flag) {
    let series = [
      { x: 'schot',    y: 0 },
      { x: 'shoot-out', y: 0 },
      { x: 'intikker', y: 0 }
    ]
  
    return data.reduce((m, n) => {
      if ( n[2] === flag ) {
        let entry = m.find((e) => e.x === n[9])
        if ( entry ) entry.y += 1
      }
      return m
    }, series )
  }

  situationSeries(data, flag) {
    let series = [
      { x: 'aanval',   y: 0 },
      { x: 'counter',  y: 0 },
      { x: 'standaard', y: 0 }
    ]
  
    return data.reduce((m, n) => {
      if ( n[2] === flag ) {
        let entry = m.find((e) => e.x === n[5])
        entry.y += 1
      }
      return m
    }, series )
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
        ],
        situation: [
          this.situationSeries(data, true),
          this.situationSeries(data, false)
        ],
        flank: [
          this.flankSeries(data, true, 7),
          this.flankSeries(data, true, 8)
        ],
        standard: [
          this.standardSeries(data, true),
          this.standardSeries(data, false)
        ],
        shots: [
          this.shotSeries(data, true),
          this.shotSeries(data, false)
        ]
      })
    })
  }

  renderBarChart({title, series, xType='linear', yType='linear', stackBy=''}) {
    return (
      <div>
        <h4>{title}</h4>
        <XYPlot width={400} height={400} xType={xType} yType={yType} stackBy={stackBy}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          { series.map((data) => <VerticalBarSeries data={data} /> ) }
        </XYPlot>
      </div>
    )
  }

  renderHeader() {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h2>Analyse</h2>
        </div>
        <div className='col-md-6'>
        </div>
      </div>
    )
  }

  renderCarousel() {
    return (
      <Carousel>
        <div style={{width: '400px', height: '500px', margin: '0 auto'}}>
        {
          this.renderBarChart({
            title: 'aantal doelpunten per tijdseenheid (5 minuten), Blijdorp vs. tegenstander',
            series: this.state.minute,
            stackBy: 'y'
          })
        }
        </div>
        <div style={{width: '400px', height: '500px', margin: '0 auto'}}>
        {
          this.renderBarChart({
            title: 'aantal doelpunten per tactische situatie, Blijdorp vs. tegenstander',
            series: this.state.situation,
            xType: 'ordinal'
          })
        }  
        </div>
        <div style={{width: '400px', height: '500px', margin: '0 auto'}}>
        {
          this.renderBarChart({
            title: 'aantal doelpunten per type inzet, Blijdorp vs. tegenstander',
            series: this.state.shots,
            xType: 'ordinal'
          })
        }  
        </div>
        <div style={{width: '400px', height: '500px', margin: '0 auto'}}>
        {
          this.renderBarChart({
            title: 'aantal doelpunten uit standaardsituaties, Blijdorp vs. tegenstander',
            series: this.state.standard,
            xType: 'ordinal'
          })
        }  
        </div>

        <div style={{width: '400px', height: '500px', margin: '0 auto'}}>
        {
          this.renderBarChart({
            title: 'aantal doelpunten per flank, aanval opgezet vs. afgerond',
            series: this.state.flank,
            xType: 'ordinal'
          })
        }  
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
})(Analysis)
