import React, { Component } from 'react';
import BookmarkTable from './components/BookmarkTable/index';
import SearchField from './components/SearchField/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredBookmarks: []
        };
        this.bookmarks = [];
        this.searchValue = '';
        this.findBookmarks = this.findBookmarks.bind(this);
    }

    componentDidMount() {
        fetch('https://api.mlab.com/api/1/databases/bookmarks/collections/bookmark-list?apiKey=1RngckcG7fCgm-jwxllO2eFLks8178ZR')
            .then((response) => {
                return response.json();
            })
            .then((bookmarks) => {
                this.bookmarks = bookmarks;
                this.setState({filteredBookmarks: bookmarks});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    findBookmarks(e) {
        this.searchValue = e.target.value;
        let result = this.bookmarks.filter((bookmark) => {
           return ~bookmark.title.toLowerCase().indexOf(this.searchValue.toLowerCase());
        });
        this.setState({filteredBookmarks: result});
    }

  render() {
    return (
      <div className="App">
        <SearchField value={this.searchValue} onChange={this.findBookmarks}/>
        <BookmarkTable bookmarks={this.state.filteredBookmarks}/>
      </div>
    );
  }
}

export default App;
