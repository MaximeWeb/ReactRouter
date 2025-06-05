import '../styles/global.scss';
import { Link } from 'react-router-dom';

export default function Header() {


  return (
  
    

    <div className='flex between header'>
    <img className="logoKAZA" src='/ReactRouter/public/LOGO.png'></img>
    <div className='flex between nav'>
          <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
    </div>
    </div>
  );
}
