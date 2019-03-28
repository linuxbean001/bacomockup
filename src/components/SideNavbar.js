import React, { Component } from 'react';
import { Link, Route, NavLink } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="tab-button">
                <div className="upload-bar">
                    <h5>Files</h5>
                    <span><a href="#">Upload <i className="fa fa-upload"></i></a></span>
                </div>
                <ul className="nav nav-pills nav-stacked" style={{ padding: '10px' }}>
                    <li ><NavLink to={'/document1'} activeClassName="active" data-toggle="pill">Document #1 <span>Me, Dustin</span></NavLink></li>
                    <li><NavLink to={'/document2'} data-toggle="pill">Document #2 <span>Me, Dustin</span></NavLink></li>
                    <li><NavLink to={'/document3'} data-toggle="pill">Document #3 <span>Me, Dustin</span></NavLink></li>

                </ul>
            </div>
        );
    }
}

export default App;
