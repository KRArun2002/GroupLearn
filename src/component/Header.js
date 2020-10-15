import React, { Component } from "react";


class Header extends Component {

    constructor(props) {
        super();
    }
    render() {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
          <div class="container-fluid">
          <div class="navbar-header offset-1">
          <a class="navbar-brand" href="#"><h2>GroupLearn</h2></a>
          </div>

          <ul class="nav navbar-nav navbar-right mr-5">
          <li><a href="#" class="nav-link btn btn-sm btn-primary text-white mr-2" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#" class="nav-link btn btn-sm btn-primary text-white" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
          </div>
        </nav>
        <div class="jumbotron jumbotron-fluid text-center">
          <div class="container">
            <h3 class="display-5">Stack Overflow</h3>
            <p class="lead">Hot Questions</p>
            
          </div>
        </div>
      </div>
        

    );
  }
}

export default Header;