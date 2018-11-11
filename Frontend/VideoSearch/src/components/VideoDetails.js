import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Player } from 'video-react';

class videoDetails extends Component {
  constructor (props) {
    super(props);
    this.state = {
      close: false
    }
    this.close = this.close.bind(this);
  } 
  close(){
     this.setState({ close: true });
  }
  render() {
     if (this.state.close) {
      return <Redirect  to={{pathname: "/Search"}} />;
    }

   return(
      <div className="details">
        <h3 className="title">FULL DETAILS: </h3>
        <div className="text-details">
          {
            this.props.location.state.video.previewUrl 
            ?<div className="row" className="video-player">
              <Player  ref="player" poster={this.props.location.state.video.artworkUrl100} src={this.props.location.state.video.previewUrl} />
            </div> 
           :null
          }
          <br/><br/><br/>
          {this.props.location.state.video.wrapperType 
            ?<div className="row">
              <label> wrapperType: {this.props.location.state.video.wrapperType}</label>
            </div> :null}
          {this.props.location.state.video.kind 
            ?<div className="row">
              <label> kind: {this.props.location.state.video.kind}</label>
            </div> :null}
          {this.props.location.state.video.artistId 
            ?<div className="row">
              <label> artistId: {this.props.location.state.video.artistId}</label>
            </div> :null}
          {this.props.location.state.video.amgArtistId 
            ?<div className="row">
              <label> amgArtistId: {this.props.location.state.video.amgArtistId}</label>
            </div> :null}
          {this.props.location.state.video.artistType 
            ?<div className="row">
              <label> artistType: {this.props.location.state.video.artistType}</label>
            </div> :null}
          {this.props.location.state.video.artistLinkUrl 
            ?<div className="row">
              <label> artistLinkUrl: </label>
              <a target="_blank" href={this.props.location.state.video.artistLinkUrl} >{this.props.location.state.video.artistLinkUrl}</a>
            </div> :null}
          {this.props.location.state.video.primaryGenreId 
            ?<div className="row">
              <label> primaryGenreId: {this.props.location.state.video.primaryGenreId}</label>
            </div> :null}
          {this.props.location.state.video.collectionId 
            ?<div className="row">
              <label> collectionId: {this.props.location.state.video.collectionId}</label>
            </div> :null}
          {this.props.location.state.video.trackId 
            ?<div className="row">
              <label> trackId: {this.props.location.state.video.trackId}</label>
            </div> :null}
          {this.props.location.state.video.artistName 
            ?<div className="row">
              <label> artistName: {this.props.location.state.video.artistName}</label>
            </div> :null}
          {this.props.location.state.video.collectionName 
            ?<div className="row">
              <label> collectionName: {this.props.location.state.video.collectionName}</label>
            </div> :null}
             {this.props.location.state.video.collectionType 
            ?<div className="row">
              <label> collectionType: {this.props.location.state.video.collectionType}</label>
            </div> :null}
          {this.props.location.state.video.trackName 
            ?<div className="row">
              <label> trackName: {this.props.location.state.video.trackName}</label>
            </div> :null}
          {this.props.location.state.video.collectionCensoredName 
            ?<div className="row">
              <label> collectionCensoredName: {this.props.location.state.video.collectionCensoredName}</label>
            </div>:null}
          {this.props.location.state.video.trackCensoredName 
            ?<div className="row">
              <label> trackCensoredName: {this.props.location.state.video.trackCensoredName}</label>
            </div>:null}
          {this.props.location.state.video.artistViewUrl 
            ?<div className="row">
              <label> artistViewUrl:</label>
              <a target="_blank" href={this.props.location.state.video.artistViewUrl} >{this.props.location.state.video.artistViewUrl}</a>
            </div> :null}
          {this.props.location.state.video.collectionViewUrl 
            ?<div className="row">
              <label> collectionViewUrl:</label>
              <a target="_blank" href={this.props.location.state.video.collectionViewUrl} >{this.props.location.state.video.collectionViewUrl}</a>
            </div> :null}
          {this.props.location.state.video.trackViewUrl 
            ?<div className="row">
              <label> trackViewUrl:</label>
              <a target="_blank" href={this.props.location.state.video.trackViewUrl} >{this.props.location.state.video.trackViewUrl}</a>
            </div> :null}
          {this.props.location.state.video.artworkUrl100 
            ?<div className="row">
              <label> artworkUrl100:</label>
              <img src={this.props.location.state.video.artworkUrl100} />
            </div> :null}
          {this.props.location.state.video.collectionPrice 
            ?<div className="row">
              <label> collectionPrice: {this.props.location.state.video.collectionPrice}</label>
            </div> :null}
          {this.props.location.state.video.trackPrice 
            ?<div className="row">
              <label> trackPrice: {this.props.location.state.video.trackPrice}</label>
            </div> :null}
          {this.props.location.state.video.releaseDate 
            ?<div className="row">
              <label> releaseDate: {this.props.location.state.video.releaseDate}</label>
            </div> :null}
          {this.props.location.state.video.collectionExplicitness 
            ?<div className="row">
              <label> collectionExplicitness: {this.props.location.state.video.collectionExplicitness}</label>
            </div> :null}
          {this.props.location.state.video.trackExplicitness 
            ?<div className="row">
              <label> trackExplicitness: {this.props.location.state.video.trackExplicitness}</label>
            </div> :null}
          {this.props.location.state.video.discCount 
            ?<div className="row">
              <label> discCount: {this.props.location.state.video.discCount}</label>
            </div> :null}
          {this.props.location.state.video.discNumber 
            ?<div className="row">
              <label> discNumber: {this.props.location.state.video.discNumber}</label>
            </div> :null}
          {this.props.location.state.video.trackCount 
            ?<div className="row">
              <label> trackCount: {this.props.location.state.video.trackCount}</label>
            </div> :null}
          {this.props.location.state.video.trackNumber 
            ?<div className="row">
              <label> trackNumber: {this.props.location.state.video.trackNumber}</label>
            </div> :null}
          {this.props.location.state.video.trackTimeMillis 
            ?<div className="row">
              <label> trackTimeMillis: {this.props.location.state.video.trackTimeMillis}</label>
            </div> :null}
          {this.props.location.state.video.country 
            ?<div className="row">
              <label> country: {this.props.location.state.video.country}</label>
            </div> :null}
           {this.props.location.state.video.currency 
            ?<div className="row">
              <label> currency: {this.props.location.state.video.currency}</label>
            </div> :null}
           {this.props.location.state.video.primaryGenreName 
            ?<div className="row">
              <label> primaryGenreName: {this.props.location.state.video.primaryGenreName}</label>
            </div> :null}
           {this.props.location.state.video.isStreamable 
            ?<div className="row">
              <label> isStreamable: {this.props.location.state.video.isStreamable}</label>
            </div> :null}
            {this.props.location.state.video.copyright 
            ?<div className="row">
              <label> copyright: {this.props.location.state.video.copyright}</label>
            </div> :null}
            <button className="btn" onClick={this.close}>
            Back
          </button>
        </div>
      </div> 
    );
  }
}

export default videoDetails;