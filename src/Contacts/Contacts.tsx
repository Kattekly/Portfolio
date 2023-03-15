import React, {useState} from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/Title/Title";
import {useFormik} from "formik";
import axios from "axios";
import {Button} from "../Common/Components/Button/Button";
import input = Simulate.input;
import {Simulate} from "react-dom/test-utils";

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

export const ContactForm = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [disableButton, setDisableButton] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = 'Field "Name" is required!'
            } else if (values.name.length < 3 || values.name.length > 100) {
                errors.name = 'Your name must be between 3 and 100 characters'
            }
            if (!values.email) {
                errors.email = 'Field "Email" is required!'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Field "Message" is required!'
            } else if (values.message.length < 5 || values.message.length > 300) {
                errors.message = 'Your message must be between 5 and 500 characters'
            }
            return errors
        },

        onSubmit: values => {
            setDisableButton(true)
            // document.body.style.overflow = 'hidden';
            // axios.post('https://portfolio-gmail-smtp-topaz.vercel.app/sendMessage', values)
            //     .then(() => {
            //         setIsOpenModal(true)
            //     })
            formik.resetForm()
            setTimeout(() => {
                setIsOpenModal(false)
                setDisableButton(false)
                document.body.style.overflow = 'unset';
            }, 5000)
        },
    })

    const handleClose = () => {
        setIsOpenModal(false)
    }


    return (
        <div id={'contactForm'} className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={'contacts'}/>
                <div className={s.formBlock}>
                    <form className={s.form} onSubmit={formik.handleSubmit}>
                        <>
                            {formik.errors.name && formik.touched.name
                                ? <div className={s.errorField}>{formik.errors.name}</div>
                                : <div style={{height: 10, paddingBottom: 7}}></div>}
                            <input
                                type='text'
                                placeholder='Name'
                                {...formik.getFieldProps("name")}
                                className={formik.errors.name && formik.touched.name ? s.error : ''}
                            />
                        </>
                        <>
                            {formik.errors.email && formik.touched.email
                                ? <div className={s.errorField}>{formik.errors.email}</div>
                                : <div style={{height: 10, paddingBottom: 7}}></div>}
                            <input
                                type='text'
                                placeholder='Email'
                                {...formik.getFieldProps("email")}
                                className={formik.errors.email && formik.touched.email ? s.error : ''}
                            />
                        </>
                        <>
                            {formik.errors.message && formik.touched.message
                                ? <div className={s.errorField}>{formik.errors.message}</div>
                                : <div style={{height: 10, paddingBottom: 7}}></div>}
                            <textarea
                                placeholder='Your massage...'
                                {...formik.getFieldProps("message")}
                                className={formik.errors.message && formik.touched.message ? s.error : ''}
                            />
                        </>
                        <Button type={'submit'} title={'Send'} disable={disableButton}/>
                    </form>
                </div>
            </div>
        </div>
    )
}