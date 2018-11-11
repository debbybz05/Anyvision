import React, { Component } from 'react';
import  SearchResults from './SearchResults.js'
import  Words from './Words.js'
import MostSearchedResults from './MostSearchedResults'
import { connect } from 'react-redux'
import {fetchMostSearched, fetchSearch} from '../actions/';

class Search extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    var {search, videos, mostSearchedes, getMostSearched} =this.props;
    return (
      <div className="search">
        <div className="search-text">
          <h3 className="title">SEARCH: </h3>
          <Words search={search}/>
          <SearchResults videos={videos}/>
          <button  className="most-btn" onClick={getMostSearched}>most searched words</button>
          <MostSearchedResults mostSearchedes={mostSearchedes}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {  
    videos: state.search.videos,
    mostSearchedes: state.search.mostSearchedes
  };
};
const SearchConnect = connect(
  mapStateToProps,
  {search: fetchSearch, getMostSearched:fetchMostSearched}
)(Search)
export default SearchConnect