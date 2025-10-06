import React, { useState } from "react";

function App() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(null);

  const calculateDiscount = (category) => {
    let discountPercent = 0;

    switch (category) {
      case "A":
        discountPercent = 5;
        break;
      case "B":
        discountPercent = 3;
        break;
      case "C":
        discountPercent = 2;
        break;
      case "D":
        discountPercent = 1;
        break;
      default:
        discountPercent = 0;
    }

    const discountAmount = (price * discountPercent) / 100;
    setDiscount(discountAmount);
  };

  return (
    <div className="box">
      <h2>Discount Calculator</h2>
      <input
        type="number"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br/><br/>
      <button onClick={()=>calculateDiscount("A")}>Category A(5%)</button>
      <button onClick={()=>calculateDiscount("B")}>Category B(3%)</button>
      <button onClick={()=>calculateDiscount("C")}>Category C(2%)</button>
      <button onClick={()=>calculateDiscount("D")}>Category D(1%)</button>
      {discount!==null&&(<h3>Discount Amount: Rs.{discount}</h3>)}
    </div>
  );
}
export default App;