import React from "react";
import Products from "./Products";

const Store = () => {
  return (
    <>
      <section className="pt-20">
        <div className="px-40 py10">
          <div className="mb-10">
            <h1 className="text-[#1D1D1F] text-3xl max-w-96">
              <b>Store.</b>{" "}
              <span className="text-[#6E6E73]">
                The best way to buy the products you love.
              </span>
            </h1>
          </div>


          <div>
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
