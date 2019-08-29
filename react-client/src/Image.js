import React, { Component } from 'react';
import axios from 'axios';
import './upload-image.css';
import { storage } from './firebase-config';
import DefaultImg from './assets/default-img.jpg';
import NavbarPage from './Navbar';
import { Container } from 'react-bootstrap';


const API_URL = "http://localhost:4000/api";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firebaseImage: DefaultImg
    }
  }

  setDefaultImage(uploadType) {
    if (uploadType === "firebase") {
      this.setState({
        firebaseImage: DefaultImg
      });
    } else {
      console.log(`Issue with Default Image uploadType`);
      };
  }

  // function to upload image once it has been captured
  uploadImage(e, method) {
    let imageObj = {};

    if (method === "firebase") {
      let currentImageName = "firebase-image-" + Date.now();

      let uploadImage = storage.ref(`images/${currentImageName}`).put(e.target.files[0]);

      uploadImage.on('state_changed',
        (snapshot) => { },
        (error) => {
          alert(error);
        },
        () => {
          storage.ref('images').child(currentImageName).getDownloadURL().then(url => {

            this.setState({
              firebaseImage: url
            });

            // store image object in the database
            imageObj = {
              imageName: currentImageName,
              imageData: url
            };

            axios.post(`${API_URL}/uploadImage/uploadbase`, imageObj)
              .then((data) => {
                if (data.data.success) {
                  alert("Image has been successfully uploaded using firebase storage");
                  this.setDefaultImage("firebase");
                }
              })
              .catch((err) => {
                alert("Error while uploading image using firebase storage")
                this.setDefaultImage("firebase");
              });
          })
        })
    }
  }

  render() {
    return (
      <Container>
        <NavbarPage />
        <div className="main-container">
          <h3 className="main-heading">Image Upload App</h3>

          <div className="image-container">

            <div className="process">
              <h4 className="process__heading">Process: Using Firebase Storage</h4>
              <p className="process__details">Upload image to Firebase storage and retrieve a reference to the image</p>

              <input type="file" className="process__upload-btn" onChange={(e) => this.uploadImage(e, "firebase")} />
              <img src={this.state.firebaseImage} alt="" className="process__image" />
            </div>

          </div>
        </div>
      </Container>
      
    );
  }
}

export default Image;