import React from 'react';
import './App.css';
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Container, Card } from "react-bootstrap";
import "./Style.css";

{/*  the root component */}
const App = () => {
  const firstName = "The Most Super Texture Of Cream Blush "; 
  {/* the container */}
  return (
    <Container className="container">
      {/*  the card */}
      <Card     className="card">
        <Card.Body className="cardBody">
          {/* import the  object of product */}
          {/* import the component name*/}
          <Name  />
          {/* import the component price*/}
          <Price  />
          {/* import the component description*/}
          <Description  />
          {/*  import the component image*/}
          <Image  />
        </Card.Body>
      </Card>
    {/* display a meesage below a card*/}
      <p className="Greeting" >
        Hello, {firstName ? firstName : "there"}!
        {firstName && <img src="texture.jpg" alt="Your Image" style={{ maxWidth: "100px", marginLeft: "25px" }} />}
      </p>
    </Container>
  );
};

export default App;
