import React, { useState } from 'react';
import FormGroupComp from './FormGroupComp';
import { Form, Button } from 'reactstrap';

function MemeForm({ }) {
    const INITIAL_STATE = {image_url: "", top_text: "", bottom_text: ""}
    const [formData, setFormData] = useState(INITIAL_STATE)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
 
    }
    
    return (
        <div className="box">
            <Form>
                {Object.keys(INITIAL_STATE).map(field=> <FormGroupComp key={field} field={field} formData={formData} handleChange={handleChange} />)}
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default MemeForm;
