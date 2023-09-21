import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialSettings = {
    score: 0,
    playerPick: null,
    computerPick: null,
    isActive: false,
    isClicked: false
}

const infoSlice = createSlice({
    name: 'info',
    initialState: initialSettings,
    reducers: {
        addPoint(state, action) {
            state.score += 1
        },

        activeState(state, action) {
            state.isActive = !state.isActive
        },

        gameState(state, action) { // If player clicked icon
            state.isClicked = !state.isClicked
        },

        playerChoiceState(state, action) { // Handles player's choice
            state.playerPick = action.payload
        }
    }
})

const store = configureStore({
    reducer: {info: infoSlice.reducer}
})

export const infoActions = infoSlice.actions
export default store