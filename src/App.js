import React, {useEffect, useState} from "react";
import {Route,Switch ,useHistory} from"react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ContinentList from './components/continentList';
import CountryItem from './components/countryItem';
import Loader from './components/Loader';
import './App.css';


//Graphql query used to fetch data
const CONTINENT_DATA = gql`
  {
    continents{
      name
      countries{
              name
              native
              capital
              currency
              emoji
      }
    }
  }
  `;

//The parent component
export default function App() {
    const history = useHistory();
    const [country,setCountryObj] = useState(null);
    const { loading: loadingData, error: errorInData, data: continentData } = useQuery(
    CONTINENT_DATA
  );

 //To set the value of countries list
  const setCountry = (value) =>{
    setCountryObj(value)
    history.push("/country");
  }


  const refresh = () =>{
    
    window.location.reload();
    console.log('page refreshed')
  }

 
  //To retrieve data from localStorage on refresh
  useEffect(()=>{
    const valueOfObj = window.localStorage.getItem("continent-data");
    setCountryObj(JSON.parse(valueOfObj))
  },[])
 
  //To save data to localstorage 
  useEffect(()=>{
    window.localStorage.setItem("continent-data",JSON.stringify(country))
  })
  

  //Displaying loader while fetching the data
  if (loadingData) return (
   <Loader></Loader>
  );

  //Display message if there is an error
  if (errorInData) {
    
    return (
      <div className="ui container" style={{marginTop:'20%'}}>
        <div className="error-box">
        <p ><b>There's an error: {errorInData.message}</b></p>
        <button onClick = {refresh}>Refresh</button>
       </div>
       </div>
    )
  };
 

  //On successful data loading
  return (
      <div>
        <Switch>
            <Route 
             exact path = '/'
             render={(props) => (
              <ContinentList {...props} setCountry = {setCountry} continents={continentData.continents} />
            )}>
            </Route>

            <Route 
             exact path = '/country'
             render={(props) => (
              <CountryItem {...props} countries={country} />
            )}>
            </Route> 
        </Switch>
      </div>
    );
  
 
}