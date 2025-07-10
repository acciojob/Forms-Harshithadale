import React from 'react'
import Form from './Form'
import FormRef from './FormRef'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import FormState from './FormState'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>


    <div>
           <nav style={{ marginBottom: "20px" }}>
            
          <Link to="/" id="form-link" style={{ marginRight: "15px" }}>
            Layout Only
          </Link>
          <Link to="/form-ref" id="form-ref-link" style={{ marginRight: "15px" }}>
            useRef Form
          </Link>
          <Link to="/form-state" id="form-state-link">
            useState Form
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/form" replace />} /> 
            <Route path = "/" element = {<Form/>}/>
            <Route path = "/form-ref" element = {<FormRef/>}/>
            <Route path = "/form-state" element = {<FormState/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

