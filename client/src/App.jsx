import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'
import ProtectedRoutes from './components/protected-routes'
import { AuthContext } from './context/auth-context'
import InstructorDashboard from './pages/instructor'
import StudentViewCommonLayout from './components/student-view/common-layout'
import StudentHomePage from './pages/student/home'


function App() {
  const { auth } = useContext(AuthContext);
  console.log("User authenticated h ya nhi", auth);
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <ProtectedRoutes
              element={<AuthPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor"
          element={
            <ProtectedRoutes
              element={<InstructorDashboard />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoutes
              element={<StudentViewCommonLayout />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        >
          {/* Child element Pages for the Student Component */}
          <Route path='' element={<StudentHomePage />} />
          <Route path='home' element={<StudentHomePage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App;