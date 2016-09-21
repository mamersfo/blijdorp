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
      minute: [],
      situation: [],
      flank: [],
      standard: [],
      shots: [],
      heatmap: []
    }
  }

  flankSeries(data, flag, idx) {
    let filtered = data.filter((d) => d[2] === flag)
    let values = filtered.map((d) => d[idx])
    let freqs = frequencies(values)
    return series(freqs, ['links', 'centrum', 'rechts'])
  }

  standardSeries(data, flag) {
    let filtered = data.filter((d) => d[2] === flag)
    let values = filtered.map((d) => d[6])
    let freqs = frequencies(values)
    return series(freqs, ['hoekschop', 'vrije trap'])
  }

  shotSeries(data, flag) {
    let filtered = data.filter((d) => d[2] === flag)
    let values = filtered.map((d) => d[8])
    let freqs = frequencies(values)
    return series(freqs, ['schot', 'shoot-out', 'intikker', 'kopbal'])
  }

  situationSeries(data, flag) {
    let filtered = data.filter((d) => d[2] === flag)
    let values = filtered.map((d) => d[5])
    let freqs = frequencies(values)
    return series(freqs, ['aanval', 'counter', 'standaard'])
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
      let idx = Math.floor( (minute+1) / 5 )
      let entry = m[idx]
      m[idx] = Object.assign( m[idx], {y: entry.y + 1} )
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

  render() {    
    return (
      <div className='row-fluid'>
        <div className='col-xs-12 col-md-12'>
          <MediaQuery query='(min-device-width: 768px)'>
            <Carousel>
              <Barchart title='doelpunten per 5 minuten' series={this.state.minute} stackBy='y' />
              <Barchart title='doelpunten per tactische situatie' series={this.state.situation} xType='ordinal' />
              <Barchart title='doelpunten per type inzet' series={this.state.shots} xType='ordinal' />
              <Barchart title='doelpunten uit standaardsituatie' series={this.state.standard} xType='ordinal' />
              <Barchart title='doelpunten per aanval ingezet op flank' series={this.state.flank} xType='ordinal' />
              <Heatmap title='doelpunten vanuit positie' series={this.state.heatmap} width={577} height={400}/>
            </Carousel>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 667px)'>
            <Barchart title='doelpunten per 5 minuten' series={this.state.minute} stackBy='y' width={300} height={300}/>
            <Barchart title='doelpunten per tactische situatie' series={this.state.situation} xType='ordinal' width={300} height={300} />
            <Barchart title='doelpunten per type inzet' series={this.state.shots} xType='ordinal' width={300} height={300} />
            <Barchart title='doelpunten uit standaardsituatie' series={this.state.standard} xType='ordinal' width={300} height={300} />
            <Barchart title='doelpunten per aanval ingezet op flank' series={this.state.flank} xType='ordinal' width={300} height={300} />
            <Heatmap title='doelpunten vanuit positie' series={this.state.heatmap} width={300} height={208}/>
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
