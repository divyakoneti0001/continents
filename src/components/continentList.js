import React from 'react';
import ContinentItem from './continentItem';


//component to display the list of continents
const ContinentList = ({continents,setCountry}) => {

  const listOfContinents = continents.map((continent)=>{
      return <ContinentItem continent={continent} setCountry={setCountry}></ContinentItem>
  })
    
        return(
            <div className="ui container" style={{marginTop:'20%'}}>
                <div className="continent-list">
                    <div className="list-content" style={{width:'100%'}}>
                    <div className="ui segment" style={{backgroundColor: '#f9fafb6e'}}>
                       <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <b style={{color:'black',textTransform:'uppercase'}}>LIST OF CONTINENTS OF WORLD</b>
                        </div>
                      </div>
                {listOfContinents}
                </div>
            </div>
            </div>
        )
    }

export default ContinentList
