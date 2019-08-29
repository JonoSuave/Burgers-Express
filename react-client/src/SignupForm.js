import React, {Component} from 'react';
import axios from 'axios';

class SignupForm extends Component {
  // state = {
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   password: '',
  //   email: ''
  // }
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    axios.post("http://localhost:4000/api/users", { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>

          <label>First Name: 
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} />
          </label><br/>

          <label>Last Name: 
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
          </label><br/>

          <label>Username: 
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this)} />
          </label><br/>   

          <label>Password: 
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
          </label><br/>
          
          <label>Email: 
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
          </label><br/>

          <input type="submit" value="Submit" />
        </form>
      )
        
  }
}

export default SignupForm