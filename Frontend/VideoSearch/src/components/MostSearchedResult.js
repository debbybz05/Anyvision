import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MostSearchedResult extends Component {
  constructor (props) {
    super(props);
  }

  render() {

    return (
      <div>
        <li className="result" >
        <div>
            {this.props.mostSearched._id}  
        </div>
          
        </li> 
      </div>
    );
  }
}
MostSearchedResult.propTypes = {
  mostSearched: PropTypes.object
}
export default MostSearchedResult;