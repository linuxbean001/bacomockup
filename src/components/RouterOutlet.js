import React, { Component } from 'react';
import SideNavBar from './SideNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Document1 from './documents/document1';
import Document2 from './documents/document2';
import Document3 from './documents/document3';

class App extends Component {
    render() {
        return (
            <div >
                <Router>
                    <section id="main-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <SideNavBar />
                                <div className="tab-content">
                                    <Switch>
                                        <Route exact path='/' component={Document1} />
                                        <Route path='/document1' component={Document1} />
                                        <Route path='/document2' component={Document2} />
                                        <Route path='/document3' component={Document3} />
                                    </Switch>
                                </div>
                                <div>jai ram ji ki</div>
                            </div>
                        </div>
                    </section>

                </Router>

            </div>
        );
    }
}

export default App;
