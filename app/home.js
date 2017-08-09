import React from 'react'
import Update from './update'
import { Link } from 'react-router'
import MediaQuery from 'react-responsive'

export default class Home extends React.Component {  
  render() {
    return (
      <div className='col-xs-12 col-md-12'>
        <div className='jumbotron' style={{margin: '0px'}}>
          <p>
			Website gewijd aan het selectieteam voor Blijdorp-spelers die zijn geboren in het jaar 2007. Nu als JO11-1 uitkomend in de strijd om de Zwaluwen jeugdbeker, Groep 3 16 van het KNVB district West II.
          </p>
          <Update />
        </div>
      </div>
    )
  }
}
