import React from 'react'
import PropTypes from 'prop-types'
import Reward from '../svg/reward.svg'
import Card from '../svg/card.svg'
import Insurance from '../svg/insurance.svg'
import NPS from '../svg/nps.svg'
import Perks from '../svg/perks.svg'
import Logo from '../logo139.svg'
import { Link } from "react-router-dom";

export const Header = (props) => {
  const linkstyle = {
    textDecoration: 'none',
    color: 'inherit'
  }

  return (
    <nav className="navbar  navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="#"><img src={Logo} alt="" /> <Link to="/" style={linkstyle} >{props.title}</Link> 
        </a>
        <button className="navbar-toggler mynavtoggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav justify-content-end navbar-nav d-flex  me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </a>
              <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#"> <img src={Reward} alt="" /> Rewards</a></li>
                <li><header className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><img src={Insurance} alt="" /> Insurance</a></li>
                <li><header className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><img src={Card} alt="" /> Food card</a></li>
                <li><header className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><img src={NPS} alt="" /> Corporate NPS</a></li>
                <li><header className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><img src={Perks} alt="" /> Perks</a></li>
              </ul>
            </li>
            <Link to="/pricing" style={linkstyle}>
            <li className="nav-item">
              <a className="nav-link">Pricing</a>
            </li>
            </Link>
            <Link to="/aboutus" style={linkstyle}>
            <li className="nav-item">
              <a className="nav-link">About Us</a>
            </li>
            </Link>
            <Link to="/login" style={linkstyle}>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            </Link>
            <Link to="/singup" style={linkstyle}>
            <li className="nav-item">
              <a className="nav-link" href="#">Singup</a>
            </li>
            </Link>
          </ul>
          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>: ""}
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps={
    title: "Your title here",
}
Header.propTypes={
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
