import HomeCompartments from "../../components/Home/HomeCompartments";
import pageData from "../../database/home/default-home.json";

function MainHome() {
  return (
    <>
      {pageData.content.map((row, rowIndex) => {
        return <HomeCompartments key={rowIndex} stack={row.stack} />;
      })}
    </>
  );
}

export default MainHome;
