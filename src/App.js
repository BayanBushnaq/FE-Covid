import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Countries from "./components/Countries";
import "bootstrap/dist/css/bootstrap.min.css";
import Records from "./components/Records";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Countries" element={<Countries/>}/>
      <Route path="/myRecords" element={<Records/>}/>
    </Routes>
    </>
  );
}

export default App;
