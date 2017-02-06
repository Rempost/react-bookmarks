import React from 'react';
import cn from 'classnames';

function SearchField({
    classNames,
    disabled,
    value = '',
    onChange = () => void 0
}) {
    const searchFieldClass = cn('search-field', classNames, {
        'search-field_disabled': disabled
    });

    return (
      <input
          type="search"
          className={searchFieldClass}
          value={value}
          placeholder="Search"
          disabled={disabled}
          onChange={(e) => onChange(e)}/>
    );
}

SearchField.propTypes = {
    classNames: React.PropTypes.arrayOf(React.PropTypes.string),
    disabled: React.PropTypes.bool,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
};

export default SearchField;