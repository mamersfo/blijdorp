import React from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { get } from './api'
import L from 'leaflet'
import { Link } from 'react-router'
import Seasonal from './seasonal'

const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
const baseUrl = 'http://bin617.website-voetbal.nl/sites/voetbal.nl/files/knvblogos_width35/'

export class Clubs extends Seasonal {

  constructor(props) {
    super(props)
    this.state = {
      filename: 'clubs',
      data: []
    }
  }
  
  componentDidUpdate() {
    let map = this.refs.map.leafletElement
    let layers = Object.values(map._layers)

    if ( layers.length > 0 ) {
      let current = this.props.params.club || 'Blijdorp'
      let club = this.state.data.find( (c) => c.name === current)

      let marker = layers.find( (l) => {
        if ( l._latlng !== undefined ) {
          return l._latlng.lat === club.position[0] &&
            l._latlng.lng === club.position[1]
        }
        return false
      })
      
      if ( marker !== undefined ) {
        marker.openPopup()
      }
    }
  }

  render() {
    let current = this.props.params.club || 'Blijdorp'
    let club = this.state.data.find( (c) => c.name === current)
    let pos = club !== undefined ? club.position : [ 51.9264862, 4.4397681 ]
    
    return (
      <div>
        <div style={{marginBottom: '20px'}}> 
        {
          this.state.data.map((c, idx) => {
            return (
              <span>
                { idx > 0 ? ' | ' : '' }
                <Link to={`/blijdorp/clubs/${c.name}`}
                  activeClassName='active'>{c.name}</Link>
              </span>
            )
          })
        }
      </div>
      <Map ref='map' center={pos} zoom={14} style={{height: '400px'}}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution={attribution}
        />
        {
          this.state.data.map((c) => {
            let imgUrl = baseUrl + c.id + '.jpg'
            return (
              <Marker key={c.name} position={c.position}>
                <Popup>
                  <span>
                    <img src={imgUrl} /><br/>
                      <a target="_blank" href={'http://' + c.website}>
                        {c.fullname}
                      </a><br/>
                      {c.address.street}<br/>
                      {c.address.postalCode} {c.address.city}
                  </span>
                </Popup>
              </Marker>
            )
          })
        }
      </Map>
      </div>
    )
  }
}

export default connect(state => {
  return {
    season: state.season
  }
})(Clubs)
