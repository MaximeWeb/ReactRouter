import '../styles/global.scss';
import { Link } from 'react-router-dom';
// import locations from '../data/locations.js';
// import LocationRow from '../components/LocationRow.jsx'

// import { useState } from 'react';

export default function Error() {

 
  
  return (
    <div className='errorDiv'>
     <p className='errorText'>404</p>
     <p className='errorText2'>Oups! La page que vous demandez n'existe pas.</p>
   <Link className='errorLinkHome' to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}