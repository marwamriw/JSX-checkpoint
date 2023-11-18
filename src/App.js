import React from 'react';
import './App.css';
import product from "./Product";
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
          <Name name={product.name} />
          {/* import the component price*/}
          <Price price={product.price} />
          {/* import the component description*/}
          <Description description={product.description} />
          {/*  import the component image*/}
          <Image image={product.image} />
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
