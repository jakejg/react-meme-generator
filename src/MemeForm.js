import React, { useState } from 'react';
import FormGroupComp from './FormGroupComp';
import { Form, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import Meme from './Meme';
import {v4 as uuid } from 'uuid';

function MemeForm() {
    const INITIAL_STATE = {image_url: "", top_text: "", bottom_text: ""}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuid()
        dispatch({type: 'MEME', payload: <Meme key={id} id={id} image_url={formData.image_url} top_text={formData.top_text} bottom_text={formData.bottom_text} />})
 
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
