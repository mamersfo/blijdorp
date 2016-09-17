import React from 'react'
import Update from './update'
import { Link } from 'react-router'

export default class Home extends React.Component {

  renderLinks() {
    const links = [
      {
        id: 1,
        href: 'http://www.rvv-blijdorp.nl',
        img: '/blijdorp/images/geography-24.png'
      },
      {
        id: 2,
        href: 'https://twitter.com/BlijdorpSelec06',
        img: '/blijdorp/images/twitter-24.png'
      }
    ]

    return links.map((link) => {
      return (
        <span style={{marginRight: '10px'}} key={link.id}>
          <a href={link.href} target='_blank'><img src={link.img} /></a>
        </span>
      )
    })
  }
  
  render() {
    return (
      <div className='col-xs-12 col-md-12'>
        <div className='jumbotron' style={{margin: '0px'}}>
        <img src='/blijdorp/images/team-1617.png'
          style={{
          position: 'relative',
          float: 'right',
          marginLeft: '30px',
          'WebkitFilter': 'saturate(30%)'
        }}>
        </img>
        <h1>Blijdorp JO11-1</h1>
        <p>
        Website gewijd aan het selectieteam voor Blijdorpspelers die zijn geboren in het jaar 2006. Nu als JO11-1 uitkomend in Groep 2 04 van het KNVB district West II. Op deze site vind je onder meer <Link to='/blijdorp/verslag'>wedstrijdverslagen</Link>, statistieken en <Link to='/blijdorp/oefeningen'>oefenstof</Link>.
        </p>
        <div>{ this.renderLinks() }</div>
        <Update />
        </div>
      </div>
    )
  }
}
