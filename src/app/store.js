import { configureStore } from '@reduxjs/toolkit'
import ContactListReducer from '../features/ContactList/ContactListSlice'

export const store = configureStore({
  reducer: {
    contactList:ContactListReducer
  },
})