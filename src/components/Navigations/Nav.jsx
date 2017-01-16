import React from 'react'

const Nav = () => (
    <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#page-top">ReactJS Academy</a>
            </div>
            <ul className="nav navbar-nav pull-right">
                <li className="hidden-xs">
                    <a href="#about">About the library</a>
                </li>
                <li>
                  <button  className="btn btn-lg btn-outline">
                    <i className="fa fa-graduation-cap"></i> <span>Training</span>
                  </button>
                </li>
            </ul>
        </div>
    </nav>
)

export default Nav