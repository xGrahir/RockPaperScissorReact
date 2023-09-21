import styles from './GameBoard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { infoActions } from '../../store'
import { Choices } from '../Choices/Choices'
import { RulesButton } from '../Rules/RulesButton'

export const GameBoard = () => {
	const choices = [
		{ name: 'paper', id: 0 },
		{ name: 'scissors', id: 1 },
		{ name: 'rock', id: 2 },
	]

	const dispatch = useDispatch()
	// const choice = useSelector(state => state.info.yourPick)

	// const showRulesHandler = () => {
	// 	dispatch(infoActions.activeState())
	// }

	const chooseHandler = e => {
		dispatch(infoActions.playerChoiceState(e.target.value))
		dispatch(infoActions.gameState())
	}

	const toChoose = choices.map(choice => <Choices key={choice.id} choice={choice.name} onChoose={chooseHandler} />)

	return (
		<main className={styles['game-board']}>
			<div className={styles.triangle}>
				{toChoose}
			</div>
		</main>
	)
}
