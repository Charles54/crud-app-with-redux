import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../Redux/userSlice'



const Homes = () => {
  const users = useSelector((state) => state.users)
  console.log(users)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser({id}))
  }
  return (
    <div>
        <div className='container mt-5'>
            <h2 className='text-center text-secondary my-5'>CRUD App using Redux Tool Kit</h2>
            <Link to='/create' className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index)=>(
                        <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`} className='btn btn-primary me-2'>Edit</Link>
                            <button onClick={()=> handleDelete(user.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Homes