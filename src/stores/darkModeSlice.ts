import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//import * as styles from '../css/styles/styles'
//import { darkModeKey } from '../config'

interface DarkModeState {
  isEnable: boolean
}

const initialState: DarkModeState = {
  isEnable: false
}

export const styleSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean|null>) => {
      state.isEnable = action.payload !== null ? action.payload : !state.isEnable

      //if (typeof localStorage !== 'undefined') {
      //  localStorage.setItem(darkModeKey, state.darkMode ? '1' : '0')
      //}

      if (typeof document !== 'undefined') {
        document.body.classList[state.isEnable ? 'add' : 'remove'](
          'dark-scrollbars'
        )

        document.documentElement.classList[state.isEnable ? 'add' : 'remove'](
          'dark',
          'dark-scrollbars-compat'
        )
      }
    },

    //you can persist dark mode setting
    //if (typeof localStorage !== 'undefined') {
    //  localStorage.setItem(styleKey, action.payload)
    //}
  
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode } = styleSlice.actions

export default styleSlice.reducer