import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>App</h1> */}
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App