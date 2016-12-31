import React from 'react';

const InputField = field => (
    <div>
        <input {...field.input} type={field.type} className="form-control"/>
        {field.meta.touched && field.meta.error && <span className="text-danger">{field.meta.error}</span>}
    </div>
);

export default InputField;
