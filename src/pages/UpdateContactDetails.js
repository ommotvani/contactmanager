import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { addContactsValidation } from '../constants/ValidationSchema'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from '../features/ContactList/ContactListSlice'

function UpdateContactDetails() {
    const currentUser = useSelector((state) => state.contactList.currentuserData.ele)
    console.log('currentUser: ', currentUser);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        name: `${currentUser?.name}`,
        number: `${currentUser?.number}`
    }
    const handleSubmit = (values) => {
        
        dispatch(updateData(values))
        navigate('/')
    }
    return (
        <div className='bg-gray-300 h-screen'>

            <div className='p-10'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={addContactsValidation}
                    onSubmit={handleSubmit}
                >
                    <Form className=''>

                        <div>
                            <label htmlFor="name" className='mr-9'>Name:</label>
                            <Field type="text" name="name" id="name" className='rounded-md border-x-black w-full p-2' />
                            <ErrorMessage name='name' />
                        </div>


                        <div className='mt-4'>
                            <label htmlFor="number" className='mr-2'>MobileNumber:</label>
                            <Field type="number" name="number" id="number" className='rounded-md border-x-black w-full p-2' />
                            <ErrorMessage name='number' />
                        </div>

                        <div className='flex flex-col items-center mt-8'>
                            <button type='submit' className='px-20 p-2 bg-blue-400  mt-5  rounded-xl hover:scale-100 text-white ' >update</button>
                            
                            <button type='button' onClick={() => navigate('/')} className='underline pt-5 text-md'>Back</button>
                        </div>


                    </Form>


                </Formik>

            </div>
        </div>
    )
}

export default UpdateContactDetails
