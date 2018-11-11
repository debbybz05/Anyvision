import React, { Component } from 'react';
import  SearchResult from './SearchResult.js'
import PropTypes from 'prop-types'

class SearchResults extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    if(!this.props.videos)
      return(<div/>);
    return (
      <div>
        <h3 className="title">SEARCH RESULTS: </h3>
        <ul className="results">
          { this.props.videos ? this.props.videos.map((item, index) => 
            <SearchResult key= {index} video= {item} /> 
          ) 
          : null}
        </ul>
      </div>
    );
  }
}
SearchResults.propTypes = {
  videos: PropTypes.array
}
export default SearchResults;
