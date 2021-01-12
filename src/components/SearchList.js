import React from 'react';
import SearchItem from './SearchItem';
import './SearchList.css'

const SearchList = ({hits}) =>{
   const renderedList = hits.map((hits)=>{
        return (
            <div>
                <SearchItem  hits={hits}/>

            </div>
            
            );
    })

    return <div className=" Container-search">{renderedList}</div>
}

export default SearchList;