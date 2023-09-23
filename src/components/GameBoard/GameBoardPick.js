import styles from './GameBoardPick.module.css'
import { useDispatch} from 'react-redux'
import { infoActions } from '../../store'
import { Choices } from '../Choices/Choices'

const choices = [
	{ name: 'paper', id: 0 },
	{ name: 'scissors', id: 1 },
	{ name: 'rock', id: 2 },
]

export const GameBoardPick = () => {

	const dispatch = useDispatch()

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
		<div className={styles.triangle}>{toChoose}</div>
	)
}
