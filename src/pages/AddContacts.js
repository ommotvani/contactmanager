import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { addContactsValidation } from '../constants/ValidationSchema'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getData } from '../features/ContactList/ContactListSlice'


function AddContacts() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        name: "",
        number: ""
    }
    const handleSubmit = (values) => {
        navigate('/')
        dispatch(getData(values))
    }

    return (
        <div className='bg-gray-300  h-screen'>


            <div className='p-10'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={addContactsValidation}
                    onSubmit={handleSubmit}
                >
                    <Form className=''>

                        <div>
                            <label htmlFor="name" className=''>Name:</label>
                            <Field type="text" name="name" id="name" className='border-x-black w-full rounded-md p-2' placeholder='enter your name' />
                            <ErrorMessage name='name' />
                        </div>


                        <div className='mt-4'>
                            <label htmlFor="number" className=''>MobileNumber:</label>
                            <Field type="number" name="number" id="number" className='border-x-black w-full rounded-md p-2' placeholder='enter your mobile number'/>
                            <ErrorMessage name='number' />
                        </div>

                        <div className='flex flex-col items-center mt-8'>
                            <button type='submit' className='px-20 p-2 bg-blue-400  mt-5  rounded-xl hover:scale-100 text-white' >Add</button>
                            <button type='button' onClick={() => navigate('/')} className='underline pt-5 text-md'>Back</button>
                        </div>


                    </Form>


                </Formik>
            </div>
        </div>
    )
}

export default AddContacts
