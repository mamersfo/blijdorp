import React from 'react'
import { get } from './api'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, HeatmapSeries } from 'react-vis'
import Carousel from 'nuka-carousel'
import 'react-vis/main.css!'
import MediaQuery from 'react-responsive'
import { range } from './util'

export class Analysis extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      minute: [],
      situation: [],
      flank: [],
      standard: [],
      shots: [],
      heatmap: []
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
        let entry = m.find((e) => e.x === n[8])
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

  heatmapSeries(data, flag) {
    let xs = range(-6, 6)
    let ys = range( 1, 9)

    let series = xs.map((x) => {
      return ys.map((y) => {
        return { x: x, y: y, color: 0 }
      })
    })

    series = data.reduce((m, n) => {
      if ( n[2] === flag ) {
        let xIdx = n[9] + 6
        let yIdx = n[10] - 1

        let x = m[xIdx]
        let y = x[yIdx]

        y.color++
      }
      return m
    }, series)

    series = series.reduce((x, y) => x.concat(y), [])

    return series
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
          this.flankSeries(data, true, 7)
        ],
        standard: [
          this.standardSeries(data, true),
          this.standardSeries(data, false)
        ],
        shots: [
          this.shotSeries(data, true),
          this.shotSeries(data, false)
        ],
        heatmap: [
          this.heatmapSeries(data, true)
        ]
      })
    })
  }

  renderChart({type='barchart', title, series, xType='linear', yType='linear', stackBy='', width, height}) {
    if ( type === 'barchart' ) {
      let colors = ['#339933', '99ccff']
      return (
        <div>
          <h4>{title}</h4>
          <XYPlot width={width} height={height} xType={xType} yType={yType} stackBy={stackBy}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            { series.map((data, idx) => <VerticalBarSeries data={data} color={colors[idx]} /> ) }
          </XYPlot>
        </div>
      )
    } else if ( type === 'heatmap' ) {
      let max = series[0] ? series[0].reduce((a,b) => a > b.color ? a : b.color, 0) : 0
      return (
        <div>
          <h4>{title}</h4>
          <XYPlot width={width} height={height}
            colorDomain={[0,max]}
            colorRange={['#339933', 'white']}
            colorType={'linear'}>
            <VerticalGridLines />
            <HorizontalGridLines />
            { series.map((data) => <HeatmapSeries data={data} /> ) }
          </XYPlot>
        </div>
      )
    }
  }

  renderCharts({charts, width, height}) {
    return (
      charts.map((c) => {
        return (
          <div style={{width: width, height: height+100, margin: '0 auto'}}>
            { this.renderChart({...c, width: width, height: height}) }
          </div>
        )
      })
    )
  }

  render() {
    let charts = [
      {
        title: 'aantal doelpunten per tijdseenheid (5 minuten), Blijdorp (groen) vs. tegenstanders (blauw)',
        series: this.state.minute,
        stackBy: 'y'
      },
      {
        title: 'aantal doelpunten per tactische situatie, Blijdorp (groen) vs. tegenstanders (blauw)',
        series: this.state.situation,
        xType: 'ordinal'
      },
      {
        title: 'aantal doelpunten per type inzet, Blijdorp (groen) vs. tegenstanders (blauw)',
        series: this.state.shots,
        xType: 'ordinal'
      },
      {
        title: 'aantal doelpunten uit standaardsituaties, Blijdorp (groen) vs. tegenstanders (blauw)',
        series: this.state.standard,
        xType: 'ordinal'
      },
      {
        title: 'aantal doelpunten van Blijdorp, per flank waar aanval is opgezet',
        series: this.state.flank,
        xType: 'ordinal'
      },
      {
        type: 'heatmap',
        title: 'heatmap van posities van waaruit Blijdorp heeft gescoord',
        series: this.state.heatmap
      }
    ]
    
    return (
      <div className='row-fluid'>
        <div className='col-xs-12 col-md-12'>
          <MediaQuery query='(min-device-width: 768px)'>
            <Carousel>
              { this.renderCharts({charts, width: 400, height: 400}) }
            </Carousel>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 667px)'>
            { this.renderCharts({charts, width: 300, height: 300}) }
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
})(Analysis)
