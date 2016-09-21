import React from 'react'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, HeatmapSeries } from 'react-vis'
import 'react-vis/main.css!'

export class Heatmap extends React.Component {
  render() {
    let series = this.props.series
    let title = this.props.title || 'Untitled'
    let width = this.props.width || 400
    let height = this.props.height || 500
    let colorRange = this.props.colorRange || ['#339933', 'white']
    let colorType = this.props.colorType || 'linear'
    
    let max = series && series[0] ? series[0].reduce((a,b) => a > b.color ? a : b.color, 0) : 0
    
    return (
      <div style={{width: width, height: height+100, margin: '0 auto'}}>
        <h4>{title}</h4>
        <XYPlot width={width} height={height}
          colorDomain={[0, max]}
          colorRange={colorRange}
          colorType={colorType}>
          <VerticalGridLines />
          <HorizontalGridLines />
          { series && series.map((data) => <HeatmapSeries data={data} /> ) }
        </XYPlot>
      </div>
    )
  }
}

export class Barchart extends React.Component {
  render() {
    let series = this.props.series
    let title = this.props.title || 'Untitled'
    let colors = this.props.colors || ['#339933', '99ccff']
    let width = this.props.width || 400
    let height = this.props.height || 400
    let xType = this.props.xType || 'linear'
    let yType = this.props.yType || 'linear'
    let stackBy = this.props.stackBy || ''

    return (
      <div style={{width: width, height: height+100, margin: '0 auto'}}>
        <h4>{title}</h4>
        <XYPlot
          width={width} height={height}
          xType={xType} yType={yType}
          stackBy={stackBy}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        { series && series.map((data, idx) => <VerticalBarSeries data={data} color={colors[idx]} /> ) }
        </XYPlot>
      </div>
    )
  }
}
