import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types'

class SearchResult extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showDetails: false
    }
    this.showDetails = this.showDetails.bind(this);
  }
  showDetails(){
    if(!this.isDelete)
      this.setState({ showDetails: true });
  }
  render() {
    if (this.state.showDetails ) {
      return <Redirect  to={{pathname: "/VideoDetails", state: { video: this.props.video }}} />;
    }
    return (
      <div>
        <li className="result" onClick={this.showDetails}>
        <div>
            {this.props.video.artistName}  {this.props.video.trackName}
        </div>
          
        </li> 
      </div>
    );
  }
}
SearchResult.propTypes = {
  video: PropTypes.object
}
export default SearchResult;