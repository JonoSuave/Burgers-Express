import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardImg, CardText, CardSubtitle} from 'reactstrap';
import NavbarPage from './Navbar';
// import { CardText } from 'react-bootstrap/Card';

class Shakes extends Component {
    render() {
      const Shakes = [
        {"shake": "Hula",
        "description": "Need a little coco?...Need a little pineapple?",
        "imageUrl": "images/shakes/pinaColada.png",
        "price": "$2.98"},
        {"shake": "La Fresa Strawberry",
        "description": "Does one really need more than this warmth of red",
        "imageUrl": "images/shakes/strawberry.png",
        "price": "$2.37"},
        {"shake": "White Owl",
        "description": "Vainilla with a swirly flirt of cinnamon",
        "imageUrl": "images/shakes/vanilla.png",
        "price": "$3.58"},
        {"shake": "If I Were an Oreo",
        "description": "You know you're gonna have to share that, right?",
        "imageUrl": "images/shakes/oreo.png",
        "price": "$2.98"},
        {"shake": "Nutty Green",
        "description": "When Almond and Pistachio finally met",
        "imageUrl": "images/shakes/pistachioAlmond.png",
        "price": "$3.78"},
        {"shake": "El Choco-Loco-Late",
        "description": "You think you can handle me??",
        "imageUrl": "images/shakes/chocolate.png",
        "price": "$2.37"}
      ]
      return (
        <Fragment>
          <Container>
          <NavbarPage />
            <Row>
              {Shakes.map((fry) => (
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
      )
    }
  }

  export default Shakes