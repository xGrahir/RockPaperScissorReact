import styles from './GameBoardResult.module.css'
import { useSelector } from 'react-redux'
import { Wrapper } from '../../utilities/Wrapper'
import { Choice } from '../Choices/Choice'

export const GameBoardResult = () => {
	const playerChoice = useSelector(state => state.info.playerPick)

	return (
			<Wrapper>
				<div className={styles.wrapper}>
					<div className={styles['result-board']}>
						<div className={styles.picks}>
							<Choice choice={playerChoice} />
							<h3>You picked</h3>
						</div>
						<div className={styles.picks}>
							<div className={`${styles['computer-picking']}`}></div>
							<h3>Computer picked</h3>
						</div>
					</div>
				</div>
			</Wrapper>
	)
}
