import React, { Component } from 'react';
import {bookmarksMock} from './mock';
import BookmarkTable from './components/BookmarkTable/index';
import SearchField from './components/SearchField/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchField/>
        <BookmarkTable bookmarks={bookmarksMock}/>
      </div>
    );
  }
}

export default App;
