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

const baseUri = '/blijdorp'

const childRoutes = [
  {
    id: 2,
    path: 'competitie',
    childRoutes: [
      {
        id: 3,
        path: 'programma',
        component: Schedule
      },
      {
        id: 4,
        path: 'uitslagen',
        component: Results
      },
      {
        id: 5,
        path: 'stand',
        component: Table
      }
    ]
  },
  {
    id: 6,
    path: 'verslagen',
    component: Matches
  },
  {
    id: 7,
    path: 'statistieken',
    childRoutes: [
      {
        id: 8,
        path: 'doelpunten',
        component: Goals
      },
      {
        id: 9,
        path: 'assists',
        component: Assists
      },
      {
        id: 10,
        path: 'analyse',
        component: Analysis
      }
    ]
  },
  {
    id: 10,
    path: 'oefeningen',
    component: Exercises
  }
]

class Main extends React.Component {

  renderItem(baseUri, item) {
    let uri = baseUri + '/' + item.path
    return (
      <li key={'item-' + item.id} role='presentation'
        className={this.props.location.pathname == uri ? 'active' : ''}>
        <Link to={uri}>{item.path}</Link>
      </li>
    )
  }
  
  renderItems() {
    return childRoutes.map((item) => {
      if ( item.childRoutes ) {
        let className = 'dropdown'
        if ( this.props.location.pathname.startsWith(baseUri + '/' + item.path) )
          className += ' active'
        return (
          <li key={'item-' + item.id} className={className}>
            <a className='dropdown-toggle' data-toggle='dropdown' href='#'
            role='button' aria-haspopup='true' aria-expanded='false'>{item.path}</a>
            <ul className='dropdown-menu'>
            { item.childRoutes.map((i) => this.renderItem(baseUri + '/' + item.path, i) ) }
            </ul>
          </li>
        )
       } else {
         return this.renderItem(baseUri, item)
      }
    })    
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button'
                className='navbar-toggle'
                data-toggle='collapse'
                data-target='.navbar-collapse'
                aria-controls='navbar'>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <div className='navbar-brand'>
                <Link to='blijdorp/home'>Blijdorp JO11-1</Link>
              </div>
            </div>
            <div className='navbar-collapse collapse'>
              <ul className='nav navbar-nav'>
                {this.renderItems()}
                <ChooseSeason />
              </ul>
            </div>
          </div>
        </nav>
        <div className='container-fluid'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const routes = {
  path: baseUri,
  component: Main,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'home',
      component: Home
    },
      ...childRoutes
  ]
}

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app'))
