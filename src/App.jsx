
import { useEffect, useState } from 'react';
import './App.css'
import useFetch from './assets/hooks/useFetch';
import getRandomNumber from './utils/getRandomNumber';
import { LocationInfo } from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import FormSearch from './components/FormSearch';

function App() {

  const randomId = getRandomNumber(126)

  const [idLocation, setIdLocation] = useState(randomId)

  
  const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;

  const [ location, getApiLocation, hasError ] = useFetch(URL);

  useEffect(()=>{

    getApiLocation()

  },[idLocation]);

  

  return (

    <>
      <div className='container'>
        <div className='container-img'>
          
        </div>
        <h1 className='container-title'>Rick and morty App</h1>
        <FormSearch setIdLocation={setIdLocation}/>
        {
          hasError
            ?<h2>❌ solo numeros</h2>
            :(
                <>
              
                  <LocationInfo
                  location={location}
                  />

                  <div className="resident-container">
                    {
                      location?.residents.map(url =>(
                      <ResidentCard
                      url={url}
                      key={url}
                      />))
                    }
                  </div>           
                </>
              )
        }
        

      </div>
    </>
  )
}

export default App
