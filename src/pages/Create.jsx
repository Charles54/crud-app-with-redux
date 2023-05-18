import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../Redux/userSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addUser({
            id:users[users.length-1].id +1,name,email
        }))
        navigate('/')
    }




  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='shadow w-50 bg-light p-5'>
            <form onSubmit={handleSubmit}>
                <h3>Add new user</h3>
                <div>
                    <label>Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control' />
                </div>
                <div>
                    <label>Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='form-control' />
                </div> <br />
                <button className='btn btn-primary w-100 text-white'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create