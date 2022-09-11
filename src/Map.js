import React , { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGL , { Marker } from "react-map-gl";
import './Map.css';

const accesstoken = 'pk.eyJ1Ijoicnp2a29saSIsImEiOiJjbDdvcXEycmowODRxM3ZueHY0OXcweXpkIn0.JuC8jWfY5yEcmVcMwygowQ' ;

export default class Map extends Component {

    componentDidMount(){
        mapboxgl.accessToken = accesstoken ;
    }

  render() {
    return (
    <div className='map'>
        <ReactMapGL
        longitude={this.props.position[0]}
        latitude={this.props.position[1]} 
        mapStyle='mapbox://styles/mapbox/streets-v11'
        minZoom={12.5}
        maxZoom={20}
        doubleClickZoom={true}
        scrollZoom={true}
        touchZoom={true}
        mapboxApiAccessToken={accesstoken}
        >
          <Marker
            longitude={this.props.position[0]}
            latitude={this.props.position[1]}
            >
          </Marker>
        </ReactMapGL>
    </div>
    );
  }
}