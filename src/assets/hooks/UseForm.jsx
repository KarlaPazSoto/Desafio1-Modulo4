import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const resetForm = () => {
        setFormValues(initialState);
    };

    return [formValues, handleInputChange, resetForm];
};
