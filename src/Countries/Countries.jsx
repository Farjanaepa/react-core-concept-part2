import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountry = (country) => {
      console.log('handle visited country ', country);
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);

    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    return (
        <div>
           <h1>In The Countries : {countries.length}</h1>
           <h3>Total Country Visited : {visitedCountries.length} </h3>
           <div  className='countries'>
          {
            countries.map(country => <Country 
               key={country.cca3.cca3} 
               country={country}
               handleVisitedCountry={handleVisitedCountry}></Country>)
          }
          </div> 
        </div>
    );
};

export default Countries;