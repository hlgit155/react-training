import React from 'react'
import HomeContent from '../../../components/HomeComponents/HomeContent';
import kidsPage from "../../../database/kids-page.json"



const KidsHome =() => {
    return (
      <>
       <HomeContent homeData={kidsPage}/>
      </>
    );
  };
  
  export default KidsHome;
  