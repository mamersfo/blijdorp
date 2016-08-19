import React from 'react'
import { get } from './api'
import { Accordion, AccordionItem } from 'react-sanfona'

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
        {id: 'c-8', title: 'Standaard-situaties',         checked: false}
      ],
      selected: []
    }
  }

  componentDidMount() {
    get('exercises').then((data) => {
      this.setState({
        exercises: data.sort(compare)
      })
    })
  }

  renderItems() {
    let selected = this.state.selected.length > 0 ?
        this.state.selected : this.state.exercises
    
    return selected.map((m) => {
      return (
        <AccordionItem title={m.name} slug={m.uuid} key={m.uuid}>
          <div>
            { m.text }
          </div>
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
          <div className='col-md-9'>
            <Accordion>
            { this.renderItems() }
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}
