import React, { Component } from 'react';
import NavBar from '../components/navbar/NavBar';
import NetworksTable from '../components/networks_table/NetworksTable';


class NetworksPage extends Component {
    render() {
        return (
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <NavBar/>
                <main class="mdl-layout__content">
                    <div class="page-content">
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--4-col">
                                Networks!
                            </div>
                            <div class="mdl-cell mdl-cell--4-col">
                                <NetworksTable/>
                            </div>
                            <div class="mdl-cell mdl-cell--4-col">
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default NetworksPage;
