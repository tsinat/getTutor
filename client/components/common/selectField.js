import React from 'react';

const SelectField = field => (
    <div>
        <select {...field.input} className="form-control">
            {field.children}
        </select>
        {field.meta.touched && field.meta.error && <div className="text-danger">{field.meta.error}</div>}
    </div>
);

export default SelectField;
