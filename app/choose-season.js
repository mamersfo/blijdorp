import React from 'react'
import { connect } from 'react-redux'

export class ChooseSeason extends React.Component {

  choose(which) {
    if ( true ) {
      this.props.dispatch({
        type: 'CHOOSE_SEASON',
        season: which
      })
    }
  }

  renderItems() {
    const seasons = ['2015-16', '2016-17']

    return seasons.map((s) => {
      return (
        <li key={s}>
          <a href='#' onClick={(e) => this.choose({s})}>{s}</a>
        </li>
      )
    })
  }

  render() {
    return (
      <li key='item-dropdown' className='dropdown'>
        <a className='dropdown-toggle'
           data-toggle='dropdown' href='#' role='button'
           aria-haspopup='true' aria-expanded='false'>
          seizoen <span className='caret'></span>
        </a>
        <ul className='dropdown-menu'>
          {this.renderItems()}
        </ul>
      </li>
    )
  }
}

export default connect(state => {
  return {
    season: state.season
  }
})(ChooseSeason)
