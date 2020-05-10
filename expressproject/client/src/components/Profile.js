import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


class Profile extends Component {

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
          login: decoded.login,
          email: decoded.email
        })
    }

  render() {
    return (
     <h1>Great job you're connected now !</h1>
    )
  }
}

export default Profile