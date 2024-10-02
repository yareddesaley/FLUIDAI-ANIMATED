import React from "react";
import Intro from "./components/Intro";
import join from "./assets/join.png";
import Fluidai from "./components/Fluidai";
import Ourfeature from "./components/Ourfeature";
import Ourfeaturetwo from "./components/Ourfeaturetwo";
import Ourfeaturethree from "./components/Ourfeatuethree";
import Modernlife from "./components/Modernlife";
import Questionare from "./components/Questionare";
import Join from "./components/Join";
import Ourfeaturefour from "./components/Ourfeaturefour";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Intro />

      <Fluidai />

      <div className="bg-black text-white">
        <Ourfeature />
        <Ourfeaturetwo />
        <Ourfeaturethree />
        <Ourfeaturefour />
        <Modernlife />
        <Questionare />
      </div>

      <div
        className="bg-cover bg-no-repeat  "
        style={{ backgroundImage: `url(${join})` }}
      >
        <Join />
        <Footer />
      </div>
    </div>
  );
};

export default App;
