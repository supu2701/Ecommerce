import React , { Component } from "react";
import fire from "./config/fire";
import './style.css';

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div>
        <section>
        <header>
          <h2><a href="#" className="logo">DIGI-MART</a></h2>
          <div className="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Info</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        </header>
        <div className="content">
          <div className="info">
            <h2>Welcome to <br /><span>Digital Mart!</span></h2>
            <p>An e-commerce shopping website!</p>
            <button className="info-btn" onClick={this.logout}>Logout</button>
          </div>
        </div>
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
        </div>
        </section>
      </div>
    )
}
}
export default Home;