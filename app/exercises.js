import React from 'react'
import { get } from './api'
import { Accordion, AccordionItem } from 'react-sanfona'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'

function compare(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}

export default class Exercises extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      exercises: [],
      categories: [
        {id: 'c-1', title: 'Looptraining',               checked: false},
        {id: 'c-2', title: 'Krachttraining',             checked: false},
        {id: 'c-3', title: 'Motoriektraining',           checked: false},
        {id: 'c-4', title: 'Samenspelen en druk zetten', checked: false},
        {id: 'c-5', title: 'Dribbelen en afpakken',      checked: false},
        {id: 'c-6', title: 'Scoren en tegenhouden',      checked: false},
        {id: 'c-7', title: 'Positiespel',                checked: false},
        {id: 'c-8', title: 'Standaard-situaties',        checked: false}
      ],
      selected: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    get('exercises').then((data) => {
      this.setState({
        exercises: data.sort(compare)
      })
    })
  }

  renderVideo(m) {
    if ( undefined === m.v ) {
      return <span>{m.n}</span>
    } else {
      let url = 'https://www.youtube.com/embed/' + m.v +
          '?start=' + ( undefined !== m.t ? m.t : 0 )
      let img = 'images/' + m.s + '.png'
      return (
        <div>
          <div>{m.n}<img src={img}
            style={{float: 'right', width: '24px', height: '24px'}}></img>
          </div>
          <iframe style={{marginTop: '12px'}}
            width={420} height={235} src={url}
            frameborder={0} allowFullscreen={true}></iframe>
        </div>
      )      
    }    
  }

  renderLink(m) {
    if ( undefined === m.v ) {
      return <span>{m.n}</span>
    } else {
      let url = 'https://www.youtube.com/watch?v=' + m.v + '&t=' + ( undefined !== m.t ? m.t : 0 )
      let img = 'images/' + m.s + '.png'
      return (
        <a href={url} target='_blank'>
          <span>{m.n}<img src={img}
            style={{float: 'right', width: '24px', height: '24px'}}></img>
          </span>
        </a>
      )
    }
  }

  renderVariations(e) {
    let maps = e.variations
    
    if ( maps.length > 0 ) {
      let items = maps.map((m) => {
        return (
          <li className='list-group-item'>
            {this.renderVideo(m)}
          </li>
        )
      })

      return (
          <ul
            style={{marginTop: '20px', marginBottom: '0px'}}
            className='list-group'>
          {items}
        </ul>
      )
    }

    return null
  }

  runModal(e) {
    e.preventDefault()
    ModalManager.open(
      <Modal
        onRequestClose={() => true}
        style={{content: {width: '430px', background: 'rgba(191,191,191,0.95)'}}}
        effect={Effect.ScaleUp}>
          <div className='modal-body'>
            <img src={e.target.href}/>
          </div>
          <div className='modal-footer'>
          <button
            type='button'
            className='btn btn-primary btn-sm'
            onClick={ModalManager.close}>Sluiten
          </button>
        </div>
      </Modal>
    )
  }

  renderExerciseText(m) {
    if ( m.image ) {
      let imgSrc = 'images/exercises/' + m.uuid + '.png'
      return <a href={imgSrc} onClick={this.runModal.bind(this)}>{m.text}</a>
    } else {
      return <div>{m.text}</div>
    }
  }

  renderExercises() {
    let selected = this.state.selected.length > 0 ?
        this.state.selected : this.state.exercises
    return selected.map((m, idx) => {
      return (
        <AccordionItem title={m.name} slug={idx} key={m.uuid}>
          { this.renderExerciseText(m) }
          { this.renderVariations(m) }
        </AccordionItem>  
      )
    })
  }

  updateFilters(id) {
    let categories = this.state.categories.map((c) => {
      return {
        id: c.id,
        title: c.title,
        checked: ( c.id === id ? !c.checked : c.checked ) }
    })

    let checked = new Set(categories.filter((c) => c.checked).map((c) => c.title))

    this.setState({
      categories: categories,
      selected: this.state.exercises.filter((e) => checked.has(e.category))
    })
  }

  renderFilters() {
    return this.state.categories.map((c) => {
      return (
        <div key={c.id}>
          <input type='checkbox'
            data-id={c.id}
            checked={c.checked}
            onChange={this.updateFilters.bind(this, c.id)}
          />
          <span style={{marginLeft: '10px'}}>{c.title}</span>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>oefeningen</h2>
        <div className='row'>
          <div className='col-md-3'>
            <fieldset>
              { this.renderFilters() }
            </fieldset>
          </div>
          <div className='col-md-8'>
            <Accordion style={{margin: '0px'}}>
            { this.renderExercises() }
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}
