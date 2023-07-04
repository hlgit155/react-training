import homeCompartmentData from "../../database/page-images/home-compartment.json";
import HomeCompartment from "../../components/HomeCompartment/HomeCompartment";

function MainHome() {

  return (
    <>
      {  homeCompartmentData.content.map((row)=>{
    console.log("row",row)
    return <HomeCompartment data={row}></HomeCompartment>
  })}
    </>
  )

  
}

export default MainHome;
