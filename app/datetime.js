import React from 'react'

export class LocalDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: props.locale || 'NL-nl',
      day: props.day || 'numeric',
      month: props.month || 'long'
    }
  }
  
  render() {
    let s = this.props.date ?
      this.props.date.toLocaleDateString(
        this.state.locale,
        {day: this.state.day, month: this.state.month}
      ) : ''

    return <span>{s}</span>
  }
}

export class LocalTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: props.locale || 'NL-nl',
      hour: props.hour || '2-digit',
      minute: props.minute || '2-digit'
    }
  }
  
  render() {
    let s = this.props.date ?
      this.props.date.toLocaleTimeString(
        this.state.locale,
        { hour: this.state.hour, minute: this.state.minute }
      ) : ''

    return <span>{s}</span>
  }
}
