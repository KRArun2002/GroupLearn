import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import QuesListing from "./component/QuesListing";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <QuesListing />
    </div>
  );
}

export default App;
