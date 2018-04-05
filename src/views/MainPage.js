import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import D3Example from '../components/D3Example';

class MainPage extends Component {
    render() {
        return (
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <NavBar/>
                <main class="mdl-layout__content">
                    <div class="page-content">
                        <D3Example/>
                    </div>
                </main>
            </div>
        )
    }
}

export default MainPage;
