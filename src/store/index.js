import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialSettings = {
	score: 0,
	playerPick: null,
	computerPick: null,
	isActive: false,
	isClicked: false,
}

const infoSlice = createSlice({
	name: 'info',
	initialState: initialSettings,
	reducers: {
		addPoint(state, action) {
			state.score += 1
			localStorage.setItem('score', state.score)
		},

		activeState(state, action) {
			//  rules open/close
			state.isActive = !state.isActive
		},

		gameState(state, action) {
			// If player clicked icon
			state.isClicked = !state.isClicked
		},

		playerChoiceState(state, action) {
			// Handle player's choice
			state.playerPick = action.payload
		},

		computerChoiceState(state, action) {
			// Handle computer's choice
			state.computerPick = action.payload
		},

        reset(state, action) {
            return {...initialSettings, score: state.score }
        },

		getBackPoints(state, action) {
			return {...initialSettings, score: action.payload}
		}

	},
})

const store = configureStore({
	reducer: { info: infoSlice.reducer },
})

export const infoActions = infoSlice.actions
export default store
