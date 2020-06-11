import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Title from './Components/Title';
import Image from './Components/Image';
import Explanation from './Components/Explanation';
import Date from './Components/Date';
import Copyright from './Components/Copyright';


function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(function() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=4pZJJ7Fssrfy5cFV4xz2SksnJJwV13ZoMdnc4KW3').then(function(response) {
      setNasaData(response.data)
    })
    .catch(function(error) {
      console.log('error', error);
    })
  }, []);

  return (
    <div className="App">
      <Title title={nasaData.title}/>
      <Image src={nasaData.url} alt={nasaData.explanation}/>
      <Explanation explanation={nasaData.explanation}/>
      <Date date={nasaData.date}/>
      <Copyright copyright={nasaData.copyright}/>
    </div>
  );
}

export default App;
