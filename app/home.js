import React from 'react'

export default class Home extends React.Component {

  renderLinks() {
    const links = [
      {
        id: 1,
        href: 'http://www.rvv-blijdorp.nl',
        img: 'images/geography-24.png'
      },
      {
        id: 2,
        href: 'https://twitter.com/BlijdorpSelec06',
        img: 'images/twitter-24.png'
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
      <div className='container-fluid'>
        <div className='jumbotron'
      style={{height: '500px'}}>

        <img src='images/team.png'
      style={{
        position: 'relative',
        float: 'right',
        marginLeft: '30px',
        '-webkit-filter': 'saturate(20%)'
      }}>
        </img>

        <h1>Blijdorp JO11-1</h1>

        <p>
        Website gewijd aan het selectieteam voor Blijdorpspelers die zijn geboren in het jaar 2006. Nu als JO11-1 uitkomend in Groep 2 04 van het KNVB district West II. Op deze site vind je wedstrijdverslagen, statistieken en oefenstof.
        </p>

        <div>{ this.renderLinks() }</div>
        


        
      </div>
      </div>
    )
  }
}
