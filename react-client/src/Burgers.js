import React, {Component} from 'react';
import NavbarPage from './Navbar';
import {Container, Row, Col, Card, CardBody, CardTitle, CardImg, CardText, CardSubtitle} from 'reactstrap';
// import { CardText } from 'react-bootstrap/Card';

class Burger extends Component {
    render() {
      const burgers = [
        {"burger": "No Mess Express",
        "description": "In a hurry and want a legend in a jiffy? Be sure to use two hand -- there's simply no messing around",
        "imageUrl": "images/burgers/no-mess.png",
        "price": "$6.98"},
        {"burger": "Slammin Jalapeño",
        "description": "Be ready to blow fire fellow dragon",
        "imageUrl": "images/burgers/jalapeno.png",
        "price": "$7.37"},
        {"burger": "I Want My Baby Back BBQ",
        "description": "Reclaim your love with the sultry crunch of tanginess",
        "imageUrl": "images/burgers/bbq.png",
        "price": "$6.98"},
        {"burger": "Loco Expo",
        "description": "Don't worry, we know...if you're here...you're a little loco",
        "imageUrl": "images/burgers/loco.png",
        "price": "$8.78"},
        {"burger": "The Moley to the Holy Guacamole",
        "description": "Ever wonder what made Nacho Libre fly? Look no further luchador",
        "imageUrl": "images/burgers/guacamole.jpeg",
        "price": "$7.78"},
        {"burger": "Funky Mushy",
        "description": "Watch out! The fungi got some funk!",
        "imageUrl": "images/burgers/mushroom.png",
        "price": "$5.37"}
      ]
      return (
        <Container>
          <NavbarPage />
          <Row>
            {burgers.map((burger) => (
              <Col md="4">
                <Card className='mt-1'>
                  <CardBody className="text-center">
                    <CardTitle className="h5"> {burger.burger} </CardTitle>
                    <CardImg className="burger-height" src={ burger.imageUrl } />
                    <CardSubtitle className="h6"> { burger.price } </CardSubtitle>
                    <CardText> { burger.description } </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}

          </Row>
        </Container>


      // const { burgerData } = this.props;
        // <Container>
        //   <BurgerBody burgerData={burgerData} />
        // </Container>
      )
    }
  }

  // const BurgerBody = props => {
  //   const burgers = props.burgerData.map((burger, index) => {
  //       <Col md={3} key={index}>
  //         <h1>{burger.burger}</h1>
  //         <image src={burger.imageUrl} />
  //       </Col>
  //   })
  //   return <Row> {burgers} </Row>
  // }

  export default Burger