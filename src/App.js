import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";

function App() {
  //const [isFetched, toggleIsFetched] = useState(false);
  const [roverData, setRoverData] = useState(null);
  //let x = "hihi";

  let marsPhotos = [];

  if (!roverData) {
    const url =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=todxgdPdiBs2X0ubyJ93uCVwQRpimKbBjPE6TFrH";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setRoverData(data);
      });
  }

  marsPhotos = roverData;

  console.log("roverData:");
  console.log(roverData);
  console.log(marsPhotos);

  return (
    <div className="container">
      <p> New App </p>

      {/*when roverData is true & roverData.photos is true
            run the map function that gives the JSX
          */

      roverData &&
        roverData.photos &&
        roverData.photos.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.id}</p>
            </div>
          );

          //return(<div key={i}> <img src={item.img_src}> </div>)
          //<p key={i}>{item}</p>
        })}
    </div>
  );
}

export default App;
