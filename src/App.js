import React , { Component } from 'react';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import swal from 'sweetalert';
import './Responsive.css';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      lat : 35.715298 ,
      lng : 51.404343 ,
      errorMessage : '' ,
    } 
  }

  componentDidMount(){
    swal({
      title :"Set Up Your VPN" ,
    });

    if(!!navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          positionCallback => {
            this.setState({
              lat : positionCallback.coords.latitude ,
              lng : positionCallback.coords.longitude ,
            });
          },
          errorCallback => {
            this.setState({
              errorMessage :errorCallback.message
            });
          },
        )
      }
}

  render() {

    const longitude = this.state.lng;
    const latitude = this.state.lat;

    if(this.state.errorMessage === ''){
      
    }else{
      return(
        swal({
          title :(this.state.errorMessage),
        })
      );
    }

    return (
    <div className='app'>
      <header className='header'>
        <h1 className='title'>Map</h1>
      </header>
      <Map position={[ longitude , latitude ]} />
      <div className='lat-lng'>
        <p className='lng'>Latitude : { latitude }</p>
        <p>Longitude : { longitude }</p>
      </div>
    </div>
    );
  }
}