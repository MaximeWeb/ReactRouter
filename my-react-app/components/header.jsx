import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Header() {

  

// })

  return (
  
    

    <div className='flex between header'>
    <img className="logoKAZA" src='../public/LOGO.png'></img>
    <div className='flex between nav'>
          <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
    </div>
    </div>
  );
}
