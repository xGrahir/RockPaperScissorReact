import styles from './ScoreBoard.module.css'
import { Wrapper } from '../../utilities/Wrapper'
import { useSelector } from 'react-redux'
import { RulesButton } from '../Rules/RulesButton'

export const ScoreBoard = () => {
	const score = useSelector(state => state.info.score)

	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.wrapper}>
					<div className={styles.frame}>
						<div>
							<p>Rock</p>
							<p>Paper</p>
							<p>Scissors</p>
						</div>
						<div className={styles['points-board']}>
							<div className={styles.wrapper}>
								<p className={styles['title-score']}>Score</p>
								<p className={styles.score}>{score}</p>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			<RulesButton />
		</header>
	)
}
