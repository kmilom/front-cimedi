// src/components/Input.js
import React from 'react';

const Input = ({ id, name, type, value, onChange, required }) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full p-1 border border-gray-400 rounded-xl shadow-sm text-gray-900 hover:text-blue-400 "
        />
    );
};

export default Input;
