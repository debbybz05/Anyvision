import React, { Component } from 'react';
import  MostSearchedResult from './MostSearchedResult.js'
import PropTypes from 'prop-types'

class MostSearchedResults extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    if(!this.props.mostSearchedes)
      return(<div/>);
    return (
      <div>
        <h3 className="title">MOST SEARCH RESULTS: </h3>
          <ul className="results">
            {this.props.mostSearchedes ?this.props.mostSearchedes.map((item, index) => 
              <MostSearchedResult key= {item._id} mostSearched= {item} /> 
            ) 
          : null}
          </ul>
      </div>
    );
  }
}
MostSearchedResults.propTypes = {
  mostSearchedes: PropTypes.array
}
export default MostSearchedResults;