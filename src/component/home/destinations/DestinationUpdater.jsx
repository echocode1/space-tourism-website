import React,{useContext,useState} from 'react';
import { DataContext } from '../datastore/DataStore';
import moonImage from '../../../assets/destination/image-moon.png'
import marsImage from '../../../assets/destination/image-mars.png'
import europaImage from '../../../assets/destination/image-europa.png'
import titanImage from '../../../assets/destination/image-titan.png'

export default function DestinationUpdater() {

  const destinationImages = {
    Moon: moonImage,
    Mars: marsImage,
    Europa: europaImage,
    Titan: titanImage
  }

  // useable data from dataStore
  const destinationData =useContext(DataContext);

  // hook to set the default active destination
  const [selectedDestination, setSelectedDestination] = useState('Moon');

  // condition to pass once comfirmed data is available and return an async wait response
  if(!destinationData || !destinationData.destinations){
    return <div>Loading...</div>
  }

  // find current destination of the data above to display active destination
  let currentDestination = destinationData.destinations.find(
    (route) => route.name === selectedDestination
  );

  //navlist implementation to click and access each destination access
  const navList = (
    <ul className='destination-nav-list'>
      {Object.keys(destinationImages).map((dest, index) => {
        return(
          <li key={index}>
            <span onClick={() => setSelectedDestination(dest)}
              className={ selectedDestination === dest ? 'visible': 'destination-btn'}
            >
              {dest.toUpperCase()}
            </span>
          </li>
        )
      })}
    </ul>
  )

  // implementing datas to update html to display the active destination
  let location = (
    <div className="destination-main">
      <div className="destination-img">
        <img src={destinationImages[currentDestination.name]} 
          alt={`${currentDestination.name}-image`} 
        />
      </div>
      <div className='destination-text'>
        {navList}
        <h2>{(currentDestination.name).toUpperCase()}</h2>
        <p className='nav-description'>{currentDestination.description}</p>
        <hr />
        <div id="flex">
          <div className='destination-distance'>
            <p className='distance-description'>AVG. DISTANCE</p>
            <p className='distance-description-fig'>{currentDestination.distance}</p>
          </div>
          <div className='destination-period'>
            <p className='period-description'>EST. TRAVEL TIME</p>
            <p className='time'>{currentDestination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <article className='destination'>
      <p id='destination-light-header'>
        <span style={{marginRight: '30px'}}>
          01
        </span>  PICK YOUR DESTINATION
      </p>
      {currentDestination && location}
    </article>
  )
}