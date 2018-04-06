import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
      return (
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
            </nav>
          </div>
        </header>
      );
    }
  }

  export default NavBar;