import React, { Component } from "react";


class Header extends Component {

    constructor(props) {
        super();
    }
    render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <div className="container-fluid">
          <div className="navbar-header offset-1">
          <a className="navbar-brand" href=""><h2>GroupLearn</h2></a>
          </div>

          <ul className="nav navbar-nav navbar-right mr-5">
          <li><a href="" class="nav-link btn btn-sm btn-primary text-white mr-2" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="" class="nav-link btn btn-sm btn-primary text-white" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h3 className="display-5">Stack Overflow</h3>
            <p className="lead">Hot Questions</p>
            
          </div>
        </div>
      </div>
        

    );
  }
}

export default Header;
