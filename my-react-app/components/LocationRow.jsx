import '../styles/home.css';

export const LocationRow = ({location}) => {

  
  return (<div key={location.id}>
   
    <div className='cards'> 
      
  <img className='imgCards' src={location.cover} alt={location.title} width="200" />
      
  </div> 
  <p className='titleCards'>{location.title}</p>
    </div>
     
  
  )
    
 
  
}

export default LocationRow