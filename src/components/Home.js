import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

function Home() {
  const [country, setCountry] = useState([]);
  const [total, setTotal] = useState([]);
  const handleRecords = (e) => {
    e.preventDefault();
    const url = `https://api.covid19api.com/country/${e.target.country.value}/status/confirmed?from=${e.target.startDate.value}T00:00:00Z&to=${e.target.endDate.value}T00:00:00Z`
    console.log(url);
    axios
      .get(url)
      .then((result) => {
        setCountry(result.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/world/total")
      .then((result) => {
        setTotal(result.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      {/* cards for the total confirmed, deaths and recovered cases. */}
      <h6
        style={{
          marginTop: "17px",
          marginLeft: "570px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        World Total Statistics
      </h6>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{ backgroundColor: "#E7497A",border:'10px' ,marginLeft:'40px'}}>
            <Card.Body>
              <Card.Title>TotalconFirmed: {total.TotalConfirmed}</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ backgroundColor: "#E7497A",border:'10px'  }}>
            <Card.Body>
              <Card.Title>TotalconFirmed: {total.TotalDeaths}</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ backgroundColor: "#E7497A",border:'10px' ,marginRight:'40px' }}>
            <Card.Body>
              <Card.Title>TotalconFirmed: {total.TotalRecovered}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/*calender to get statistics for a specific country */}
      <h6
        style={{
          marginTop: "40px",
          marginLeft: "520px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        get statistics for a specific country
      </h6>
      <form style={{ marginLeft: "420px",paddingBottom:'40px' }} onSubmit={handleRecords}>
        <input type="text" name="country" defaultValue="Jordan"></input>&nbsp;
        <input type="date" name="startDate" defaultValue="2020-04-04"></input>&nbsp;
        <input type="date" name="endDate" defaultValue="2020-04-12"></input>&nbsp;
        <button style={{ backgroundColor: "blue" }}>Search </button>
        
      </form>

      <Row xs={1} md={3} className="g-4">
        {country.map((item,idx) => (
          <Col key={idx}>
            <Card style={{marginLeft:'30px',marginRight:'30px',borderLeftColor:'#E7497A',borderLeftWidth:'17px',borderBottomWidth:'7px'}}>
              <Card.Body>
                <Card.Title style={{color:'#E7497A'}}>Date: {item.Date}</Card.Title>
                <Card.Text>
                  Number of Confirmed Cases : {item.Cases}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Footer />
    </>
  );
}
export default Home;
