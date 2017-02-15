import React from 'react';
import cn from 'classnames';
import {noop} from '../../utils';
import _debounce from 'lodash/debounce';


function SearchField({
    classNames,
    disabled,
    onChange = noop
}) {
    const searchFieldClass = cn('search-field', classNames, {
        'search-field_disabled': disabled
    });

    let onChangeDebounce = _debounce(onChange, 250);

    const onChangeWrap = function(e) {
        e.persist();
        onChangeDebounce(e);
    };

    return (
      <input
          type="search"
          className={searchFieldClass}
          placeholder="Search"
          disabled={disabled}
          onChange={(e) => onChangeWrap(e)}/>
    );
}

SearchField.propTypes = {
    classNames: React.PropTypes.arrayOf(React.PropTypes.string),
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
};

export default SearchField;