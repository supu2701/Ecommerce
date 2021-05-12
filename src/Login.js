import React , { Component } from "react";
import fire from "./config/fire";
import './Login.css';
import log from './img/log.svg';
import register from './img/register.svg';

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}

login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signupbtn(){
  document.querySelector(".container").classList.add("sign-up-mode");
}
signinbtn(){
  document.querySelector(".container").classList.remove("sign-up-mode");
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

render()
{
    return(

        <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
              </div>
              <button onClick={this.login} className="btn solid">Login</button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
              </div>
              <button onClick={this.signup} className="btn">Signup</button>
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Get ready to have an awesome shopping experince with us through this E-commerce website. To get started please Sign-up below.
            
              </p>
              <button className="btn transparent" onClick={this.signupbtn} id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src={log} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Already a user ?</h3>
              <p>
                So, you already had a great shopping experince with us? Cool! so you don't need to register again. Just sign-in to our E-commerce site.
              </p>
              <button className="btn transparent" onClick={this.signinbtn} id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
        </div>
      </div>
      
    )
}
}
export default Login;