import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai';
import { deleteData,  getCurrentUserData } from '../features/ContactList/ContactListSlice';

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.contactList.usersData)
    console.log('state: ', users);

    const editData = ({ele,index})=>{
    
        navigate('/updatecontactdetails')
        dispatch(getCurrentUserData({ele,index}))
    }
    
    
  return (
      <div> 
          <h1 className='text-center my-2 font-bold text-4xl'>Contact Manager</h1>
          <div className='max-w-[1240px] p-2 mt-10 mx-auto'>
              <div className='flex justify-between items-center mx-auto'>
                  <h2 className='text-4xl'>Contact List</h2>
                  <button className='text-white bg-blue-400  p-3 rounded-md' onClick={() => navigate('/addContact')}>Add Contact</button>
              </div>
              <div>
                  {
                     users?.map((ele ,index) => 
                     {
                        return(
                            <div className='flex pt-5 justify-between items-center' key={index}>
                               
                                <div>
                                    <h3 className='text-3xl '>{ele.name}</h3>
                                    <h4 className='text-3xl text-gray-700'>{ele.number}</h4>
                                </div>
                                <div className='flex gap-10'>
                                    < AiOutlineEdit  size={30} onClick={() => editData({ele,index})} color='green'/>
                                    < AiTwotoneDelete size={30} onClick={() =>dispatch(deleteData(index))} color='red'/>
                                </div>
                                
                            </div>
                        )
                     })
                  }
              </div>
          </div>
      </div>
  )
}

export default Dashboard
