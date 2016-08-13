import React from 'react'
import List from './list'

export default class Team extends React.Component {
  render() {
    return (
      <div className='container'>
        <List which='players'/>
      </div>
    )
  }
}
