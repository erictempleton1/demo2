import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
      return (
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Title</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <Link to="/networks">
                <a class="mdl-navigation__link" href="/networks">Networks</a>
              </Link>
            </nav>
          </div>
        </header>
      );
    }
  }

  export default NavBar;