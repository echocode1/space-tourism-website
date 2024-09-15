import React,{useContext,useState} from 'react';
import { DataContext } from '../datastore/DataStore';
import launcImg from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import Spaceport from '../../../assets/technology/image-spaceport-portrait.jpg';
import SpaceCapsule from '../../../assets/technology/image-space-capsule-landscape.jpg';

export default function Technologies() {

    //  manuually import image for use && to use the relative object key for navigation through datas
    const technologyImages = {
        "Launch vehicle" : launcImg,
        "Spaceport" : Spaceport,
        "Space capsule" : SpaceCapsule
    }

    //  storing fetched data for use
    const technologyData = useContext(DataContext);

    //  state to choose a default active
    const [selectedTechnology,setSelectedTechnology] = useState("Launch vehicle");

    //  check data availabilty and return response
    if(!technologyData || !technologyData.technology){
        return <div>Technology data loading...</div>
    }
    
    //  getting current element 
    const currentTechData = technologyData.technology.find(
        (tech) => tech.name === selectedTechnology
    )
    if(!currentTechData){
        return <div>current tech data not found</div>
    }

    //  looping through tech data with the object key of manually imported img
    const techNavBtn = (
        <ul>
            {Object.keys(technologyImages).map((techinfo, index) => {
                return(
                    <li key={index} 
                        onClick={() => setSelectedTechnology(techinfo)}
                        className={selectedTechnology === techinfo ? 'tech-active' :'tech-btn'}
                    >{index + 1}</li>
                )
            })}
        </ul>
    )

    // retrieving html
    const techInnerHTML = (
        <article className='tech-grid'>
            <div className="tech-img">
                <img style={{maxWidth:'100%'}} src={technologyImages[currentTechData.name]} 
                    alt={`${currentTechData.name}-img`} 
                />
            </div>
            <div className="tech-text-flex">
                {techNavBtn}
                <div id='tech-flex-description'>
                    <div className="tech-header">
                        <p id='tech-light-head'> THE TERMINOLOGY...</p>
                        <p id='tech-bold-header'>{(currentTechData.name).toUpperCase()}</p>
                    </div>
                    <p className='tech-description'>
                        {currentTechData.description}
                    </p>
                </div>
            </div>
        </article>
    )

  return (
    <div className='tech'>
        <p id='tech-light-header'>
            <span style={{marginRight:'24px'}}>03</span>
            SPACE LAUNCH 101
        </p>
        {techInnerHTML}
    </div>
  )
}