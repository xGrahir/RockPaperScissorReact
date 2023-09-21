import styles from './RulesButton.module.css'
import { infoActions } from '../../store'
import { useDispatch } from 'react-redux'

export const RulesButton = () => {

    const dispatch = useDispatch()

    const showRulesHandler = () => {
		dispatch(infoActions.activeState())
	}

	return (
		<div className={styles.reset}>
			<button onClick={showRulesHandler}>Rules</button>
		</div>
	)
}
