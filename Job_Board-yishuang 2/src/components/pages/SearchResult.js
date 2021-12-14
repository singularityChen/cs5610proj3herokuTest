import React from 'react';
import '../../App.css';
import JobCard from '../jobDisplay/jobCard.js';
import Pagination from '../jobDisplay/Pagination';

export default function SearchResult() {
    // return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
    return <div>
        <div className="searchResult">
            <h3>Search Result for "Key word"</h3>
            <div className='jobcard'>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
        <Pagination />
    </div>;
}
