import React from 'react'
import { useState } from 'react'
import Card from './Card'

function FormState() {
  const [name,setName] = useState("")
  const [email,setEmail] =  useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,email,password,confirmPassword)
  }
  return (
    <div id="form-state-link">
      <Card>
        <form id="info-form" onSubmit={handleSubmit}>
          <label htmlFor="full_name">Name:</label>
          <input id="full_name" type="text" style={{ width: "200px" }} onChange={(e)=>setName(e.target.value)}/>
          <br />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" style={{ width: "200px" }} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" style={{ width: "200px" }}  onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            id="password_confirmation"
            type="password"
            style={{ width: "200px" }} onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <br />
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </Card>
    </div>
  )
}

export default FormState