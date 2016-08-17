import React from 'react'
import Players from './players'

export default class Assists extends React.Component {

  render() {
    return <Players
      metric='assists'
      colorRange={['white', 'blue']}
      />
  }
}
