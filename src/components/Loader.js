import React from 'react';


//Component to display the loader
const Loader = () =>{

    return(
    <div class="loader-class ui segment" style={{backgroundColor:'transparent' ,marginTop:'30%' ,border:'none',boxShadow :'none'}}>
        <div class="ui active dimmer" style={{backgroundColor:'transparent'}}>
        <div class="ui massive text loader" style={{backgroundColor:'transparent'}}>Loading</div>
        </div>
        <p></p>
    </div>
    )
}

export default Loader;