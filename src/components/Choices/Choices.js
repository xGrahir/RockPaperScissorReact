import styles from '../GameBoard/GameBoardPick.module.css'

export const Choices = ({ choice, onChoose }) => {

	const chooseHandler = e => {
		onChoose(e)
	}

	return (
		<button
			value={`${choice}`}
			onClick={chooseHandler}
			className={`${styles[`${choice}-box`]} ${styles.box}`}>
			<div className={`${styles['gradient-box']} ${styles[`gradient-${choice}`]}`}>
				<div className={`${styles[`${choice}`]} ${styles.icon}`}></div>
			</div>
		</button>
	)
}
