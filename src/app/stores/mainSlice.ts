import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPayloadObject } from '../interfaces'

interface MainState {
  userName: string
  userEmail: null | string
  isFieldFocusRegistered: boolean
  clients: object
  history: object
}

const initialState: MainState = {
  userName: 'Eric Espinoza',
  userEmail: 'espinoza.eric@gmail.com',
  /* Field focus with ctrl+k (to register only once) */
  isFieldFocusRegistered: false,
  /* Sample data (commonly used) */
  clients: [],
  history: [],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayloadObject>) => {
      state.userName = action.payload.name
      state.userEmail = action.payload.email
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = mainSlice.actions

export default mainSlice.reducer
