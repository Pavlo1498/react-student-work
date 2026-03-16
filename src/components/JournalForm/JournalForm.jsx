import './JournalForm.css';

import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm({onSubmit}) {
    const [formValid, setFormValid] = useState({
        date: true,
        text: true,
        title: true
    })

    const addJournalItem = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        let isValidForm = true;

        if (!formProps.title?.trim().length) {
            setFormValid(state => ({...state, title: false}))
            isValidForm = false
        } else {
            setFormValid(state => ({...state, title: true}))   
        }

        if (!formProps.text?.trim().length) {
            setFormValid(state => ({...state, text: false}))
            isValidForm = false
        } else {
            setFormValid(state => ({...state, text: true}))
        }

        if (!formProps.date) {
            setFormValid(state => ({...state, date: false}))
            isValidForm = false
        } else {
            setFormValid(state => ({...state, date: true}))
        }

        if (!isValidForm) return;

        onSubmit(formProps)
    }
	return (
        <form
            className='journal-form'
            onSubmit={addJournalItem}
        >
            <input
                type='title'
                name='title'
                style={
                    {
                        borderColor: formValid.title ? 'white' : 'red'
                    }
                }
            />
            <input
                type='date'
                name='date'
                style={
                    {
                        borderColor: formValid.date ? 'white' : 'red'
                    }
                }
            />
            <input
                type='text'
                name='text'
                style={
                    {
                        borderColor: formValid.text ? 'white' : 'red'
                    }
                }
            />
            <textarea
                name='commit'
            >
            </textarea>
            <Button text="Сохранить"/>
        </form>
	);
}

export default JournalForm;