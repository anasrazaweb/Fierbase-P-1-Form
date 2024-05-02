import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className=' h-[100vh] w-full'>
                <div className=' flex h-full '>
                    <div className='w-[20%] h-full text-black'>

                        <ul >
                            <Link to='/Addstudent'
                                className=' font-semibold mt-16 block text-lg  ps-5  hover:bg-zinc-100 cursor-pointer py-2'>Add Student</Link>
                            <Link to='/StudentList'
                                className=' font-semibold mt-1  text-lg block  ps-5  hover:bg-zinc-100 cursor-pointer py-2'
                            > Student List</Link>
                        </ul>
                    </div>
                    <div className='w-[80%] h-full text-black border-l-2'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard