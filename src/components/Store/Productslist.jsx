import React from "react";


const Productslist = ({item,productName,headig,prising}) => {
  return (
    <>
      <div className="w-[400px] h-[500px] border">
        <h5>{productName}</h5>
        <h2>{headig}</h2>
        <h3>{prising}</h3>
        <img src={item} alt="ipad" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

      </div>
    </>
  );
};

export default Productslist;
