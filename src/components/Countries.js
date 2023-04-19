import React, { useEffect,useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
function Countries(){
    const [summary,setSummary] = useState([])
    const addToRecord = (item) => {
      const url='http://127.0.0.1:8000/api/v1/covid_app/'
      const obj={
        country:item.Country,
        confirmed:item.TotalConfirmed,
        deaths:item.TotalDeaths,
        recovered:item.TotalRecovered,
        date:item.Date,
      }
      axios
        .post(url,obj)
        .then((result) => {
        })
        .catch((err) => {
        });
      console.log(obj)
  
    };
    useEffect(() => {
      axios
       
        .get("https://api.covid19api.com/summary")
        .then((result) => {
          setSummary(result.data.Countries);
          
        })
        .catch((err) => {});
    }, []);
   


    return(<>
    <Header/>
    <NavBar/>
    <h5 style={{marginLeft:"480px",marginTop:"30px"}}>COVID19 Statistics for All Countries</h5>
    
    <Row xs={1} md={3} className="g-4">
        {summary.map((item,idx) => (
          <Col key={idx}>
            <Card style={{marginLeft:'30px',marginRight:'30px',borderLeftColor:'#E7497A',borderLeftWidth:'17px',borderBottomWidth:'7px'}}>
              <Card.Body>
                <Card.Title style={{color:'#E7497A'}}>Country: {item.Country}</Card.Title>
                <Card.Text>
                  Number of Confirmed Cases : {item.TotalConfirmed}
                </Card.Text>
                <Card.Text>
                  Number of deaths Cases : {item.TotalDeaths}
                </Card.Text>
                <Card.Text>
                  Number of recovered Cases : {item.TotalRecovered}
                </Card.Text>
                <Card.Text>
                  Date : {item.Date}
                </Card.Text>
                <hr></hr>
                <Button variant="primary" onClick={() => addToRecord(item)} style={{marginLeft:'60px'}}>ADD TO MY RECORDS</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    

    <Footer/>
    </>)
}
export default Countries