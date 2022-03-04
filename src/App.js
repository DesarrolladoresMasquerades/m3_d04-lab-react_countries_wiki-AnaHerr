//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import countriesData from "./countries.json"
import { Routes, Route } from "react-router-dom";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {useState, useEffect} from 'react';
import axios from "axios";

function App() {
  
  const apiUrl = "https://ih-countries-api.herokuapp.com/countries"
  const [countriesList, setCountries]= useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) =>{
      setCountries(response.data)});
  }, []);

  return (
    <div className="App">
     <Navbar />
     <CountriesList countries={countriesList}/>
     
     <Routes>
        {countriesList.map((country)=>
        <Route 
        exact
        path= {country.alpha3Code}
        element={<CountryDetails country={country} countries={countriesList}/> } />
        )}
     </Routes>
    </div>
  );
}

export default App;
