import React, { Fragment } from 'react'
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
        <Container>
        <NavbarPage />

          <div id="home-page">
            <h1 id="title-message">Welcome to Burgers Express</h1>
            <div id="subNav">
              <ul id="home-list-style">
                <li className="favicon">
                  <img src="./images/favicons/nav_icon_burger.png" alt="" />
                  <a className="menu-text" href="/burgers">Burgers</a>
                </li>

                <li className="favicon">
                  <img src="./images/favicons/nav_icon_fries.png" alt="" />
                  <a className="menu-text" href="/fries">Fries</a>
                </li>

                <li className="favicon">
                  <img src="./images/favicons/nav_icon_cup.png" alt="" />
                  <a className="menu-text" href="/shakes">Shakes</a>
                </li>
              </ul>
            </div>
          </div>

        </Container>
      </Fragment>


    )
  }
}
export default App