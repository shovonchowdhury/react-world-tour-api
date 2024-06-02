import { useEffect, useState } from "react"
import Country from "./Country";
import './countries.css'
export default function Countries(){

    const [countries,setcountries]=useState([]);
    const [countriesvisited, setcountriesvisited]=useState([]);

    useEffect(()=>{

        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])

    const handleVisitedCountries=(country)=>{

        const newcountriesvisited=[...countriesvisited,country];
        setcountriesvisited(newcountriesvisited);
    }

    return(

        <div>
            <p>Countries Number:{countries.length}</p>
            <h3>Number of visited country:{countriesvisited.length}</h3>
            <ul className="visited-country-container-grid">
                {
                    countriesvisited.map(country=>(
                        <div className="visited-country-container">
                            <li>{country.name.common}</li> 
                            <img className="visited-country-img" src={country.flags.png}></img>
                        </div>
                    ))
                }
            </ul>
            <div className="country-container">
                {
                    countries.map(country=>  <Country key={countries.name} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    )
}