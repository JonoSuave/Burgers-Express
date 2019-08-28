import React, { Fragment } from 'react'
import Burger from './Burgers';
import NavbarPage from './Navbar';
import {Container} from 'react-bootstrap';
import axios from 'axios';



class App extends React.Component {
  state = {
    burgers: [],
    fries: [],
    shakes: [],
    users: []
  };
  componentDidMount() {
    axios.get("http://localhost:4000/api/burgers")
        .then(response => {
          this.setState({ burgers: response.data })
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
  };

  render() {
    return (
      <Fragment>
        <NavbarPage />
        <Container>
          <Burger />
        </Container>
      </Fragment>


    )
  }
}
export default App