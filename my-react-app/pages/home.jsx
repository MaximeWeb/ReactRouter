import '../styles/home.css';
import locations from '../data/locations.js';
import LocationRow from '../components/LocationRow.jsx'

// import { useState } from 'react';

export default function Home() {

  let display = <div>No Locations</div>;
  
  if (locations.length)
    display = locations.map((location) => <LocationRow key={location.id} location={location} />)
 
  return (
    <div>
      <div className='bannerHome'>
        <img className="bannerImg" src='../public/IMG.png'></img>
        <p className='bannerTitle'>Chez vous, partout et ailleurs</p>
      </div>
      <div className='grid body'>
          {display} 
      </div>
    
     
    </div>
  );
}
