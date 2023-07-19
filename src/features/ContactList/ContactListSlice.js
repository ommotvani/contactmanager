import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    usersData: [
        {name:'harry',number:9575432154},
        { name: 'petro', number: 8547651234 },
        { name: 'om', number: 7228007237 }
    ],
    currentuserData:{}
}

export const ContactListSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getData: (state,action) => {
        state.usersData.push(action.payload)
        },
        deleteData:(state,action) =>{
          state.usersData.splice(action.payload,1)
        },
        getCurrentUserData:(state,action) =>{
            state.currentuserData = action.payload
            console.log('state.currentuserData: ', state.currentuserData);
        },
        updateData:(state,action) =>{
           state.usersData.splice(state.currentuserData.index,1,action.payload)
      
        }
       
    },
})

// Action creators are generated for each case reducer function
export const { getData, deleteData, updateData, getCurrentUserData } = ContactListSlice.actions

export default ContactListSlice.reducer