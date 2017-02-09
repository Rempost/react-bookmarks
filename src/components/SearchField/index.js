import React from 'react';
import cn from 'classnames';
import {noop} from '../../utils';
import _debounce from 'lodash/debounce';


function SearchField({
    classNames,
    disabled,
    value = '',
    onChange = noop
}) {
    const searchFieldClass = cn('search-field', classNames, {
        'search-field_disabled': disabled
    });

    onChange = _debounce(onChange, 250);

    const onChangeWrap = function(e) {
        e.persist();
        onChange(e);
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
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
};

export default SearchField;