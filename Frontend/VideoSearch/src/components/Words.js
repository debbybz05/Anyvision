import React, { Component } from 'react';
import  SearchWords from './‏‏‏‏SearchWords.js'
import  LookupWords from './LookupWords.js'
import PropTypes from 'prop-types'
import * as utils from '../constants/utils'

class Words extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      search:"search"
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this); 
  }
  handleSearch(event) {
    this.setState({search: event.target.value});
  }
  search(serachWords) {
    let url="";
    if(this.state.search=="lookup")
      url=utils.url+'Lookup/';
    else
      url=utils.url+'Search/';
    this.props.search(url, serachWords);
  }
  render() {
    return (
      <div>
        <div className="row">
          <select onChange={this.handleSearch}>
            <option value="search">search</option>
            <option value="lookup">lookup</option>
          </select>
        </div>
        {this.state.search == "lookup" 
          ?<LookupWords search={this.search}> </LookupWords>
          :<SearchWords search={this.search}> </SearchWords>
        }
      </div>
    );
  }
}
Words.propTypes = {
  search: PropTypes.func.isRequired
}
export default Words;
