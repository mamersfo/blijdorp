import React from 'react'
import Update from './update'
import { Link } from 'react-router'
import MediaQuery from 'react-responsive'

export default class Home extends React.Component {  
  render() {
    return (
      <div className='col-xs-12 col-md-12'>
        <div className='jumbotron' style={{margin: '0px'}}>
          <MediaQuery query='(min-device-width: 375px)'>
            <img src='/blijdorp/images/team-1617.png'
              style={{
                position: 'relative',
                float: 'right',
                margin: '0px 20px 20px 20px',
                'WebkitFilter': 'saturate(30%)'
              }}>
            </img>
          </MediaQuery>
          <p>
        Website gewijd aan het selectieteam voor Blijdorp-spelers die zijn geboren in het jaar 2006. Nu als JO11-1 uitkomend in de 1e klasse 06 van het KNVB district West II. Deze site wordt uitgegeven op persoonlijke titel, en vertegenwoordigt op geen enkele wijze de mening van R.V.V. Blijdorp of de betrokken trainers/coaches.
          </p>
          <Update />
        </div>
      </div>
    )
  }
}
