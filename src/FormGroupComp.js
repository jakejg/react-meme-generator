import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormGroupComp = ({field, formData, handleChange}) => {

    const prettierName = field.toUpperCase().replace('_', ' ');

    return (
        <FormGroup>
            <Label htmlFor={field}>{prettierName}</Label> 
            <Input type="text" id={field} name={field} value={formData.field} onChange={handleChange} /> 
        </FormGroup>
    )
}

export default FormGroupComp