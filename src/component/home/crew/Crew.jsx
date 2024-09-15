import React,{useContext,useState,} from 'react';
import { DataContext } from '../datastore/DataStore';
import DouglasImg from '../../../assets/crew/image-douglas-hurley.png';
import MarkImg from '../../../assets/crew/image-mark-shuttleworth.png';
import VictorImg from '../../../assets/crew/image-victor-glover.png';
import AnoushehImg from '../../../assets/crew/image-anousheh-ansari.png';

export default function Crew() {

    // getting the imported image to use as keys of object
    const crewselectedImg = {
        'Douglas Hurley': DouglasImg,
        'Mark Shuttleworth': MarkImg,
        'Victor Glover': VictorImg,
        'Anousheh Ansari': AnoushehImg
    };

    const crewData = useContext(DataContext)

    //  state to set the default active crew 
    const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley")

    //  check data existense and set for use
    if(!crewData || !crewData.crew){
        return(<div> crew data loading...</div>)
    }

    // to find the active crew
    let currentCrew = crewData.crew.find(
        person => person.name === selectedCrew
    );
    if(!currentCrew){
        return <div>no current crew found</div>
    }

    //  nav button to implement the navigation process to each crew 
    const crewNavBtn = (
        <ul>
            {Object.keys(crewselectedImg).map((crewPersonnel, index) => {
                return (
                    <li key={index} onClick={() => setSelectedCrew(crewPersonnel)}
                        className= {selectedCrew ===crewPersonnel?'crew-active':'crew-btn'}>
                    </li>
                );
            })}
        </ul>
    );

    const crewMain = (
        <article className='crew-flex'>
            <div className='crew-text'>
                <div id="crew-text-flex">
                    <p className='crew-role'>{(currentCrew.role).toUpperCase()}</p>
                    <h2>{(currentCrew.name).toUpperCase()}</h2>
                    <p>{currentCrew.bio}</p>
                </div>
                {crewNavBtn}
            </div>
            <div className='crew-img'>
                <img src={crewselectedImg[currentCrew.name]} alt="" />
            </div>
        </article>
    )

    return (
        <section className='crew'>
            <p id="crew-light-header">
                <span style={{marginRight:'24px'}}>02</span>
                MEET YOUR CREW
            </p>
            {crewMain}
        </section>
    )
}