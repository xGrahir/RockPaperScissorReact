import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialSettings = {
    score: 0,
    isActive: false
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
        }
    }
})

const store = configureStore({
    reducer: {info: infoSlice.reducer}
})

export const infoActions = infoSlice.actions
export default store