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
      <div className='container'>
        <div className='jumbotron'>
          <h1>Blijdorp JO11-1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at dui vitae odio varius sagittis. Curabitur est risus, porta sit amet arcu ut, aliquam auctor velit.</p>
          <div>
            { this.renderLinks() }
          </div>
       </div>
      </div>
    )
  }
}
