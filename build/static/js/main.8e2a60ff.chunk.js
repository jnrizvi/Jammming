(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),i=a(8),c=a.n(i),o=(a(15),a(2)),l=a(3),u=a(5),h=a(4),m=a(1),d=a(6),p=(a(16),a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={searchTerm:""},a.search=a.search.bind(Object(m.a)(a)),a.handleTermChange=a.handleTermChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"search",value:function(){this.props.onSearch(this.state.searchTerm)}},{key:"handleTermChange",value:function(e){this.setState({state:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),s.a.createElement("button",{className:"SearchButton"},"SEARCH"))}}]),t}(s.a.Component)),f=(a(18),a(19),a(20),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).addTrack=a.addTrack.bind(Object(m.a)(a)),a.removeTrack=a.removeTrack.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderAction",value:function(){return this.props.isRemoval?s.a.createElement("button",{onClick:this.removeTrack},"-"):s.a.createElement("button",{onClick:this.addTrack},"+")}},{key:"addTrack",value:function(e){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(e){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Track"},s.a.createElement("div",{className:"Track-information"}))}}]),t}(s.a.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TrackList"},this.props.tracks.map(function(t){return s.a.createElement(f,{track:t,key:t.id,onAdd:e.props.onAdd,isRemoval:e.props.isRemoval,onRemove:e.props.onRemove})}))}}]),t}(s.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"SearchResults"},s.a.createElement("h2",null,"Results"),s.a.createElement(v,{tracks:this.props.searchResults,onAdd:this.props.onAdd}))}}]),t}(s.a.Component),y=(a(21),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleNameChange=a.handleNameChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Playlist"},s.a.createElement("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),s.a.createElement(v,{tracks:this.props.playlistTracks,isRemoval:!0,onRemove:this.props.onRemove}),s.a.createElement("button",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),t}(s.a.Component)),k={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout(function(){return n=""},1e3*a),window.history.pushState("Access Token",null,"/"),n}var r="https://accounts.spotify.com/authorize?client_id=".concat("9b2163229c13412ab81f78eba4000f01","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000/");window.location=r},search:function(e){return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){return e.json()}).then(function(e){return e.tracks?e.tracks.items.map(function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}}):[]})},savePlaylist:function(e,t){if(e&&t.length){var a,n=k.getAccessToken(),r={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:r}).then(function(e){return e.json()}).then(function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:r,method:"POST",body:JSON.stringify({name:e})}).then(function(e){return e.json()}).then(function(e){var n=e.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:r,method:"POST",body:JSON.stringify({uris:t})})})})}}},T=k,O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={searchResults:[{name:"Too Far From Home",artist:"Gina",album:"2manyTears",id:111},{name:"County Girl",artist:"Howard",album:"Tequila Town",id:222},{name:"Uber Man",artist:"Daniel",album:"Urban Gangster",id:33}],playlistName:"value of playlistName",playlistTracks:[{name:"Green Green Fields",artist:"Smith",album:"Happy Times",id:123},{name:"Unforgettable",artist:"Lisa",album:"Lonely Loner",id:456},{name:"Zippy Zebras",artist:"Kowalski",album:"Beautiful Africa",id:789}]},a.addTrack=a.addTrack.bind(Object(m.a)(a)),a.removeTrack=a.removeTrack.bind(Object(m.a)(a)),a.updatePlaylistName=a.updatePlaylistName.bind(Object(m.a)(a)),a.savePlaylist=a.savePlaylist.bind(Object(m.a)(a)),a.search=a.search.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.find(function(t){return t.id===e.id})||(t.push(e),this.setState({playlistTracks:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=t.filter(function(t){return t.id!==e.id}),this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map(function(e){return e.uri});T.savePlaylist(this.state.playlistName,t).then(function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})})}},{key:"search",value:function(e){var t=this;T.search(e).then(function(e){t.setState({searchResults:e})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Ja",s.a.createElement("span",{class:"highlight"},"mmm"),"ing"),s.a.createElement("div",{className:"App"},s.a.createElement(p,{onSearch:this.search}),s.a.createElement("div",{className:"App-playlist"},s.a.createElement(b,{searchResults:this.state.searchResults,onAdd:this.addTrack}),s.a.createElement(y,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.8e2a60ff.chunk.js.map