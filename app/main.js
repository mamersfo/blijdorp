import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Team from './team'
import Home from './home'
import Goals from './goals'

const baseUri = '/blijdorp'

const childRoutes = [
  {
    id: 1,
    path: 'home',
    component: Home
  },
  {
    id: 2,
    path: 'team',
    component: Team
  },
  {
    id: 3,
    path: 'goals',
    component: Goals
  }
]

class Main extends React.Component {
  
  renderItems() {
    return childRoutes.map((item) => {
      let uri = baseUri + '/' + item.path
      return (
          <li key={'item-' + item.id}
            role='presentation'
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

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'))
