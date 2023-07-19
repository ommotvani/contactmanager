import React from 'react'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import AddContacts from './AddContacts'
import UpdateContactDetails from './UpdateContactDetails'
  
function Home() {
  
  return (
    <div>
        <Routes >
              <Route path='/' element={<Dashboard />} />  
              <Route path='/addContact' element={<AddContacts />}/>
              <Route path='/updatecontactdetails' element={<UpdateContactDetails />} />
        </Routes>
    
    </div>
  )
}

export default Home
