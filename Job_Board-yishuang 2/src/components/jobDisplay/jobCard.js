import React, { Component } from "react";
import './jobCard.css';

export default class JobCard extends Component {
    render() {
        return (
            <div className="card">
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div className ="card-body">
                <h5 className ="card-title">SDE Intern 2022 Summer</h5>
                <p className ="card-text">Company: Microsoft</p>
                <p className ="card-text">Location: Seattle, WA</p>
                <a href="/detail" className ="btn btn-primary">Details</a>
                </div>
            </div>
        );
    }
}
