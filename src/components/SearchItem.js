import React from 'react';
import './SearchItems.css';

const SearchItem = ({hits})=>{
    return (
    <div className="SearchItem-container">
        <div>
        {hits.title}<a href={hits.url} className="url-s">({hits.url})</a>
        </div>
        <div className="under-line">
        <span>
            {hits.points}  points 
        </span> 
        <span>
            | {hits.num_comments} comments
        </span> 
       
        </div>
    </div>
    );
}

export default SearchItem;