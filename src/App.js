import React, { Component } from 'react';
import BookmarkTable from './components/BookmarkTable/index';
import SearchField from './components/SearchField/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: [],
            searchValue: ''
        };
        this.filteredBookmarks = [];
        this.findBookmarks = this.findBookmarks.bind(this);
    }

    componentDidMount() {
        fetch('https://api.mlab.com/api/1/databases/bookmarks/collections/bookmark-list?apiKey=1RngckcG7fCgm-jwxllO2eFLks8178ZR')
            .then((response) => {
                return response.json();
            })
            .then((bookmarks) => {
                this.filteredBookmarks = bookmarks.slice();
                this.setState({bookmarks});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    findBookmarks(e) {
        let searchValue = e.target.value;
        this.filteredBookmarks = this.state.bookmarks.filter((bookmark) => {
           return ~bookmark.title.toLowerCase().indexOf(searchValue.toLowerCase());
        });
        this.setState({searchValue});
    }

  render() {
    return (
      <div className="App">
        <SearchField onChange={this.findBookmarks}/>
        <BookmarkTable bookmarks={this.filteredBookmarks}/>
      </div>
    );
  }
}

export default App;
