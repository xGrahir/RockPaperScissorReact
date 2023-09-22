import styles from './Choice.module.css'

export const Choice = ({ choice }) => {
	return (
		<div className={styles.smth2}>
			<div className={styles.smth}>
				<div value={`${choice}`} className={`${styles[`${choice}-box`]} ${styles.box}`}>
					<div className={`${styles['gradient-box']} ${styles[`gradient-${choice}`]}`}>
						<div className={`${styles[`${choice}`]} ${styles.icon}`}></div>
					</div>
				</div>
			</div>
		</div>
	)
}
