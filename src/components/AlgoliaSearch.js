import React from 'react';
import SearchList from './SearchList'
import './AlgoliaSearch.css'


class AlgoliaSearch extends React.Component{

   state = {
       hits:[],
       
    }
   
        

    search(key){
        console.log(key)
        fetch('https://hn.algolia.com/api/v1/search?query='+key).then((data)=>{
            data.json().then((resp)=>{
                this.setState({hits:resp.hits})
                console.log(resp.hits.length)    
            })
        }) 

    }

    render(){
        return(
            <div>

            <div className="background-search">

            <div className="Search-bar">
                <div id="logo">
                    <img alt="gg" src={'https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png'}/>
                </div >
                <div id="label-holder">
                <label>Search <br/>Hacker News</label>

                </div>
                <div id="Search-i">
                <input className="Search-input" type="text" onChange={(e)=>this.search(e.target.value)} />
                <SearchList hits={this.state.hits} />
                

                </div>
            </div>
                
            </div>
            <div className="search-result">
            <div >
                    
                </div>
            </div>
            </div>
        )
    }
}

export default AlgoliaSearch;