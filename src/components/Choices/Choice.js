import styles from './Choice.module.css'

export const Choice = ({ choice, winner }) => {
	return (
		<div className={`${styles.overlay} ${winner ? `${styles.win} ${styles.winner}` : ''}`}>
			<div className={winner ? `${styles.win2} ${styles.winner}` : ''}>
				<div className={winner ? `${styles.win3} ${styles.winner}` : ''}>
					<div value={`${choice}`} className={`${styles[`${choice}-box`]} ${styles.box}`}>
						<div className={`${styles['gradient-box']} ${styles[`gradient-${choice}`]}`}>
							<div className={`${styles[`${choice}`]} ${styles.icon}`}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
