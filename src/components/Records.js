import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect,useState } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
function Records() {
  const [records,setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/covid_app/")
      .then((result) => {
        setRecords(result.data);
     
      })
      .catch((err) => {});
  }, []);

  const deletehandler = (item) => {
    const url=`http://127.0.0.1:8000/api/v1/covid_app/${item.id}`
    axios
      .delete(url)
      .then((result) => {
        axios
      .get("http://127.0.0.1:8000/api/v1/covid_app/")
      .then((result) => {
        setRecords(result.data);
     
      })
      .catch((err) => {});

      })
      .catch((err) => {
      });
    

  };

  return (
    <>
      <Header />
      <NavBar />
      <h5 style={{ marginLeft: "480px", marginTop: "30px",paddingBottom:'20px' }}>
        COVID19 Statistics for All Countries
      </h5>
      {records.length > 0 ? 
      <Row xs={1} md={3} className="g-4">
        {records.map((item,idx) => (
          <Col key={idx}>
            <Card style={{marginLeft:'30px',marginRight:'30px',borderLeftColor:'#E7497A',borderLeftWidth:'17px',borderBottomWidth:'7px'}}>
              <Card.Body>
                <Card.Title style={{color:'#E7497A'}}>Country: {item.country}</Card.Title>
                <Card.Text>
                  Date : {item.date}
                </Card.Text>
                <hr></hr>
                <Button variant="primary" onClick={() => deletehandler(item)} style={{marginLeft:'110px'}}>DELETE</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> : <h2 style={{textAlign:'center',color:'#E7497A'}}>No Available Records ¯\_(ツ)_/¯</h2>
}

      <Footer />
    </>
  );
}
export default Records;
