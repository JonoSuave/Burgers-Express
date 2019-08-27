import React, { Fragment } from 'react'
import Burger from './Burgers';
import NavbarPage from './Navbar';
import {Container} from 'react-bootstrap';


class App extends React.Component {
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