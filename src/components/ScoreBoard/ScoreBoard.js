import styles from './ScoreBoard.module.css'
import { Wrapper } from '../../utilities/Wrapper'

export const ScoreBoard = () => {
	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.frame}>
					<div>
						<p>Rock</p>
						<p>Paper</p>
						<p>Scissors</p>
					</div>
					<div className={styles['points-board']}>
						<div className={styles.wrapper}>
							<p className={styles['title-score']}>Score</p>
							<p className={styles.score}>0</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</header>
	)
}
