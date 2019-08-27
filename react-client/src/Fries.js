import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardImg, CardText, CardSubtitle} from 'reactstrap';
import NavbarPage from './Navbar';
// import { CardText } from 'react-bootstrap/Card';

class Fries extends Component {
    render() {
      const fries = [
        {"fry": "The Asian Wanna Cajun",
        "description": "Oriental spice dipped with Southern sass",
        "imageUrl": "images/fries/cajun.png",
        "price": "$3.48"},
        {"fry": "The Goldilocks",
        "description": "Mmmm, give me some of them curls",
        "imageUrl": "images/fries/curly.png",
        "price": "$2.37"},
        {"fry": "Donkey Waffles",
        "description": "And in the morning I'm making Waffles!...waffle fries",
        "imageUrl": "images/fries/waffle.png",
        "price": "$2.98"},
        {"fry": "Dodger Fries",
        "description": "Batter up, slugga!",
        "imageUrl": "images/fries/dodger.png",
        "price": "$4.78"},
        {"fry": "Chi-pottle Fry Dippin'",
        "description": "That one time Chipotle kept it G-Rated",
        "imageUrl": "images/fries/chipotle.png",
        "price": "$3.78"},
        {"fry": "The Lone Star",
        "description": "What's a steak without me?",
        "imageUrl": "images/fries/steak.png",
        "price": "$2.37"}
      ]
      return (
        <Fragment>
          <NavbarPage />
          <Container>
            <Row>
              {fries.map((fry) => (
                <Col md="4">
                  <Card className='mt-1'>
                    <CardBody className="text-center">
                      <CardTitle className="h5"> {fry.fry} </CardTitle>
                      <CardImg className="fry-img" src={ fry.imageUrl } />
                      <CardSubtitle className="h6"> { fry.price } </CardSubtitle>
                      <CardText> { fry.description } </CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))}

            </Row>
          </Container>
        </Fragment>


      // const { fryData } = this.props;
        // <Container>
        //   <fryBody fryData={fryData} />
        // </Container>
      )
    }
  }

  // const fryBody = props => {
  //   const fries = props.fryData.map((fry, index) => {
  //       <Col md={3} key={index}>
  //         <h1>{fry.fry}</h1>
  //         <image src={fry.imageUrl} />
  //       </Col>
  //   })
  //   return <Row> {fries} </Row>
  // }

  export default Fries