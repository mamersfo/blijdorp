import React from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { get } from './api'
import L from 'leaflet'
import { Link } from 'react-router'
import Seasonal from './seasonal'

const attribution = '&copy; <a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a> | &copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> | <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
const baseUrl = 'http://bin617.website-voetbal.nl/sites/voetbal.nl/files/knvblogos_width35/'
const tileUrl = 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFtZXJzZm8iLCJhIjoiY2l6aThoNHdxMDA0YTMzdDlubnQza2FveiJ9.VMxvRS1-qYKZi-PLgKG5fA'

export class Clubs extends Seasonal {

  constructor(props) {
    super(props)
    this.state = {
      filename: 'clubs',
      data: []
    }
    this.renderMarker = this.renderMarker.bind(this)
  }

  route( dest ) {
    return `http://www.anwb.nl/verkeer/routeplanner?lat1=51.9264862&lat2=${dest.position[0]}&lon1=4.4397074&lon2=${dest.position[1]}&name1=Blijdorp&name2=${dest.name}&transportMode1=car`
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

  renderMarker(c) {
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
          {c.address.postalCode} {c.address.city}<br/>
          <a target="_blank" href={this.route(c)}>Routebeschrijving</a>
          </span>
        </Popup>
      </Marker>
    )
  }

  renderClubs() {
    return (
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
    )
  }
  
  render() {
    let current = this.props.params.club || 'Blijdorp'
    let club = this.state.data.find( (c) => c.name === current)
    let pos = club !== undefined ? club.position : [ 51.9264862, 4.4397681 ]
    
    return (
      <div>
      {this.renderClubs()}
      <Map ref='map' center={pos} zoom={14} style={{height: '450px'}}>
        <TileLayer
          url={tileUrl}
          attribution={attribution}
        />
        {
          this.state.data.map(this.renderMarker)
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
