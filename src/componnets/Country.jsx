import { useEffect, useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries}) => {
    const {name,flags,population,area}=country;

    const [visited,setvisited]=useState(false);

    const isVisited=()=>{
        setvisited(!visited);
    }

    // let visited=false;
    // const isVisited=()=>{
    //     if(visited)
    //         visited=false;
    //     else
    //         visited=true;
    // }


    
    return (
        <div className={`style ${visited && 'visited-style'}`}>
            <p>Name:{name?.common}</p>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}km</p>
            <button onClick={isVisited} className='button-color'>{visited ? 'Visited' : 'Going'}</button>
            
            {visited ? ' visited this country' : ' Not visited this country'}
            <br /> <br />
            <button onClick={()=>{handleVisitedCountries(country)}} className='button-color'>Mark as visited</button>

            
            
        </div>
        
    );
};

export default Country;