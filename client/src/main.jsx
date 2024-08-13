import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Layout from './layout.jsx'
import Home from './components/home.jsx'
import './index.css'
import About from './components/about.jsx'
import Register from './components/register.jsx'
import Sponsor from './components/sponsor.jsx'
import Applicant from './components/registration/register-applicant.jsx'
import RegisterTeam from './components/registration/register-team.jsx'
import TeamSuccessful from './components/registration/team-successful.jsx'
import ApplicantSuccessful from './components/registration/applicant-successful.jsx'
import Login from './components/admin/login.jsx'
import Admin from './components/admin/admin.jsx'
import ProtectedRoute from './components/protectedRoute.jsx'
import ApplicantsTable from './components/admin/applicantsTable.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='register' element={<Register />} />
      <Route path='register-applicant' element={<Applicant />} />
      <Route path='register-team' element={<RegisterTeam />} />
      <Route path='team-successful' element={<TeamSuccessful />} />
      <Route path='applicant-successful' element={<ApplicantSuccessful />} />
      <Route path='sponsor' element={<Sponsor />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>

    <Route path='/login' element={<Login />} />
    <Route 
      path="/admin/" 
      element={
          <ProtectedRoute>
              <Admin />
          </ProtectedRoute>
      } 
    >
      <Route path='all-applicants' element={<ApplicantsTable />}/>
    </Route>
    </>
  ) 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
