import React from 'react'
import { Link } from 'react-router'
import { LocalDate, LocalTime } from './datetime'
import { get } from './api'

export default class News extends React.Component {

  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.renderContent = this.renderContent.bind(this)
  }
  
  componentDidMount() {
    get('news/index').then((items) => {
      get('news/' + items[0].id).then((article) => {
        this.setState({
          items: items,
          item: items[0].id,
          article: article
        })
      })
    })
  }

  componentWillReceiveProps(next) {
    if ( next.params.item && this.state.item != next.params.item ) {
      this.state.item = next.params.item
      get('news/' + this.state.item).then((article) => {
        this.setState({article: article})
      })
    }
  }

  renderLinks() {
    let items = this.state.items.filter((i) => {
      return i.id !== this.state.item
    })

    return (
      <div style={{margin: '20px 0px 20px 0px'}}>
      Overig nieuws:
      <table>
      {
        items.map((i) => {
          return (
            <tr key={i.id}>
              <td style={{width: '100px', verticalAlign: 'top'}}>
                <LocalDate date={new Date(i.date)} />
              </td>
              <td style={{verticalAlign: 'top'}}>
                <Link to={`/blijdorp/nieuws/${i.id}`}>{i.title}</Link>
              </td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }

  renderContent(m, idx) {
    let content = ''
    
    switch( m.type ) {
      case 'text':
        content = m.text
        break
      case 'video':
        content = <iframe width={420} height={235} src={m.url}></iframe>
        break
      case 'image':
        content = <img src={m.src}></img>
        break
      case 'link':
        content = <a href={m.url} target='_blank'>{m.text}</a>
      default:
        break
    }

    return <p key={m.date + '-' + idx} style={{marginTop: '10px'}}>
      {content}</p>
  }


  renderArticle() {
    let { article } = this.state
    if ( article ) {
      let date = new Date(article.date)
      return (
        <div>
          <h3>{article.title}</h3>
          <div style={{color: '#ccc', marginTop: '10px'}}>
            Gepubliceerd:&nbsp;
            <LocalDate date={date} month='long'/>,&nbsp;
            <LocalTime date={date} />
          </div>
          <div style={{marginTop: '10px'}}>
            <strong>{article.description}</strong>
          </div>
          <div style={{color: '#333'}}>
          {
            article.content.map(this.renderContent)
          }
          </div>
        </div>
      )
    }

    return null
  }

  render() {
    return (
      <div className='col-md-8 col-xs-12'>
        { this.renderArticle() }
        { this.renderLinks() }
      </div>
    )
  }
}
