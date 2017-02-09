import React from 'react';
import cn from 'classnames';
import uuidV1 from 'uuid/v1';
import BookmarkRow from '../BookmarkRow/index';

function BookmarkTable({bookmarks, classNames}) {
    return (
      <table className={cn('bookmark-table', classNames)}>
          <thead className="bookmark-table__head bookmark-table-head">
            <tr className="bookmark-table-head__row bookmark-table-head-row">
                <th className="bookmark-table-head-row__title">Title</th>
            </tr>
          </thead>
          <tbody className="bookmark-table__body bookmark-table-body">
            {bookmarks.map((bookmark) => <BookmarkRow classNames="bookmark-table-body__row" key={uuidV1()} bookmark={bookmark}/>)}
          </tbody>
      </table>
    );
}

BookmarkTable.propTypes = {
    bookmarks: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.number,
            title: React.PropTypes.string,
            url: React.PropTypes.string
        })
    ),
    classNames: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default BookmarkTable;