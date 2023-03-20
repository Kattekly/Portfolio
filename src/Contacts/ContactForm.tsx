import {Button} from "../Common/Components/Button/Button";
import {EMAIL_SERVICE, useContactForm, Values} from "./useContactForm";
import {Input} from "../Common/Components/Input/Input";
import {FC, useState} from "react";
import s from './Contacts.module.scss'
import {SnackBar} from "../Common/Components/SnackBar/SnackBar";
import {Modal} from "../Common/Components/Modal/Modal";
import {useFormik} from "formik";
import {validationSchema} from "../Common/utils/formValidators";
import emailjs from "@emailjs/browser";


export const ContactForm: FC = () => {
    const [onDisabled, setOnDisabled] = useState<boolean>(false)
    const [isOpenModal, setIsOpenModal] = useState(true)

    const formik = useFormik<Values>({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            setOnDisabled(true)
            emailjs.send(EMAIL_SERVICE.serviceID, EMAIL_SERVICE.templateID, {
                name: values.name,
                email: values.email,
                message: values.message
            }, EMAIL_SERVICE.publicKey)
                .then((res) => {
                    setIsOpenModal(true)
                    actions.resetForm()
                })
                .catch((e) => {

                })
                .finally(() => {
                    setOnDisabled(false)
                    document.body.style.overflow = 'unset';
                })
        },
    })

    const handleClose = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            {isOpenModal ? <Modal handleClose={handleClose}/> : ''}
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
            {/*<SnackBar type={snackbarType} message={snackbarMessage} show={snackbarShow}/>*/}
        </>
    )
}