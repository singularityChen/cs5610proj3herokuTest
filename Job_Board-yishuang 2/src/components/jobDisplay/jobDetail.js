import React, { Component } from "react";
import './jobDetail.css';
import jsonData from './testdata.json';
import { Link } from "react-router-dom";

export default class JobDetail extends Component {
    render() {
    var favButtonName = "btn btn-danger btn-lg";
    var favContent = "Favorite";
    if(jsonData.isFav===true){
        favButtonName = "btn btn-secondary btn-lg";
        favContent = "Unfavorite";
    }
        return (
            <div className="outer">
                <div className="inner">
                    <form>
                        <div className="mb-3 row">
                            <label for="staticTitle" className="col-sm-12 col-form-label">Job Title:  {jsonData.title}</label>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticCompany" className="col-sm-12 col-form-label">Company:  {jsonData.company}</label>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticLocation" className="col-sm-12 col-form-label">Location:  {jsonData.location}</label>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticDate" className="col-sm-12 col-form-label">Post Date:  {jsonData.date}</label>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticDescription" className="col-sm-12 col-form-label">Description:  {jsonData.description}</label>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-12 col-form-label">Contact Email:  {jsonData.email}</label>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticWeb" className="col-sm-12 col-form-label">Webpage:  {jsonData.weblink}</label>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-offset-2 col-sm-2">
                                <button type="button" className={favButtonName} >{favContent}</button>
                            </div>
                            <div className="col-sm-offset-2 col-sm-2">
                                <button type="button" className="btn btn-info btn-lg" >Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}
