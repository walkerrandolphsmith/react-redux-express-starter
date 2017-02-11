import React from 'react';
import { CheckMarkIcon, ExclamationIcon } from './../common/Icons';

export const ValidationIcons = (props) => (
    <div className="validationIcons">
        <i className="input_error_icon">
            <span> </span>
            <ExclamationIcon />
            <span> </span>
        </i>
        <i className="input_valid_icon">
            <span> </span>
            <CheckMarkIcon />
            <span> </span>
        </i>
    </div>
);