import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'
import { app } from '../Fierbase'
const StudentList = () => {
    const [students, setStudents] = useState(null)
    useEffect(() => {
        const db = getDatabase(app);
        const studentRef = ref(db, "student/");
        onValue(studentRef, (snapshot) => {
            const data = snapshot.val()
            setStudents(data)

        })
    }, [])
    return (
        <div>
            <h1 className=' text-2xl font-bold text-center underline mt-10'>Student List</h1>
            {students && (
                <div>
                    {Object.entries(students).map(([key, value ],index) => {
                        console.log(value)
                        return (
                            <div key={key}>

                                <div className=' border-[2px] p-7 border-zinc-300  md:mx-40 md:mt-5 shadow-lg relative rounded-xl' >
                                    <h1 className=' absolute -left-3 bg-white  shadow-xl -top-2 border-[1px] border-zinc-300 p-3 h-3 w-3 flex justify-center items-center rounded-full'> {index+1}</h1>
                                    <h1> <span className=' text-lg me-3 font-semibold'>Name </span>{value.StudentName}</h1>
                                    <h4> <span className=' text-lg me-3 font-semibold'>Email </span> {value.EmailAdress}</h4>
                                    <h4> <span className=' text-lg me-3 font-semibold'>Password </span> {value.Password}</h4>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            )}

        </div>
    )
}

export default StudentList