import error404 from "./../assets/page-not-found-error-404.jpeg";

function NotFound() {
    return (
      <div style={{ width: "100%" }}>
        <img src={error404} alt="error404" width="100%" />
      </div>
    );
  }
  
  export default NotFound;
  