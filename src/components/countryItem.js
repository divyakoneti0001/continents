import React from 'react';
import './countryItem.css'


//component to display the country details of a continent
const CountryItem=({countries})=>{

    const countryList = countries.map((country)=>{
      return (
            <tr style={{backgroundColor:'rgba(67, 83, 111, 0.67)',color:'#d5cebd'}}>
                <td data-label="Country">{country.emoji}{country.name}</td>
                <td data-label="Capital">{country.capital}</td>
                <td data-label="Native">{country.native}</td>
                <td data-label="Currency">{country.currency}</td>
            </tr>
             )}
      )

    const mobCountry = countries.map((country)=>{
        return(
            
            <tr>
                <td>{country.emoji}{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.native}</td>
                <td>{country.currency}</td>
            </tr>
        )
    })

    return(
        <div>
        <div className="big-screen ui container">
            <table className="big-table ui celled striped table" style={{backgroundColor:'transparent'}}>
                <thead>
                    <tr>
                        <th>COUNTRY</th>
                        <th>CAPITAL</th>
                        <th>NATIVE</th>
                        <th>CURRENCY</th>
                    </tr>
                </thead>
                <tbody>
                {countryList}
                </tbody>
            </table>
        </div>
        <div className="mob-screen ui container">
            <table className="mob-table">
                <thead>
                    <tr>
                        <th>COUNTRY</th>
                        <th>CAPITAL</th>
                        <th>NATIVE</th>
                        <th>CURRENCY</th>
                    </tr>
                </thead>
                <tbody>
                    {mobCountry}
                </tbody>
           </table>
        </div>
    </div>
    )



}

export default CountryItem;