import React from 'react';

const Select = ({options, defaultOptions, value, onChange}) => {
    return (
        <div>
            <select
                value={value}
                onChange={event => onChange(event.target.value)}>
                <option disabled value="">{defaultOptions}</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.name}</option>})
                })
            </select>
        </div>
    );
};

export default Select;