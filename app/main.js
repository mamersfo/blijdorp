import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Team from './team'
import Home from './home'

const baseUri = '/blijdorp'

const childRoutes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'team',
    component: Team
  }
]

class Main extends React.Component {
  renderItems() {
    console.log(routes.childRoutes)
    return childRoutes.map((item) => {
      let uri = baseUri + '/' + item.path
      console.log(uri)
      return (
        <li role='presentation'
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
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const routes = {
  path: baseUri,
  component: Main,
  childRoutes: childRoutes
}

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'))
