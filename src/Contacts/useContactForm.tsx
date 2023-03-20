import {useState} from "react";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser';

export interface Values {
    name: string;
    email: string;
    message: string;
}

export const EMAIL_SERVICE = {
    serviceID: 'service_kgp7wrt',
    templateID: 'template_dqqwa6z',
    publicKey: 'Vp4xGqOKvyZtiva7C'
}


export const useContactForm = () => {
    const [snackbarMessage, setSnackbarMessage] = useState<string>('')
    const [snackbarShow, setSnackbarShow] = useState<boolean>(false)
    const [snackbarType, setSnackbarType] = useState<'success' | 'error'>('success')
    const [onDisabled, setOnDisabled] = useState<boolean>(false)

    const formik = useFormik<Values>({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        onSubmit: (values, actions) => {
            setOnDisabled(true)
            emailjs.send(EMAIL_SERVICE.serviceID, EMAIL_SERVICE.templateID, {
                name: values.name,
                email: values.email,
                message: values.message
            }, EMAIL_SERVICE.publicKey)
                .then((res) => {
                    setSnackbarMessage('Your message has been sent successfully')
                    setSnackbarType('success')
                    actions.resetForm()
                })
                .catch((e) => {
                    setSnackbarMessage('Something went wrong. Your message could not be sent')
                    setSnackbarType('error')
                })
                .finally(() => {
                    setSnackbarShow(true)
                    setOnDisabled(false)
                })
        },
    });
    return {formik, onDisabled, snackbarShow, snackbarType, snackbarMessage}
}