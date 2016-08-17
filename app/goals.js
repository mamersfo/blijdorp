import React from 'react'
import Players from './players'

export default class Goals extends React.Component {

  render() {
    return <Players
      metric='goals'
      colorRange={['white', 'red']}
       />
  }
}
