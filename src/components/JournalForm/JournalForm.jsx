import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';

function JournalForm({onSubmit}) {
    const [formValid, setFormValid] = useState({
        date: true,
        text: true,
        commit: true,
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

        if (!formProps.commit?.trim().length) {
            setFormValid(state => ({...state, commit: false}))
            isValidForm = false
        } else {
            setFormValid(state => ({...state, commit: true}))
        }

        if (!isValidForm) return;

        onSubmit(formProps)
    }
	return (
        <form
            className={styles['journal-form']}
            onSubmit={addJournalItem}
        >
            <div>
                <input
                    type='title'
                    name='title'
                    className={
                        cn(
                            styles['input-title'],
                            {
                                [styles['invalid']]: !formValid.title
                            }
                        )
                    }
                />
            </div>
            <div className={cn(styles['form-row'])}>
                <label
                    htmlFor='date'
                    className={cn(styles['form-label'])}
                >
                    <img src='/calendar.svg'/>
                    <span>Дата</span>
                </label>
                    <input
                        type='date'
                        name='date'
                        id='date'
                        className={
                            cn(
                                styles['input'],
                                {
                                    [styles['invalid']]: !formValid.date
                                }
                            )
                        }
                    />
            </div>
            <div className={cn(styles['form-row'])}>
                <label
                    htmlFor='text'
                    className={cn(styles['form-label'])}
                >
                    <img src='/folder.svg'/>
                    <span>Метки</span>
                </label>
                <input
                    type='text'
                    name='text'
                    id='text'
                    className={
                        cn(
                            styles['input'],
                            {
                                [styles['invalid']]: !formValid.text
                            }
                        )
                    }
                />
            </div>
            <textarea
                name='commit'
                className={
                    cn(
                        styles['input'],
                        {
                            [styles['invalid']]: !formValid.commit
                        }
                    )
                }
            >
            </textarea>
            <Button text="Сохранить"/>
        </form>
	);
}

export default JournalForm;