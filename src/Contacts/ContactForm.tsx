import {Button} from "../Common/Components/Button/Button";
import {useContactForm} from "./useContactForm";
import {Input} from "../Common/Components/Input/Input";
import {FC, useState} from "react";
import s from './Contacts.module.scss'
import {SnackBar} from "../Common/Components/SnackBar/SnackBar";
import {Modal} from "../Common/Components/Modal/Modal";


export const ContactForm: FC = () => {
    const {formik, onDisabled, snackbarShow, snackbarType, snackbarMessage} = useContactForm()

    return (
        <>
            <form  className={s.form} onSubmit={formik.handleSubmit}>
                <Input label={formik.touched.name && formik.errors.name}
                       placeholder='Your name'
                       type='text'
                       id='name'
                       name='name'
                       component='input'
                       value={formik.values.name}
                       onChange={formik.handleChange}
                       className={s.input}
                />
                <Input label={formik.touched.email && formik.errors.email}
                       placeholder='Your email'
                       type='text'
                       id='email'
                       name='email'
                       component='input'
                       value={formik.values.email}
                       onChange={formik.handleChange}
                       className={s.input}
                />
                <Input label={formik.touched.message && formik.errors.message}
                       placeholder='Your message'
                       id='message'
                       name='message'
                       component='textarea'
                       value={formik.values.message}
                       onChange={formik.handleChange}
                       className={s.input}
                />
                <Button title='Send' type='submit' disable={onDisabled}/>
            </form>
            <SnackBar type={snackbarType} message={snackbarMessage} show={snackbarShow}/>
        </>
    )
}