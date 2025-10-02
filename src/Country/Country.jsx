import React, { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
// basic System
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
        // 2nd system
        // setVisited(visited ? false : true);
        // 3rd system
        // setVisited(!visited)
        handleVisitedCountry(country)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {
                    visited ? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;