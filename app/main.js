import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Team from './team'
import Home from './home'
import Goals from './goals'
import Assists from './assists'
import Matches from './matches'
import ChooseSeason from './choose-season'
import Exercises from './exercises.js'
import Schedule from './schedule.js'
import Table from './table.js'
import Results from './results.js'
import Analysis from './analysis'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

function reducer(state = {season: '2016-17'}, action) {
  switch(action.type) {
    case 'CHOOSE_SEASON':
      return {season: action.season}
    default:
      return state
  }
}

const store = createStore(reducer)

const baseUri = '/blijdorp/'

const childRoutes = [
  {
    id: 1,
    path: 'home',
    component: Home
  },
  {
    id: 2,
    path: 'programma',
    component: Schedule
  },
  {
    id: 3,
    path: 'uitslagen',
    component: Results
  },
  {
    id: 4,
    path: 'stand',
    component: Table
  },
  {
    id: 5,
    path: 'verslag',
    component: Matches
  },
  {
    id: 6,
    path: 'doelpunten',
    component: Goals
  },
  {
    id: 7,
    path: 'assists',
    component: Assists
  },
  {
    id: 8,
    path: 'analyse',
    component: Analysis
  },
  {
    id: 9,
    path: 'oefeningen',
    component: Exercises
  }
]

class Main extends React.Component {
  
  renderItems() {
    return childRoutes.map((item) => {
      let uri = baseUri + item.path
      return (
        <li key={'item-' + item.id} role='presentation'
            className={this.props.location.pathname == uri ? 'active' : ''}>
          <Link to={uri}>{item.path}</Link>
        </li>
      )
    })    
  }

  render() {
    return (
      <div>
        <ul className='nav nav-tabs'>
        {this.renderItems()}
        <ChooseSeason />
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const routes = {
  path: baseUri,
  component: Main,
  indexRoute: { component: Home },
  childRoutes: childRoutes
}

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app'))
