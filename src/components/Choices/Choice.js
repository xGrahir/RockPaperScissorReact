import styles from './Choice.module.css'

export const Choice = ({choice}) => {

    return (
		<div value={`${choice}`} className={`${styles[`${choice}-box`]} ${styles.box}`}>
			<div className={`${styles['gradient-box']} ${styles[`gradient-${choice}`]}`}>
				<div className={`${styles[`${choice}`]} ${styles.icon}`}></div>
			</div>
		</div>
	)
}