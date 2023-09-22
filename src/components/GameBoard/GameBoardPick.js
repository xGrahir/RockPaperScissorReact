import styles from './GameBoardPick.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { infoActions } from '../../store'
import { Choices } from '../Choices/Choices'
import { GameBoardResult } from './GameBoardResult'

const choices = [
	{ name: 'paper', id: 0 },
	{ name: 'scissors', id: 1 },
	{ name: 'rock', id: 2 },
]

export const GameBoardPick = () => {

	const dispatch = useDispatch()
	// const isButtonClicked = useSelector(state => state.info.isClicked)

	const chooseHandler = e => {
		dispatch(infoActions.playerChoiceState(e.target.value))
		chooseComputerHandler()

		dispatch(infoActions.gameState())
	}
	
	const chooseComputerHandler = () => {
			// Computer choice
			const random = Math.floor(Math.random() * 3)
			dispatch(infoActions.computerChoiceState(choices[random].name))
	}

	const toChoose = choices.map(choice => <Choices key={choice.id} choice={choice.name} onChoose={chooseHandler} />)

	return (
		// <main className={styles['game-board']}>
		// 	{!isButtonClicked ? <div className={styles.triangle}>{toChoose}</div> : <GameBoardResult />}
		// </main>
		<div className={styles.triangle}>{toChoose}</div>
	)
}
