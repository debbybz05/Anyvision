import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as utils from '../constants/utils'

class SearchWords extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      term:null,
      country:null,
      media:null,
      entity:null,
      attribute:null,
      limit:null,
      lang:null,
      entityList:utils.entityLists[0],
      attributeList: utils.attributeLists[0] 
    };
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleChangeMedia = this.handleChangeMedia.bind(this);
    this.handleChangeEntity = this.handleChangeEntity.bind(this);
    this.handleChangeAttribute = this.handleChangeAttribute.bind(this);
    this.handleChangeLimit = this.handleChangeLimit.bind(this);
    this.handleChangeLang = this.handleChangeLang.bind(this);
    this.search = this.search.bind(this); 
  }

  handleChangeTerm(event) {
    this.setState({term: event.target.value});
  }
  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }
  handleChangeMedia(event) {
    this.setState({media: event.target.value});
    this.setState({entityList: utils.entityLists[utils.mediaList.indexOf(event.target.value)]});
    this.setState({attributeList:  utils.attributeLists[utils.mediaList.indexOf(event.target.value)]}); 
  }
  handleChangeEntity(event) {
    this.setState({entity: event.target.value});
  }
  handleChangeAttribute(event) {
    this.setState({attribute: event.target.value});
  }
  handleChangeLimit(event) {
    this.setState({limit: event.target.value});
  }
  handleChangeLang(event) {
    this.setState({lang: event.target.value});
  }
  search(event) {

    let term=this.state.term ?this.state.term.replace(" ", "+") : null;
    let serachWords={
      term:term,
      country:this.state.country,
      media:this.state.media,
      entity:this.state.entity,
      attribute:this.state.attribute,
      limit:this.state.limit,
      lang:this.state.lang
    }
    this.props.search(serachWords);
  }
  render() {
    return (
      <div>
        <div className="row">
          <label>term:</label>
          <input onChange={this.handleChangeTerm} />
        </div>
        <div className="row">
          <label>country:</label>
          <input onChange={this.handleChangeCountry} />
        </div>
        <div className="row">
          <label>media:</label>
          <select onChange={this.handleChangeMedia}>
            <option value="all">all</option>
            <option value="movie">movie</option>
            <option value="podcast">podcast</option>
            <option value="musicVideo">musicVideo</option>
            <option value="audiobook">audiobook</option>
            <option value="shortFilm">shortFilm</option>
            <option value="tvShow">tvShow</option>
            <option value="software">software</option>
            <option value="ebook">ebook</option>
          </select>
        </div>
        <div className="row">
          <label>entity:</label>
          <select onChange={this.handleChangeEntity}>
              { this.state.entityList ? this.state.entityList.map((item, index) => 
                <option key= {index} value={item}>{item}</option>  
              ) 
              : null}
          </select>
        </div>
        <div className="row">
          <label>attribute:</label>
          <select onChange={this.handleChangeAttribute}>
            { this.state.attributeList ? this.state.attributeList.map((item, index) => 
              <option key= {index} value={item}>{item}</option>  
            ) 
            : null}
          </select>
        </div>
        <div className="row">
          <label>limit: (1 to 200)</label>
          <input onChange={this.handleChangeLimit} />
        </div>
        <div className="row">
          <label>lang:</label>
          <select onChange={this.handleChangeLang}>
            <option value="en_us">en_us</option>
            <option value="ja_jp">ja_jp</option>
          </select>
        </div>
        <button  className="btn" onClick={this.search}> 
          Search
        </button>
      </div>
    );
  }
}
SearchWords.propTypes = {
  search: PropTypes.func.isRequired
}
export default SearchWords;
