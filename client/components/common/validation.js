import React from 'react';

export default function validate(formProps) {
    const errors = {};

    if (!formProps.firstName) {
        errors.firstName = 'Please enter a first name';
    }
    if (!formProps.lastName) {
        errors.lastName = 'Please enter a last name';
    }
    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.status) {
        errors.status = 'Please select a status';
    }

    if (!formProps.category) {
        errors.category = 'Please select a category';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password Confirmation'
    }

    return errors;
}
