import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router'
import { query } from './api'
import { stringify } from './util'

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: {
        title: '',
        description: '',
        content: []
      }
    }
  }

  generateId() {
    return Math.random().toString(36).substr(2, 8)
  }

  componentDidMount() {
    let { id } = this.props.params
    if ( id !== 'new' ) {
      let q = `query { story(id: \"${id}\") { id title date description content { type text url } } }`
      query(q).then((json) => {
        let content = json.data.story.content.map((c) => {
          c.id = this.generateId()
          return c
        })
        this.setState(
          {story: Object.assign(json.data.story, {content: content})}
        )
      })
    }
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
        <textArea id={key} rows='5' value={text} className='form-control' style={{width: '100%'}}
          onChange={this.handleChange.bind(this, key)} />
      </div>
    )
  }

  handleChange(which, e) {
    let { story } = this.state

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
      default:
        let parts = which.split('_')
        let content = story.content.map((c) => {
          if ( parts[0] === c.id ) {
            if ( parts.length === 1 ) {
              c.text = e.target.value
            } else if ( parts.length === 2 ) {
              c[parts[1]] = e.target.value
            }
          }
          return c
        })
        story = Object.assign(story, {content: content})
        break
    }

    this.setState({story: story})
  }

  logState(e) {
    e.preventDefault()
    console.log('state', this.state)
  }

  add(which, e) {
    e.preventDefault()

    let content = null
    let id = this.generateId()

    switch(which) {
    case 'text':
      content = {id: id, type: 'text', text: ''}
      break
    case 'link':
      content = {id: id, type: 'link', url: '', text: ''}
      break
    case 'video':
      content = {id: id, type: 'video', url: 'https://www.youtube.com/embed/videoId'}
      break
    }

    let { story } = this.state

    this.setState({
      story: Object.assign( story, {content: [...story.content, content]})
    })
  }

  save(e) {
    e.preventDefault()
    let { story } = this.state
    let q = `mutation { upsertStory(story: ${stringify(story)}) { id } }`
    query(q).then((json) => {
      console.log('json', json)
      if ( story.id === undefined ) {
        this.setState({
          story: Object.assign( story, {id: json.data.upsertStory.id })
        })
        console.log('state', this.state)
      }
    })
  }

  delete(id, e) {
    e.preventDefault()
    let { story } = this.state
    let content = story.content.filter((c) => c.id != id)
    this.setState({
      story: Object.assign(story, {content: content})
    })
  }

  move(id, diff, e) {
    e.preventDefault()
    let { story } = this.state
    let content = story.content
    let from = story.content.findIndex((c) => id === c.id)
    let to = from + diff

    if ( to >= 0 && to < content.length ) {
      console.log('move', from, to)

      let temp = content[from]
      content[from] = content[to]
      content[to] = temp

      this.setState({
        story: Object.assign(story, {content: content})
      })
    }
  }

  renderContent(c, idx) {
    // let key = 'content_' + idx
    let key = c.id

    let title = 'Title'
    let body = 'Body'

    switch(c.type) {
    case 'text':
      title = 'Paragraph'
      body = this.renderText('Text', key, c.text)
      break
    case 'link':
      title = 'Link'
      body = (
        <div key={key}>
          { this.renderInput('URL', key + '_url', c.url) }
          { this.renderInput('Text', key + '_text', c.text) }
        </div>
      )
      break
    case 'video':
      title = 'Video'
      body = (
        <div key={key}>
          { this.renderInput('URL', key + '_url', c.url) }
        </div>
      )
      break
    }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          {body}
          <div>
            <a className="btn btn-default" href="#" role="button" onClick={this.move.bind(this,key,-1)}>Up</a>
            <a className="btn btn-default" href="#" role="button" onClick={this.move.bind(this,key,+1)}>Down</a>
            <a className="btn btn-default" href="#" role="button" onClick={this.delete.bind(this,key)}>Delete</a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let { story } = this.state
    return (
      <div className='container-fluid'>
        <div className='row-fluid'>
          <div className='col-md-12'>
            <form>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Story</h3>
              </div>
              <div className="panel-body">
                { this.renderInput('Title', 'title', story.title) }
                { this.renderText('Description', 'description', story.description) }
              </div>
            </div>
            { story.content && story.content.map(this.renderContent.bind(this)) }
            <div style={{marginBottom: '20px'}}>
              <a className="btn btn-default" href="#" role="button" onClick={this.add.bind(this, 'text')}>Add Text</a>
              <a className="btn btn-default" href="#" role="button" onClick={this.add.bind(this, 'link')}>Add Link</a>
              <a className="btn btn-default" href="#" role="button" onClick={this.add.bind(this, 'video')}>Add Video</a>
            </div>
            <div>
              <a className="btn btn-default" href="#" role="button"><Link to='/'>Back</Link></a>
              <a className="btn btn-default" href="#" role="button" onClick={this.save.bind(this)}>Save</a>
              <a className="btn btn-default" href="#" role="button" onClick={this.logState.bind(this)}>Log</a>
            </div>
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
    query('query { stories { id title } }').then((json) => {
      this.setState({stories: json.data.stories})
    })
  }

  publish(e) {
    e.preventDefault()
    let q = 'mutation { publish { id } }'
    query(q).then((json) => {
      console.log('json', json)
    })
  }

  render() {
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
            <div style={{marginTop: '20px'}}>
              <Link className="btn btn-default" to={`/story/new`}>Create</Link>
              <a className="btn btn-default" href="#" role="button" onClick={this.publish.bind(this)}>Publish</a>
            </div>
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
