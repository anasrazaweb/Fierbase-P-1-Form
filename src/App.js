import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Addstudent from './Components/Addstudent'
import StudentList from './Components/StudentList'

const myrouter = createBrowserRouter([
  {
    path: "", Component: Dashboard, children: [
      { path: "", Component: Addstudent },
      { path: "/Addstudent", Component: Addstudent },
      { path: "/StudentList", Component: StudentList },
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={myrouter} />
    </div>
  )
}

export default App