import React, {useState} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { response } from 'express';

export default function Home() {
  
  return (
    <>
      <div className='home'>
        <h1 className='title'>Job Hunter</h1>  
        <form className="row g-3">
            <div className="col-sm-2">
              <label for="searchBar" className="visually-hidden">Search Bar</label>
            </div>
            <div className="col-sm-8">
              <input type="text" id="searchBar" class="form-control" placeholder="Key word..." />
            </div>
            <div className="col-sm-2">
            <Link
              to='/result'
              className='nav-links'
            >
              <button type="button" className="btn btn-primary mb-3" >Search</button>
              </Link>
            </div>
        </form>
      </div>
    </>
  );
}
