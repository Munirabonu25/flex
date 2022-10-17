import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./header/index";
import "./index.css";
import Navbar from "./navbar/index";
import App from "./cards/index";
import Footer from "./footer/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Header />
      <App />
    </div>
    <Footer />
  </React.StrictMode>
);

