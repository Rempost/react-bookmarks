import React from 'react';

function BookmarkRow({bookmark}) {
    return (
      <tr className="bookmark-row">
          <td className="bookmark-row__column bookmark-row-column">
              <a className="bookmark-row-column__title" href={bookmark.url} target="_blank">{bookmark.title}</a>
          </td>
      </tr>
    );
}

BookmarkRow.propTypes = {
    bookmark: React.PropTypes.shape({
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        url: React.PropTypes.string
    })
};

export default BookmarkRow;