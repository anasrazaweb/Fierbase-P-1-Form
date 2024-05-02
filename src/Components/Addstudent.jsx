import { ErrorMessage, Field, Form, Formik } from 'formik'
import { getDatabase, set, ref } from 'firebase/database'
import { app } from '../Fierbase'
import React from 'react'
import { object } from 'yup'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'

const Addstudent = () => {
    const initialformvalue = {
        name: "",
        email: "",
        password: "",
        roll: ""
    }
    const navigate = useNavigate()
    const formSchema = object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().required("Email is Required"),
        password: Yup.string().required("password is Required").min(6, "password number most be 6 digit"),
        roll: Yup.string().required("Roll is Required").min(4, "password number most be 4 digit"),
    })
    const Submithandle = (value) => {
        const { roll, email, name, password } = value;
        const db = getDatabase(app)
        console.log(roll)
        set(ref(db, "student/" + roll), {
            StudentName: name,
            Password: password,
            EmailAdress: email,
            RollNumber:roll
        }).then(res => {
            navigate("/StudentList")
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1 className=' text-2xl font-bold text-center underline mt-10'>Add Student</h1>
            <div className=' ms-5'>
                <Formik initialValues={initialformvalue} validationSchema={formSchema} onSubmit={Submithandle}>
                    <Form className="space-y-4 px-56 mt-10" >

                        <div>
                            <label htmlFor="name" className='block font-semibold'>Name :</label>
                            <Field
                                name="name"
                                className=" border-2 w-full border-black py-1 px-5 rounded-full mt-3 bg-transparent"
                                type="text"
                                placeholder="Enter your name" />

                            <ErrorMessage name='name' component={"div"} className=' text-red-600 text-sm' />
                        </div>

                        <div>
                            <label htmlFor="roll" className='block font-semibold'>Roll Number :</label>
                            <Field
                                name="roll"
                                className=" border-2 w-full border-black py-1 px-5 rounded-full mt-3 bg-transparent"
                                type="text"
                                placeholder="Enter your Roll Number" />

                            <ErrorMessage name='roll' component={"div"} className=' text-red-600 text-sm' />
                        </div>

                        <div>
                            <label htmlFor="email" className='block font-semibold'>Email :</label>
                            <Field
                                name="email"
                                className=" border-2 w-full border-black py-1 px-5 rounded-full mt-3 bg-transparent"
                                type="text"
                                placeholder="Enter your Email" />
                            <ErrorMessage name='email' component={"div"} className=' text-red-600 text-sm' />

                        </div>

                        <div>
                            <label htmlFor="password" className='block font-semibold'>Password :</label>
                            <Field
                                name="password"
                                className=" border-2 w-full border-black py-1 px-5 rounded-full mt-3 bg-transparent"
                                type="text"
                                placeholder="Enter your Password" />
                            <ErrorMessage name='password' component={"div"} className=' text-red-600 text-sm' />

                        </div>

                        <button type='submit' className=' bg-blue-500 px-5 py-1 text-white rounded-full'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Addstudent