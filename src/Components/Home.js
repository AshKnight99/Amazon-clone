import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB658235929_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="1234876"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            rating={5}
          />
          <Product
            id="12344576"
            title="Kenwood kMix 051 500-Watt Stand Mixer (Raspberry Red)"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="12340876"
            title="Samsung Galaxy M31 (Space Black, 6GB RAM, 64GB Storage)"
            price={345.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71OxJeyywSL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="1214376"
            title="
            Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={109.59}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            rating={4}
          />
          <Product
            id="2597819"
            title="
            New Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Space Grey (Latest Model, 4th Generation)"
            price={445.79}
            image="https://images-na.ssl-images-amazon.com/images/I/71YxgZu73mL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="3759823"
            title="
            Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
            price={509.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
