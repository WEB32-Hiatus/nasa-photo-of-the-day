import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Title from './Components/Title';
import Image from './Components/Image';
import Explanation from './Components/Explanation';
import Date from './Components/Date';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  background-color: #191970;
`;

const TitleWrapper = styled.h1`
  color: #DC143C;
  margin-top: 20px;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 100vh;
  width: 50vw;
`;

const ExplanationWrapper = styled.p`
  color: #00FFFF;
`;

const DateWrapper = styled.p`
  color: #00FFFF;
`;

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(function() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=4pZJJ7Fssrfy5cFV4xz2SksnJJwV13ZoMdnc4KW3').then(function(response) {
      setNasaData(response.data)
      console.log(response.data)
    })
    .catch(function(error) {
      console.log('error', error);
    })
  }, []);

  return (
    <ContainerWrapper>
      <div className="App">
        <TitleWrapper>
          <Title title={nasaData.title}/>
        </TitleWrapper>
        <Img src={nasaData.url} alt={nasaData.explanation}/>
>       <ExplanationWrapper>
          <Explanation explanation={nasaData.explanation}/>
        </ExplanationWrapper>
        <DateWrapper>
          <Date date={nasaData.date}/>
        </DateWrapper>
      </div>
    </ContainerWrapper>
  );
}

export default App;
