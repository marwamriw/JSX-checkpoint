import React from "react";
import product from "./product";

const Image = () => {
    return <img src={product.image} alt="Product" style={{ maxWidth: "50%" }} />;
};

export default Image;