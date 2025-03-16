import { createSlice } from '@reduxjs/toolkit'

// Create a slice of the Redux state with the name "app"
const appSlice = createSlice({
    name: "app", // Name of the slice
    initialState: {
        isMenuOpen: true // Initial state of the slice
    },
    reducers: {
        // Reducer function to toggle the menu state
        toggleMenu: (state) => {
            // Toggle the value of isMenuOpen between true and false
            state.isMenuOpen = !state.isMenuOpen
        },
        closeSideBar: (state) => {
            state.isMenuOpen = false
        }
    }
})

// Export the action creator for the toggleMenu reducer
export const { toggleMenu, closeSideBar } = appSlice.actions;

// Export the reducer function to be used in the store
export default appSlice.reducer;