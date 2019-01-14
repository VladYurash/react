import React, { Component } from 'react';
import './index.sass';
import logo from './logo.svg'
import user from './user.png'

class Header extends Component {
  render() {
    return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
            <img src={logo} alt="logo"></img>
        </div>

        <nav className="header__nav">
          <ul>
            <li><a href="#" className="header__link">About me</a></li>
            <li><a href="#" className="header__link">Relationships</a></li>
            <li><a href="#" className="header__link">Requirements</a></li>
            <li><a href="#" className="header__link">Users</a></li>
            <li><a href="#" className="header__link">Sign Up</a></li>
          </ul>
        </nav>

        <div className="header__user">
            <div className="header__user-info">
                <p className="header__user-name">Superstar</p>
                <p className="header__user-mail">Superstar@gmail.com</p>
            </div>
            <div className="header__user-logo">
                <img src={user} alt="user"></img>
            </div>
            <a href="#" className="header__user-exit"></a>

        </div>
      </div>

    </div>

    );
  }
}

export default Header;