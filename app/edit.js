import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router'
import { query } from './api'

var stringify = function(o) {
  switch(typeof o) {
  case 'object':
    if ( Array.isArray(o) ) {
      return '[' + o.map((i) => {
        return stringify(i)
      }).join(', ') + ']'
    } else if ( o === null ) {
      return 'null'
    } else {
      let es = Object.entries(o).filter((e) => {
        return e[1] != null
      })
      return '{' + es.map((e) => {
        return e[0] + ': ' + stringify(e[1])
      }).join(', ') + '}'
    }
  case 'string':
    return `"${o}"`
  default:
    return `${o}`
  }
}

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = { story: {} }
  }

  componentDidMount() {
    let { id } = this.props.params
    let q = `query { story(id: \"${id}\") { id title date description content { type text url } } }`
    query(q).then((json) => {
      this.setState({story: json.data.story})
    })
  }

  renderInput(title, key, value) {
    return (
      <div key={key} className="form-group">
        <label for={key}>{title}</label>
        <input type='text' className="form-control" id={key} value={value} style={{width: '100%'}}
          onChange={this.handleChange.bind(this, key)} />
      </div>
    )
  }

  renderText(title, key, text) {
    return (
      <div key={key} className="form-group">
        <label for={key}>{title}</label>
        <textArea id={key} rows='5' value={text} style={{width: '100%'}}
          onChange={this.handleChange.bind(this, key)} />
      </div>
    )
  }

  handleChange(which, e) {
    let { story } = this.state

    if ( which.startsWith('content_') ) {
      let parts = which.split('_')
      let idx = parseInt(parts[1])
      let content = this.state.story.content
      let item = content[idx]
      if ( parts.length === 2 ) {
        item.text = e.target.value
      } else if ( parts.length === 3 ) {
        item[parts[2]] = e.target.value
      }
      content[idx] = item
      story = Object.assign(story, {content: content})
    } else {
      switch(which) {
      case 'title':
        story = Object.assign(story, {title: e.target.value})
        break
      case 'date':
        story = Object.assign(story, {date: e.target.value})
        break
      case 'description':
        story = Object.assign(story, {description: e.target.value})
        break
      }
    }

    this.setState({story: story})
  }

  logState(e) {
    e.preventDefault()
    console.log('state', this.state)
  }

  save(e) {
    e.preventDefault()
    let { story } = this.state
    let q = `mutation { upsertStory(story: ${stringify(story)}) { id } }`
    console.log('q', q)
    query(q).then((json) => {
      console.log('saved', json)
    })
  }
  
  renderContent(c, idx) {
    let key = 'content_' + idx
    switch(c.type) {
    case 'text':
      return this.renderText('Paragraph', key, c.text)
    case 'link':
      return (
        <div key={key}>
          { this.renderInput('Link', key + '_url', c.url) }
          { this.renderInput('Text', key + '_text', c.text) }
        </div>
      )
    case 'video':
      return (
        <div key={key}>
          { this.renderInput('Video', key + '_url', c.url) }
        </div>
      )
    }
  }
  
  render() {
    let { story } = this.state
    return (
      <div className='container-fluid'>
        <div className='row-fluid'>
          <div className='col-md-12'>
          <form>
          { this.renderInput('Title', 'title', story.title) }
          { this.renderText('Description', 'description', story.description) }
          { story.content && story.content.map(this.renderContent.bind(this)) }
          <a className="btn btn-default" href="#" role="button"><Link to='/'>Back</Link></a>
          <a className="btn btn-default" href="#" role="button" onClick={this.save.bind(this)}>Save</a>
          <a className="btn btn-default" href="#" role="button" onClick={this.logState.bind(this)}>Log</a>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = { stories: [] }
  }

  componentDidMount() {
    query('query { stories { id title date } }').then((json) => {
      this.setState({stories: json.data.stories})
    })
  }
  
  render() {
    if ( this.state.stories.length) {
      console.log('stories', this.state.stories)
    }
    return (
      <div className='container-fluid'>
        <div className='row-fluid'>
          <div className='col-md-12'>
            <h2>Stories</h2>
            {
            this.state.stories.map((s) => {
            return (
              <div key={s.id}>
                <Link to={`/story/${s.id}`}>{s.title}</Link>
              </div>
            )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={List} />
    <Route path="/story" component={Story} />
    <Route path="/story/:id" component={Story} />
  </Router>
), document.getElementById('app'))
