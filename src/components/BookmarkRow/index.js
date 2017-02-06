import React from 'react';
import cn from 'classnames';

function BookmarkRow({bookmark, classNames}) {
    return (
      <tr className={cn('bookmark-row', classNames)}>
          <td className="bookmark-row__column bookmark-row-column">
              <a className="bookmark-row-column__title" href={bookmark.url} target="_blank">{bookmark.title}</a>
          </td>
      </tr>
    );
}

BookmarkRow.propTypes = {
  bookmark: React.PropTypes.shape({
      title: React.PropTypes.string,
      url: React.PropTypes.string
  })
};