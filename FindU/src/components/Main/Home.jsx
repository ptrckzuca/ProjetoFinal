import React, { useState } from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { DivIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import "../Main/Home.css";
import '../Styles/Global'
import 'jquery/dist/jquery.min.js'
import { popup } from "leaflet";
import {control} from 'leaflet';


function Home() {

  const Logout = () =>{
    sessionStorage.token
  };


  const markers =[{
    geocode: [48.86, 2.3522],
    popUp:"Hello world 1"
  },
    {
     geocode:[48.85, 2.3522],
     popUp:"Hello world 2"
    },
    {
     geocode:[48.855, 2.34],
     popUp:"Hello world 3"
    }];
    
    const [latitude, setLatitude] = useState('');
    const [longitude,setLongitude] = useState('');
    
    const createCustomClusterIcon = (cluster) =>{};
   
    const handleCoordenadas = async () =>{

      const LatLong ={
        latitude: latitude,
        longitude: longitude,
      };
      
      
      try {
        const response = await fetch (
          "https://api.secureme.me/api/v1/position",
          {
            method:'POST',
            headers:{
              Accept: 'application/json' ,
              'Authorization': 'user-token' ,
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(LatLong),
          }
          );
          if(response.ok){
            alert('Coordenada adicionada');
          }else {
            setError('Falha ao adicionar coordenada');
          }
        } catch (error){console.log('Error:', error);}
      };
  return (
    <>
    <nav className="barra">
      <ul className="lista">
        <li><button>SOS</button></li>
        <li><button>Última Localização</button></li>
        <li><button>Inserir Localização</button></li>
        <li><button>Seguidores</button></li>
        <li><button onClick={Logout}>Sair</button></li>
      </ul>
    </nav>

  <MapContainer center={[41.0858, 8.3639 ]} zoom={13}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <MarkerClusterGroup>
  {markers.map(marker =>(<Marker position={marker.geocode}>
    <Popup>{markers.popUp}</Popup>
  </Marker>))}
  </MarkerClusterGroup>
  </MapContainer>
    </>
  );
}

export default Home;
