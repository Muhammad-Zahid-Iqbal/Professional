import React from 'react'
import Div from '../shared/Div/Div'
import { Route, Routes } from 'react-router-dom'
import Testing from '../Testing'
import Findclass from '../pages/find-class/Findclass'
import Login from '../pages/login-page/Login'
import Signup from '../pages/signup-page/Signup'
import Counselling from '../pages/Counselling-London/Counselling'
import Dashboard from '../pages/dashboard/Dashboard'

const Routing = () => {
  return (
    <Div>
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/" element={<Findclass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/dash-board" element={<Dashboard />} />
        {/* <Route path="/landing-page" element={<Findclass />} /> */}
      </Routes>
    </Div>
  )
}

export default Routing
