import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";
import Spotify from "../../util/Spotify.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "Too Far From Home", artist: "Gina", album: "2manyTears", id: 111},
        {name: "County Girl", artist: "Howard", album: "Tequila Town", id: 222},
        {name: "Uber Man", artist: "Daniel", album: "Urban Gangster", id: 33}
      ],
      playlistName: "value of playlistName",
      playlistTracks: [
        {name: "Green Green Fields", artist: "Smith", album: "Happy Times", id: 123},
        {name: "Unforgettable", artist: "Lisa", album: "Lonely Loner", id: 456}, 
        {name: "Zippy Zebras", artist: "Kowalski", album: "Beautiful Africa", id: 789}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if ( tracks.find((savedTrack) => savedTrack.id === track.id )) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((theTrack)=> theTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }
  
  savePlaylist() {
    let tracks = this.state.playlistTracks;
    let trackUris = tracks.map( (currentTrack)=> currentTrack.uri);
    
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then((searchResults)=>{
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
