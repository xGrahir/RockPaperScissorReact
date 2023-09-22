import styles from './GameBoardResult.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { infoActions } from '../../store'
import { Wrapper } from '../../utilities/Wrapper'
import { Choice } from '../Choices/Choice'
import { useState, useEffect } from 'react'

export const GameBoardResult = () => {
	const [isComputerChoose, setIsComputerChoose] = useState(false)
	const [winState, setWinState] = useState()
	const dispatch = useDispatch()

	const player = useSelector(state => state.info.playerPick)
	const computer = useSelector(state => state.info.computerPick)

	const winStateHandler = () => {
		if (player === computer) {
			setWinState('draw')
		} else if (
			(player === 'paper' && computer === 'scissors') ||
			(player === 'rock' && computer === 'paper') ||
			(player === 'scissors' && computer === 'rock')
		) {
			setWinState('lose')
		} else {
			setWinState('win')
			dispatch(infoActions.addPoint())
		}
	}

	const gameResetHandler = () => {
		dispatch(infoActions.reset())
	}

	useEffect(() => {
		setTimeout(() => {
			winStateHandler()
			setIsComputerChoose(true)
		}, 1000)
	}, [])

	return (
		<Wrapper>
			<div className={styles.wrapper}>
				<div className={styles['result-board']}>
					<div className={styles.picks}>
						<div className={styles.pick}>
							<Choice choice={player} />
							<h3>You picked</h3>
						</div>
						<div className={styles.pick}>
							{!isComputerChoose ? (
								<div className={`${styles['computer-picking']}`}></div>
							) : (
								<Choice choice={computer} />
							)}
							<h3>{!isComputerChoose ? 'Computer is picking' : 'Computer picked'}</h3>
						</div>
					</div>
					{isComputerChoose ? (
						<div className={styles.info}>
							<h3>You {winState}</h3>
							<button onClick={gameResetHandler}>Play Again</button>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</Wrapper>
	)
}
