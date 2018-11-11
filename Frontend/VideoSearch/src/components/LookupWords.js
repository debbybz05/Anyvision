import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LookupWords extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      id:null,
      amgArtistId:null,
      entity:null,
      limit:null,
      sort:null,
      upc:null,
      amgAlbumId:null,
      amgVideoId:null,
      isbn:null,
    };

    this.handleartistId = this.handleartistId.bind(this);
    this.handleChangeAmgArtistId = this.handleChangeAmgArtistId.bind(this);
    this.handleChangeEntity = this.handleChangeEntity.bind(this);
    this.handleChangeLimit = this.handleChangeLimit.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeUpc = this.handleChangeUpc.bind(this);
    this.handleChangeAmgAlbumId = this.handleChangeAmgAlbumId.bind(this);
    this.handleChangeAmgVideoId = this.handleChangeAmgVideoId.bind(this);
    this.handleChangeIsbn = this.handleChangeIsbn.bind(this);
    this.search = this.search.bind(this); 
  }

  handleartistId(event) {
    this.setState({id: event.target.value});
  }
  handleChangeAmgArtistId(event) {
    this.setState({amgArtistId: event.target.value});
  }
  handleChangeEntity(event) {
    this.setState({entity: event.target.value});
  }
  handleChangeLimit(event) {
    this.setState({limit: event.target.value});
  }
  handleChangeSort(event) {
    this.setState({sort: event.target.value});
  }
  handleChangeUpc(event) {
    this.setState({upc: event.target.value});
  }
  handleChangeAmgAlbumId(event) {
    this.setState({amgAlbumId: event.target.value});
  }
  handleChangeAmgVideoId(event) {
    this.setState({amgVideoId: event.target.value});
  }
  handleChangeIsbn(event) {
    this.setState({isbn: event.target.value});
  }
  
  search(event) {
    let serachWords={
      id:this.state.id,
      amgArtistId:this.state.amgArtistId,
      entity:this.state.entity,
      limit:this.state.limit,
      sort:this.state.sort,
      upc:this.state.upc,
      amgAlbumId:this.state.amgAlbumId,
      amgVideoId:this.state.amgVideoId,
      isbn:this.state.isbn
    }
    this.props.search(serachWords);
  }
  render() {
    return (
      <div>
        <div className="row">
          <label>artist ID:</label>
          <input onChange={this.handleartistId} />
        </div>
        <div className="row">
          <label>AMG artist ID:</label>
          <input onChange={this.handleChangeAmgArtistId} />
        </div>
        <div className="row">
          <label>entity:</label>
          <input onChange={this.handleChangeEntity} />
        </div>
        <div className="row">
          <label>limit: (1 to 200)</label>
          <input onChange={this.handleChangeLimit} />
        </div>
        <div className="row">
          <label>sort:</label>
          <input onChange={this.handleChangeSort} />
        </div>
        <div className="row">
          <label>opc:</label>
          <input onChange={this.handleChangeUpc} />
        </div>
        <div className="row">
          <label>AMG Album ID:</label>
          <input onChange={this.handleChangeAmgAlbumId} />
        </div>
        <div className="row">
          <label>AMG Video ID:</label>
          <input onChange={this.handleChangeAmgVideoId} />
        </div>
        <div className="row">
          <label>isbn:</label>
          <input onChange={this.handleChangeIsbn} />
        </div>
        <button  className="btn" onClick={this.search}> 
          Search
        </button>
      </div>
    );
  }
}
LookupWords.propTypes = {
  search: PropTypes.func.isRequired
}
export default LookupWords;
