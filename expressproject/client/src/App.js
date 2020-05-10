import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Billets from './components/Billets'
import AddBillet from './components/AddBillet';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <Route exact path="/" component={Landing} />
//           <div className="container">
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/profile" component={Profile} />
//           </div>
//         </div>
//       </Router>
//     )
//   }
// }
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/billets")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  });
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/profile" component={Profile} />
          <Route exact path="/billets" render={() => <Billets posts={posts} />} />
          <Route exact path="/billets/add" component={AddBillet} />
        </div>
      </div>
    </Router>

  );
}


export default App