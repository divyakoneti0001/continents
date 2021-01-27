import React from 'react';
import './continentItem.css';


//Individual component of continent which combines to form list
const ContinentItem = (props) => {

const onClick = () => {
    props.setCountry(props.continent.countries)
}

    return(
        
        <div className="continent-line ui segment" style={{backgroundColor:'#43536fab'}} onClick={onClick}>
            <span class="tooltiptext">Click here</span>
            <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <b style={{color:'#d5cebd',textTransform:'uppercase'}}>{props.continent.name}</b>
            </div>
        </div>
      



    )
}

export default ContinentItem;

