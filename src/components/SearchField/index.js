import React from 'react';
import cn from 'classnames';

function SearchField({
    classNames,
    disabled,
    value = '',
    onChange = () => void 0
}) {
    const SearchFieldClass = cn('search-field', classNames, {
        disabled: 'search-field_disabled'
    });

    return (
      <input
          type="search"
          className={SearchFieldClass}
          value={value}
          placeholder="Search"
          disabled={disabled}
          onChange={(e) => onChange(e)}
      />
    );
}

SearchField.propTypes = {
    classNames: React.PropTypes.array,
    disabled: React.PropTypes.bool,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
};

export default SearchField;